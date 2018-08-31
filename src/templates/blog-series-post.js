import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'gatsby';
import get from 'lodash/get';

import PageTemplate from '../components/layout';
import {Box, Heading, Markdown} from 'grommet';
import Section from '../components/Section';
import styled from 'styled-components';
import _ from 'lodash';

const ContentBox = styled.div`
  img {
    max-width: 100%;
  }
`;
const themecolor = 'rgb(129,155,199)';

const TreeNode = props => {
  let {post, children} = props;
  console.log('treenode', post, children);

  let aryChildren = [];

  _.forOwn(children, (value, key) => {
    aryChildren.push(value);
  });

  aryChildren = _.sortBy(aryChildren, o => {
    return o.post.fields.slug;
  });
  console.log('arychildren', aryChildren);
  return (
    <div>
      {post && (
        <Link to={post.fields.slug}>
          <h3> {post.frontmatter.title}</h3>
        </Link>
      )}

      <ul>
        {aryChildren &&
          aryChildren.map((child, idx) => <li key={idx}>{TreeNode(child)}</li>)}
      </ul>
    </div>
  );
};

export default class SeriesPost extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    const {outline, prev, next} = this.props.pageContext;

    let series = JSON.parse(outline);
    console.log('series', series);

    return (
      <PageTemplate>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: siteDescription}]}
          title={siteTitle}
        />

        <Box direction="row" justify="center" basis="auto">
          <Box basis="middle">{TreeNode(series)}</Box>
          <Box
            basis="xsmall"
            border={{color: 'black', side: 'right', size: 'small'}}
          />
          <Box basis="xlarge">
            <Box pad="small">
              <Heading textAlign="center">{post.frontmatter.title}</Heading>
              <Box align="end">{post.frontmatter.date}</Box>
            </Box>
            <Box direction="row" pad="small">
              <ContentBox>
                <div dangerouslySetInnerHTML={{__html: post.html}} />
              </ContentBox>
            </Box>
          </Box>
        </Box>
        <Section pad={{horizontal: 'xlarge', top: 'large'}}>
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
      </PageTemplate>
    );
  }
}

export const pageQuery = graphql`
  query BlogSeriesPostBySlug($slug: String!) {
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
