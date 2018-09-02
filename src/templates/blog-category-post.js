import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'gatsby';
import 'prismjs/themes/prism-okaidia.css';

import {Box, Heading, Markdown} from 'grommet';

import styled from 'styled-components';
import _ from 'lodash';
import Section from '../components/Section';
import PageLayout from '../components/Layout';
``;
const themecolor = 'rgb(129,155,199)';

const CategoryPostPage = ({
  pageContext: {prev, next},
  data: {
    site: {siteMetadata: site},
    markdownRemark: post,
  },
}) => {
  return (
    <PageLayout>
      <Section pad={{horizontal: 'xsmall', vertical: 'large'}}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: site.description}]}
          title={site.title}
        />
        <Box background={{color: themecolor, dark: 'true'}}>
          <Heading textAlign="center">{post.frontmatter.title}</Heading>
          <Box align="end">{post.frontmatter.date}</Box>
        </Box>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
        <hr />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}>
          {prev && (
            <li>
              <Link to={prev.fields.slug} rel="prev">
                <span>←</span> {prev.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </Section>
    </PageLayout>
  );
};
export default CategoryPostPage;
export const pageQuery = graphql`
  query BlogCategoryPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt
      html
      fields {
        slug
        category
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
