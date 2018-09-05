import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import Section from '../components/Section';
import PageLayout from '../components/Layout';
import Posts from '../components/posts';
const BlogCategory = ({
  pageContext: {posts, tag},
  data: {
    site: {siteMetadata: site},
  },
}) => (
  <PageLayout>
    <Section pad={{horizontal: 'xsmall', vertical: 'large'}}>
      <Helmet
        htmlAttributes={{lang: 'en'}}
        meta={[{name: 'description', content: site.description}]}
        title={site.title}
      />

      <Posts posts={posts} />
    </Section>
  </PageLayout>
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
