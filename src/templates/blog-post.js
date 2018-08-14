import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'gatsby';
import get from 'lodash/get';
import {css} from 'emotion';
import Layout from '../components/layout';
import {rhythm, scale} from '../utils/typography';

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
        <h1
          className={css`
            text-align: center;
          `}>
          {post.frontmatter.title}
        </h1>
        <p
          className={css`
            text-align: right;
            margin-bottom: ${rhythm(1)};
            margin-top: ${rhythm(-1)};
            display: block;
            ${scale(-1 / 5)};
          `}>
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
        <hr
          style={{
            marginBottom: rhythm(1),
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
