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
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
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

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          });
        });

        createTagPages(createPage, posts);
      }),
    );
  });
};

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

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
