import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import _ from 'lodash';
import {Box} from 'grommet';
import styled from 'styled-components';

import Section from '../components/ui/Section';
import Layout from '../components/Layout';
import Posts from '../components/content/Posts';

const StyledLink = styled.a`
  border-radius: ${0}px;
  color: #2c3e50;
  &:link {
    text-decoration: none;
  }
  &:hover {
    color: rgb(62, 175, 124);
  }
`;

const mapTOC = props => {
  let {post, children, fontsize} = props;

  if (fontsize === undefined) {
    fontsize = 1;
  }
  let aryChildren = [];

  _.forOwn(children, (value, key) => {
    aryChildren.push(value);
  });

  aryChildren = _.sortBy(aryChildren, o => {
    return o.post.fields.permalink;
  });
  return (
    <Box>
      <StyledLink
        href={post.fields.permalink}
        style={{fontSize: `${fontsize}em`}}>
        {post.frontmatter.title}
      </StyledLink>
      <Box direction="row">
        {aryChildren.map((child, idx) => {
          child.fontsize = fontsize * 0.9;
          return (
            <Box pad={{left: 'small'}} key={idx}>
              {mapTOC(child)}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const BlogSeries = ({
  pageContext: {toc},
  data: {
    site: {siteMetadata: site},
  },
}) => {
  toc = JSON.parse(toc);
  let series = [];
  _.forOwn(toc, kk => {
    series.push(kk);
  });

  return (
    <Layout>
      <Helmet
        htmlAttributes={{lang: 'en'}}
        meta={[{name: 'description', content: site.description}]}
        title={site.title}
      />
      <Box direction="row" fill="horizontal" justify="center">
        <Box basis="xlarge" justify="center">
          {series.map((child, idx) => (
            <div key={idx}>{mapTOC(child)}</div>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default BlogSeries;

export const pageQuery = graphql`
  query BlogKnowledgeBase {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
