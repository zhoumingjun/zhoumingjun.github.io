import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Box} from 'grommet';
import {TagCloud} from 'react-tagcloud';
import {push} from 'gatsby-link';

import _ from 'lodash';

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => {
      let tags = [];
      _.each(data.allMarkdownRemark.group, tag => {
        tags.push({value: tag.fieldValue, count: tag.totalCount});
      });
      const options = {
        luminosity: 'bright',
        hue: 'random',
      };
      return (
        <Box
          margin={{vertical: 'small'}}
          pad={{vertical: 'medium'}}
          background="rgb(253, 250, 246)">
          <TagCloud
            minSize={20}
            maxSize={40}
            colorOptions={options}
            tags={tags}
            onClick={tag => {
              push(`/tags/${tag.value}/page/0`);
            }}
          />
        </Box>
      );
    }}
  />
);
