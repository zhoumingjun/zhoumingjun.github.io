import React from 'react';
import {graphql} from 'gatsby';
import {Box, Heading} from 'grommet';
import Posts from '../components/content/Posts';
import Layout from '../components/Layout';

const All = props => {
  let {
    data: {
      allMarkdownRemark: {edges: posts},
    },
  } = props;

  return (
    <Layout>
      <Box direction="row" basis="xlarge" justify="start">
        <Posts posts={posts.map(post => post.node)} />
      </Box>
    </Layout>
  );
};

export default All;

export const pageQuery = graphql`
  query AllQuery {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          fields {
            permalink
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