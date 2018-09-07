import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import {Box, Anchor, Heading, Text} from 'grommet';
import styled from 'styled-components';
import Disqus from 'disqus-react';
import _ from 'lodash';

import Layout from '../components/Layout';
import PrevNext from '../components/content/PostNav';
import Section from '../components/ui/Section';

import 'github-markdown-css/github-markdown.css';
import 'prismjs/themes/prism-okaidia.css';

const StyledUL = styled.ul`
  list-style: none;
  padding-left: 1em;
  margin: 0px;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const StyledLink = styled(Link)`
  border-color: grey;
  border-style: solid;
  border-width: 1px;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const TreeNode = props => {
  let {post, children} = props;

  let aryChildren = [];

  _.forOwn(children, (value, key) => {
    aryChildren.push(value);
  });

  aryChildren = _.sortBy(aryChildren, o => {
    return o.post.fields.slug;
  });
  return (
    <div>
      {post && (
        <Link to={post.fields.slug}>
          <Text> {post.frontmatter.title}</Text>
        </Link>
      )}

      <StyledUL>
        {aryChildren &&
          aryChildren.map((child, idx) => (
            <StyledLI key={idx}>{TreeNode(child)}</StyledLI>
          ))}
      </StyledUL>
    </div>
  );
};

const BlogSeriesPost = ({
  pageContext: {prev, next, toc},
  data: {
    site: {siteMetadata: site},
    markdownRemark: post,
  },
}) => {
  let parsedTOC = toc ? JSON.parse(toc) : undefined;

  let localPath = post.fileAbsolutePath;
  let onlinePath =
    site.sourceUrl + localPath.substr(localPath.indexOf('content'));

  const disqusShortname = site.disqusShortname;
  const disqusConfig = {
    url: site.siteUrl + post.fields.slug,
    identifier: post.id,
    title: post.frontmatter.title,
  };

  return (
    <Layout>
      <Helmet
        htmlAttributes={{lang: 'en'}}
        meta={[{name: 'description', content: site.description}]}
        title={site.title}
      />
      <Box basis="xlarge" justify="start">
        <Box
          direction="row"
          fill="horizontal"
          border="xsmall"
          margin="xsmall"
          justify="center"
          pad="small">
          <Box fill="horizontal">
            <Box align="center">
              <Heading level={2} margin="small">
                {post.frontmatter.title}
              </Heading>
            </Box>
            <Box align="end">
              {post.frontmatter.date}{' '}
              <Anchor href={onlinePath} label="View page source" />
            </Box>
          </Box>
        </Box>

        <Box
          direction="row"
          fill="horizontal"
          border="xsmall"
          margin="xsmall"
          pad="small">
          <ContentWrapper
            className="markdown-body"
            dangerouslySetInnerHTML={{__html: post.html}}
          />
        </Box>

        <Box
          direction="row"
          fill="horizontal"
          justify="between"
          margin="xsmall">
          {prev && (
            <StyledLink to={prev.fields.slug} rel="prev">
              <span>{'<-'}</span> {prev.frontmatter.title}
            </StyledLink>
          )}
          <div />
          {next && (
            <StyledLink to={next.fields.slug} rel="next">
              {next.frontmatter.title} <span>{'->'}</span>
            </StyledLink>
          )}
        </Box>
        <Box
          direction="row"
          fill="horizontal"
          justify="center"
          border="xsmall"
          margin="xsmall"
          pad="small">
          <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default BlogSeriesPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      }
    }
  }
`;
