import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import PageLayout from '../components/Layout';
import {Box} from 'grommet';
import get from 'lodash/get';
import Section from '../components/Section';

const CategoryPage = ({
  pageContext: {posts, tag},
  data: {
    site: {siteMetadata: site},
  },
}) => (
  <PageLayout>
    <Section pad={{horizontal: 'xsmall', vertical: 'large'}}>
      <Helmet
        htmlAttributes={{lang: 'en'}}
        meta={[{name: 'description', content: site.description}]}
        title={site.title}
      />
      {posts &&
        posts.map(node => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;

          return (
            <Box key={node.fields.slug} direction="column">
              <h3>
                <Link style={{boxShadow: 'none'}} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{__html: node.excerpt}} />
            </Box>
          );
        })}
    </Section>
  </PageLayout>
);

export default CategoryPage;

export const pageQuery = graphql`
  query BlogPostBySlug {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
