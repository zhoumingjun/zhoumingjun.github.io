import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import {Box} from 'grommet';
import _ from 'lodash';

import Section from '../components/Section';
import PageLayout from '../components/Layout';
import Posts from '../components/posts';
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
    <PageLayout>
      <Section pad={{horizontal: 'xsmall', vertical: 'large'}}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: site.description}]}
          title={site.title}
        />
        {series && <Posts posts={series} />}
      </Section>
    </PageLayout>
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
