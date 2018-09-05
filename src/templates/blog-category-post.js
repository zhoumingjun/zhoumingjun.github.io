import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import {Box, Anchor, Heading} from 'grommet';
import Section from '../components/Section';
import PageLayout from '../components/Layout';
import _ from 'lodash';
import PrevNext from '../components/PrevNext';
import Disqus from 'disqus-react';

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

  const disqusShortname = site.disqusShortname;
  const disqusConfig = {
    url: site.siteUrl + post.fields.slug,
    identifier: post.id,
    title: post.frontmatter.title,
  };
  console.log('disqus', site, disqusShortname, disqusConfig);

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
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
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
        siteUrl
        disqusShortname
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
