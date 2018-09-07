import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import {Box, Anchor, Heading, Text} from 'grommet';
import styled from 'styled-components';
import _ from 'lodash';

import PageLayout from '../components/Layout';
import PrevNext from '../components/PrevNext';
import Disqus from 'disqus-react';
import Section from '../components/Section';
const ContentBox = styled.div`
  img {
    max-width: 100%;
  }
`;

const StyledUL = styled.ul`
  list-style: none;
  padding-left: 1em;
  margin: 0px;
`;

const StyledLI = styled.li``;
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

  console.log('disqus', site, disqusShortname, disqusConfig);
  return (
    <PageLayout>
      <Helmet
        htmlAttributes={{lang: 'en'}}
        meta={[{name: 'description', content: site.description}]}
        title={site.title}
      />
      <Box direction="row" justify="center">
        <Box basis="xlarge">
          <Box pad="small">
            <Heading textAlign="center" margin="small">
              {post.frontmatter.title}
            </Heading>
            <Box align="end">
              {post.frontmatter.date}{' '}
              <Anchor href={onlinePath} label="View page source" />
            </Box>
          </Box>
          <Box direction="row" pad="small">
            <ContentBox>
              <div dangerouslySetInnerHTML={{__html: post.html}} />
            </ContentBox>
          </Box>
        </Box>
        {toc && (
          <Box
            basis="medium"
            pad="small"
            border={{color: 'lightgrey', side: 'left', size: 'small'}}>
            <Box align="center">
              <Heading level={3} margin="small">
                TOC
              </Heading>
            </Box>
            {TreeNode(parsedTOC)}
          </Box>
        )}
      </Box>
      <PrevNext prev={prev} next={next} />
      <Section pad={{horizontal: 'xlarge', top: 'small'}}>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </Section>
    </PageLayout>
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
