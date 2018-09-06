import React from 'react';
import {graphql} from 'gatsby';
import {Box, Heading} from 'grommet';
import Posts from '../components/posts';
import Layout from '../components/Layout';
import TagCloud from '../components/widgets/TagCloud';

const All = props => {
  let {
    data: {
      allMarkdownRemark: {edges: posts},
    },
  } = props;

  return (
    <Layout>
      <Box direction="row" basis="xlarge" justify="center">
        <Box direction="column" width="xlarge">
          <Posts posts={posts.map(post => post.node)} />
        </Box>
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
