import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import CenterWrap from '../components/center-wrap';
import Posts from '../components/posts';

const Tags = ({
  pageContext: {posts, tag},
  data: {
    site: {siteMetadata: site},
  },
}) => (
  <CenterWrap>
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
  </CenterWrap>
);

export default Tags;

export const tagsQuery = graphql`
  query TagsSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
