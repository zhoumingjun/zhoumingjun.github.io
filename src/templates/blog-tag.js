import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import {Box, Heading} from 'grommet';
import Layout from '../components/Layout';
import Posts from '../components/content/Posts';

const Tags = ({
  pageContext: {posts},
  data: {
    site: {siteMetadata: site},
  },
}) => (
  <Layout>
    <Helmet
      htmlAttributes={{lang: 'en'}}
      meta={[{name: 'description', content: site.description}]}
      title={site.title}
    />
    <Box direction="row" basis="xlarge" justify="start">
      <Posts posts={posts} />
    </Box>
  </Layout>
);

export default Tags;
export const pageQuery = graphql`
  query BlogTag {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
