const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    const blogTag = path.resolve('./src/templates/blog-tag.js');

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: {fields: [frontmatter___date], order: DESC}
              limit: 1000
            ) {
              group(field: fields___category) {
                edges {
                  node {
                    fields {
                      slug
                      category
                    }
                    frontmatter {
                      title
                      date
                      tags
                    }
                  }
                  next {
                    id
                  }
                  previous {
                    id
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const groups = result.data.allMarkdownRemark.group;
        console.log(groups);
        let edges = [];
        _.each(groups, group => {
          const posts = group.edges;
          edges = _.concat(edges, posts);
          _.each(posts, (post, index) => {
            const previous =
              index === posts.length - 1 ? null : posts[index + 1].node;
            const next = index === 0 ? null : posts[index - 1].node;

            createPage({
              path: post.node.fields.slug,
              component: blogPost,
              context: {
                slug: post.node.fields.slug,
                category: post.node.fields.category,
                previous,
                next,
              },
            });
          });
        });

        console.log(edges);
        createTagPages(createPage, edges);
        createCategoryPages(createPage, edges);
      }),
    );
  });
};

function createCategoryPages(createPage, edges) {
  const tagTemplate = path.resolve('./src/templates/blog-category.js');
  const posts = {};

  edges.forEach(({node}) => {
    category = node.fields.category;
    if (category) {
      if (!posts[category]) {
        posts[category] = [];
      }
      posts[category].push(node);
    }
  });

  console.log(posts);
  Object.keys(posts).forEach(categoryName => {
    const pageSize = 5;
    const pagesSum = Math.ceil(posts[categoryName].length / pageSize);

    for (let page = 1; page <= pagesSum; page++) {
      createPage({
        path:
          page === 1
            ? `/categories/${categoryName}`
            : `/categories/${categoryName}/page/${page}`,
        component: tagTemplate,
        context: {
          posts: posts[categoryName],
          tag: categoryName,
          pagesSum,
          page,
        },
      });
    }
  });
}

function createTagPages(createPage, edges) {
  const tagTemplate = path.resolve('./src/templates/blog-tag.js');
  const posts = {};

  edges.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.split(', ').forEach(tag => {
        if (!posts[tag]) {
          posts[tag] = [];
        }
        posts[tag].push(node);
      });
    }
  });

  console.log(posts);
  Object.keys(posts).forEach(tagName => {
    const pageSize = 5;
    const pagesSum = Math.ceil(posts[tagName].length / pageSize);

    for (let page = 1; page <= pagesSum; page++) {
      createPage({
        path: page === 1 ? `/tags/${tagName}` : `/tags/${tagName}/page/${page}`,
        component: tagTemplate,
        context: {
          posts: posts[tagName],
          tag: tagName,
          pagesSum,
          page,
        },
      });
    }
  });
}

const categories = ['post', 'note', 'series'];
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
    if (_.indexOf(categories, category) != -1) {
      createNodeField({
        name: `category`,
        node,
        value: category,
      });
    }
  }
};
