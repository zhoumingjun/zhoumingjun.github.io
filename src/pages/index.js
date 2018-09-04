import React from 'react';
import {graphql} from 'gatsby';
import {Box} from 'grommet';
import Posts from '../components/posts';
import Layout from '../components/Layout';
import TagCloud from '../components/TagCloud';
import {tag} from 'postcss-selector-parser';

const Index = props => {
  let {
    data: {
      allMarkdownRemark: {edges: posts},
    },
  } = props;

  return (
    <Layout>
      <Box direction="row" basis="xlarge" justify="center">
        <Box direction="column" width="xlarge">
          <TagCloud />
          <Posts posts={posts.map(post => post.node)} />
        </Box>
      </Box>
    </Layout>
  );
};

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
            desc
          }
        }
      }
    }
  }
`;
