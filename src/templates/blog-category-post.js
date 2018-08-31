import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/layout';
import {Box, Heading, Markdown} from 'grommet';
import Section from '../components/Section';
import Nav from '../components/Nav';
import styled from 'styled-components';

const StyledBox = styled.div`
  background-position: bottom right;
  background-size: 25%;
  background-color: #eeeeee;
  min-height: 100vh;
`;
const ContentBox = styled.div`
  img {
    max-width: 100%;
  }
`;
const themecolor = 'rgb(129,155,199)';

export default class CategoryPost extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    const {prev, next} = this.props.pageContext;
    console.log('prev', prev, 'next', next);
    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: siteDescription}]}
          title={siteTitle}
        />
        <StyledBox>
          <Section pad={{horizontal: 'xlarge', top: 'large'}}>
            <Nav />
            <Box width="xlarge">
              <Box background={{color: themecolor, dark: 'true'}} pad="small">
                <Heading textAlign="center">{post.frontmatter.title}</Heading>
                <Box align="end">{post.frontmatter.date}</Box>
              </Box>
              <Box pad="small">
                <ContentBox>
                  <div dangerouslySetInnerHTML={{__html: post.html}} />
                </ContentBox>
              </Box>
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
            </Box>
          </Section>
        </StyledBox>
      </Layout>
    );
  }
}

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
