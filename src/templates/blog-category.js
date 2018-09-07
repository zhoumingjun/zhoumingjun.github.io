import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import {Box} from 'grommet';
import Layout from '../components/Layout';
import Posts from '../components/content/Posts';

const BlogCategory = ({
  pageContext: {posts, tag},
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

export default BlogCategory;

export const pageQuery = graphql`
  query BlogCategory {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
