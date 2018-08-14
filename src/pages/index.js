import React from 'react';
import {graphql} from 'gatsby';
import CenterWrap from '../components/center-wrap';
import Posts from '../components/posts';
import Layout from '../components/layout';

const Index = ({
  data: {
    allMarkdownRemark: {edges: posts},
  },
}) => (
  <Layout>
    <CenterWrap>
      <h2>Blog</h2>
      <Posts posts={posts.map(post => post.node)} />
    </CenterWrap>
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
