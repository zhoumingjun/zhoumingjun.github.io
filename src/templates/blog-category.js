import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import Posts from '../components/posts';
import Layout from '../components/layout';

const Tags = ({
  pageContext: {posts, tag},
  data: {
    site: {siteMetadata: site},
  },
}) => (
  <Layout>
    <Helmet>
      <title>
        {tag} &middot; {site.title}
      </title>
    </Helmet>
    <h2>{tag}</h2>
    <section>
      {posts.length} {posts.length !== 1 ? 'posts' : 'post'} in {tag}.
    </section>
    <section>
      <Posts posts={posts} />
    </section>
  </Layout>
);

export default Tags;

export const tagsQuery = graphql`
  query CategoriesSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
