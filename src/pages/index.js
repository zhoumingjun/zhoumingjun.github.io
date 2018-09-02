import React from 'react';
import {graphql} from 'gatsby';
import Posts from '../components/posts';
import Layout from '../components/Layout';
import Section from '../components/Section';

const Index = ({
  data: {
    allMarkdownRemark: {edges: posts},
  },
}) => (
  <Layout>
    <Section pad={{horizontal: 'xsmall', vertical: 'large'}}>
      <Posts posts={posts.map(post => post.node)} />
    </Section>
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
