import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import _ from 'lodash';
import {Box} from 'grommet';

import Section from '../components/ui/Section';
import Layout from '../components/Layout';
import Posts from '../components/content/Posts';

const BlogSeries = ({
  pageContext: {outline},
  data: {
    site: {siteMetadata: site},
  },
}) => {
  outline = JSON.parse(outline);
  let series = [];
  _.forOwn(outline, ({post}) => {
    series.push(post);
  });

  return (
    <Layout>
      <Helmet
        htmlAttributes={{lang: 'en'}}
        meta={[{name: 'description', content: site.description}]}
        title={site.title}
      />
      <Box direction="row" basis="xlarge" justify="start">
        {series && <Posts posts={series} />}
      </Box>
    </Layout>
  );
};

export default BlogSeries;

export const pageQuery = graphql`
  query BlogSeries {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
