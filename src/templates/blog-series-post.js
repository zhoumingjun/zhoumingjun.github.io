import React from 'react';

import Helmet from 'react-helmet';
import {Link} from 'gatsby';

import {Box, Heading, Text, Markdown} from 'grommet';
import 'prismjs/themes/prism-okaidia.css';
import loadScript from 'load-script';
import styled from 'styled-components';
import _ from 'lodash';
import Section from '../components/Section';
import PageLayout from '../components/Layout';
const ContentBox = styled.div`
  img {
    max-width: 100%;
  }
`;
const themecolor = 'rgb(129,155,199)';

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

      <ul>
        {aryChildren &&
          aryChildren.map((child, idx) => <li key={idx}>{TreeNode(child)}</li>)}
      </ul>
    </div>
  );
};

const MATHJAX_SCRIPT =
  'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML';

const MATHJAX_OPTIONS = {
  extensions: ['tex2jax.js'],
  jax: ['input/TeX', 'output/HTML-CSS'],
  tex2jax: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
  },
  'HTML-CSS': {fonts: ['TeX']},
};

class SeriesPostPage extends React.Component {
  // componentDidMount() {
  //   console.log('did mount');
  //   loadScript(MATHJAX_SCRIPT, () => {
  //     console.log('loaded mathjax');
  //     window.MathJax.Hub.Config(MATHJAX_OPTIONS);
  //   });
  // }

  render() {
    let {
      pageContext: {prev, next, outline},
      data: {
        site: {siteMetadata: site},
        markdownRemark: post,
      },
    } = this.props;
    let series = JSON.parse(outline);
    console.log(series);
    return (
      <PageLayout>
        <Box width="full">
          <Helmet
            htmlAttributes={{lang: 'en'}}
            meta={[{name: 'description', content: site.description}]}
            title={site.title}
          />

          <Box direction="row" justify="center" basis="auto">
            <Box basis="middle">{TreeNode(series)}</Box>
            <Box
              basis="xxsmall"
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
        </Box>
      </PageLayout>
    );
  }
}

export default SeriesPostPage;

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
