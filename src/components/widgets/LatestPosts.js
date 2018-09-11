import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Box, Anchor, Text, Heading} from 'grommet';
import styled from 'styled-components';
import _ from 'lodash';
import Posts from '../content/Posts';
import CalendarHeatMap from './CalendarHeatMap';
const LatestPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
                tags
                desc
              }
            }
          }
        }
      }
    `}
    render={data => {
      let {
        allMarkdownRemark: {edges: posts},
      } = data;
      return (
        <Box
          margin="xsmall"
          pad="small"
          background={{color: '#ffffff'}}
          border
          fill>
          <Heading level={3} margin={{top: 'none'}}>
            Latest Posts:
          </Heading>
          {CalendarHeatMap({edges: posts})}
          <Posts posts={posts.slice(0, 3).map(post => post.node)} />
          <Anchor href="/all" label="more ..." />
        </Box>
      );
    }}
  />
);

export default LatestPosts;
