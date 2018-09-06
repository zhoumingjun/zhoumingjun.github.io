import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Box, Anchor, Text} from 'grommet';
import {TagCloud} from 'react-tagcloud';
import {push} from 'gatsby-link';
import styled from 'styled-components';
import _ from 'lodash';

const Small = styled.small({
  textTransform: 'lowercase',
});

const Tag = styled(Anchor)`
  border-color: green;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  padding-left: 2px;
  padding-right: 2px;
  margin-right: 10px;
`;

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
