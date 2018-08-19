import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'gatsby';
import get from 'lodash/get';
import Layout from '../components/layout';
import {css} from 'styled-components';
import {Heading, Paragraph} from 'grommet';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    const {previous, next} = this.props.pageContext;

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: siteDescription}]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Heading level={1}>{post.frontmatter.title}</Heading>
        <Paragraph>{post.frontmatter.date}</Paragraph>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
        <hr
          style={{
            marginBottom: 1,
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
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
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
