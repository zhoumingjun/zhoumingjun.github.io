const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

const pageSize = 10;

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });

    const category = _.split(slug, '/')[1];
    createNodeField({
      name: `category`,
      node,
      value: category,
    });
  }
};

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    const blogTag = path.resolve('./src/templates/blog-tag.js');
    resolve(
      graphql(`
        {
          site {
            siteMetadata {
              title
            }
          }

          allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: 1000
          ) {
            edges {
              node {
                internal {
                  content
                }
                fields {
                  slug
                  category
                }
                frontmatter {
                  title
                  date
                  tags
                  desc
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const edges = result.data.allMarkdownRemark.edges;

        const categoryPosts = {};
        const seriesPosts = {};
        const kbPosts = {};
        _.each(edges, ({node}) => {
          category = node.fields.category;
          if (category) {
            if (category === 'series') {
              const seriesName = _.split(node.fields.slug, '/')[2];
              if (!seriesPosts[seriesName]) {
                seriesPosts[seriesName] = [];
              }

              seriesPosts[seriesName].push(node);
            } else if (category === 'knowledgebase') {
              const baseName = _.split(node.fields.slug, '/')[2];
              if (!kbPosts[baseName]) {
                kbPosts[baseName] = [];
              }

              kbPosts[baseName].push(node);
            } else {
              if (!categoryPosts[category]) {
                categoryPosts[category] = [];
              }
              categoryPosts[category].push(node);
            }
          }
        });

        // tags
        createTagPages(createPage, edges);

        // Normal pages
        createCategoryPages(createPage, categoryPosts);

        // TOC pages
        createTOCPages(createPage, seriesPosts, '/series');
        createTOCPages(createPage, kbPosts, '/knowledgebase');
      }),
    );
  });
};

function createTOCPages(createPage, seriesPosts, base) {
  const tmplSeries = path.resolve('./src/templates/blog-series.js');
  const tmplPost = path.resolve('./src/templates/blog-post.js');

  // generate series summary
  let seriesTree = {};
  _.each(_.keys(seriesPosts), (seriesName, seriesIndex) => {
    posts = seriesPosts[seriesName];
    _.sortBy(posts, [
      function(o) {
        return o.fields.slug;
      },
    ]);
    _.each(posts, post => {
      items = post.fields.slug.split('/');
      items = items.slice(2, items.length - 1);
      let path = [];
      for (idx = 0; idx < items.length; idx++) {
        path = _.concat(path, ['children'], [items[idx]]);

        if (idx != items.length - 1) {
          // middle node
          if (!_.get(seriesTree, path)) {
            _.set(seriesTree, path, {});
          }
        } else {
          // leaf node
          if (!_.get(seriesTree, path)) {
            _.set(seriesTree, path, {post});
          } else {
            _.set(seriesTree, _.concat(path, ['post']), post);
          }
        }
      }
    });
  });

  createPage({
    path: base,
    component: tmplSeries,
    context: {
      outline: JSON.stringify(seriesTree.children),
    },
  });

  // generate page
  _.each(_.keys(seriesPosts), (seriesName, seriesIndex) => {
    posts = seriesPosts[seriesName];
    posts = _.sortBy(posts, [
      function(o) {
        return o.fields.slug;
      },
    ]);

    _.each(posts, (post, index) => {
      const next = index === posts.length - 1 ? null : posts[index + 1];
      const prev = index === 0 ? null : posts[index - 1];

      createPage({
        path: post.fields.slug,
        component: tmplPost,
        context: {
          slug: post.fields.slug,
          toc: JSON.stringify(seriesTree.children[seriesName]),
          next,
          prev,
        },
      });
    });
  });
}

function createCategoryPages(createPage, categoryPosts) {
  const tmplCategory = path.resolve('./src/templates/blog-category.js');
  const tmplPost = path.resolve('./src/templates/blog-post.js');

  // generate categories & page
  _.each(_.keys(categoryPosts), category => {
    posts = categoryPosts[category];

    const pagesSum = Math.ceil(posts.length / pageSize);
    for (let page = 0; page < pagesSum; page++) {
      createPage({
        path: `/categories/${category}/page/${page}`,
        component: tmplCategory,
        context: {
          posts: posts.slice(page * pageSize, (page + 1) * pageSize + 1),
          category,
          pagesSum,
          page,
        },
      });
    }

    // create pages
    _.each(posts, (post, index) => {
      const next = index === posts.length - 1 ? null : posts[index + 1];
      const prev = index === 0 ? null : posts[index - 1];

      createPage({
        path: post.fields.slug,
        component: tmplPost,
        context: {
          slug: post.fields.slug,
          prev,
          next,
        },
      });
    });
  });
}

function createTagPages(createPage, edges) {
  const template = path.resolve('./src/templates/blog-tag.js');
  const posts = {};

  _.each(edges, ({node}) => {
    if (node.frontmatter.tags) {
      _.each(node.frontmatter.tags, tag => {
        if (!posts[tag]) {
          posts[tag] = [];
        }
        posts[tag].push(node);
      });
    }
  });

  _.each(_.keys(posts), tag => {
    const pagesSum = Math.ceil(posts[tag].length / pageSize);

    for (let page = 0; page < pagesSum; page++) {
      createPage({
        path: `/tags/${tag}/page/${page}`,
        component: template,
        context: {
          posts: posts[tag].slice(page * pageSize, (page + 1) * pageSize + 1),
          tag,
          pagesSum,
          page,
        },
      });
    }
  });
}
