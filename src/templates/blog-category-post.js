import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import {Box, Anchor, Heading} from 'grommet';
import Section from '../components/Section';
import PageLayout from '../components/Layout';
import _ from 'lodash';
import PrevNext from '../components/PrevNext';

const BlogCategoryPost = ({
  pageContext: {prev, next},
  data: {
    site: {siteMetadata: site},
    markdownRemark: post,
  },
}) => {
  let localPath = post.fileAbsolutePath;
  let onlinePath =
    site.sourceUrl + localPath.substr(localPath.indexOf('content'));
  return (
    <PageLayout>
      <Section pad={{horizontal: 'xsmall', vertical: 'large'}}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: site.description}]}
          title={site.title}
        />
        <Box>
          <Heading textAlign="center" margin="small">
            {post.frontmatter.title}
          </Heading>
          <Box align="end">
            {post.frontmatter.date}
            <Anchor href={onlinePath} label="View page source" />
          </Box>
        </Box>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </Section>
      <PrevNext prev={prev} next={next} />
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
        sourceUrl
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt
      html
      fileAbsolutePath
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
