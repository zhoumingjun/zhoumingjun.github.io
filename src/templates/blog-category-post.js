import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import {Box, Heading} from 'grommet';
import _ from 'lodash';

import Section from '../components/Section';
import PageLayout from '../components/Layout';

const BlogCategoryPost = ({
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
        <Box>
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
export default BlogCategoryPost;

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
        desc
      }
    }
  }
`;
