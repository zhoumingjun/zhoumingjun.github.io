import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import PageLayout from '../components/Layout';
import {Box} from 'grommet';
import get from 'lodash/get';

const Tags = ({
  pageContext: {posts, tag},
  data: {
    site: {siteMetadata: site},
  },
}) => (
  <PageLayout>
    <Helmet>
      <title>
        {tag} &middot; {site.title}
      </title>
    </Helmet>
    <Box
      background="light-1"
      direction="row"
      wrap={true}
      align="start"
      justify="start"
      alignContent="stretch"
      pad="large"
      round="large"
      animation={{type: 'fadeIn', duration: '2000'}}>
      {posts &&
        posts.map(node => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;

          return (
            <Box key={node.fields.slug} basis="large" direction="column">
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
    </Box>
  </PageLayout>
);

export default Tags;
export const pageQuery = graphql`
  query BlogTagBySlug {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
