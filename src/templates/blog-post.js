import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import {Box, Anchor, Heading, Text} from 'grommet';
import styled from 'styled-components';
import Disqus from 'disqus-react';
import _ from 'lodash';

import 'github-markdown-css/github-markdown.css';
import 'prismjs/themes/prism-okaidia.css';

import Layout from '../components/Layout';
import SeriesTOC from '../components/widgets/SeriesTOC';

const StyledLink = styled(Link)`
  border-color: grey;
  border-style: solid;
  border-width: 1px;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const Header = ({post, onlinePath}) => (
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
);

const Content = ({post}) => (
  <Box
    direction="row"
    fill="horizontal"
    border="xsmall"
    margin="xsmall"
    pad="small">
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{__html: post.html}}
    />
  </Box>
);

const PostNav = ({prev, next}) => (
  <Box direction="row" fill="horizontal" justify="between" margin="xsmall">
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
);

const Comment = ({disqusShortname, disqusConfig}) => (
  <Box border fill="horizontal" margin="xsmall" pad="small">
    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
  </Box>
);

const BlogSeriesPost = ({
  pageContext: {prev, next, toc},
  data: {
    site: {siteMetadata: site},
    markdownRemark: post,
  },
}) => {
  // series toc
  let parsedTOC = toc ? JSON.parse(toc) : undefined;

  // get github source link
  let localPath = post.fileAbsolutePath;
  let onlinePath =
    site.sourceUrl + localPath.substr(localPath.indexOf('content'));

  // disqus
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
      {parsedTOC ? (
        <Box direction="row" fill="horizontal">
          <Box basis="medium" pad="small" margin="xsmall" border>
            <Heading level={2} margin="small">
              TOC
            </Heading>
            {SeriesTOC(parsedTOC)}
          </Box>
          <Box basis="full" justify="center">
            <Header post={post} onlinePath={onlinePath} />
            <Content post={post} />
            <PostNav prev={prev} next={next} />
            <Comment
              disqusShortname={disqusShortname}
              disqusConfig={disqusConfig}
            />
          </Box>
          <Box margin="xsmall" />
        </Box>
      ) : (
        <Box direction="row" fill="horizontal" justify="center">
          <Box basis="xlarge" justify="center">
            <Header post={post} onlinePath={onlinePath} />
            <Content post={post} />
            <PostNav prev={prev} next={next} />
            <Comment
              disqusShortname={disqusShortname}
              disqusConfig={disqusConfig}
            />
          </Box>
        </Box>
      )}
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
