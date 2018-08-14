import React from 'react';
import {graphql} from 'gatsby';
import Posts from '../components/posts';
import Layout from '../components/layout';

const Index = ({
  data: {
    allMarkdownRemark: {edges: posts},
  },
}) => (
  <Layout>
    <h2>Blog</h2>
    <Posts posts={posts.map(post => post.node)} />
  </Layout>
);

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
          }
        }
      }
    }
  }
`;
