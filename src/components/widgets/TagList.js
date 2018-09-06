import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Box, Anchor, Text, Heading} from 'grommet';
import styled, {css} from 'styled-components';
import _ from 'lodash';
import randomcolor from 'randomcolor';

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
  margin: 5px;
`;

const TagList = props => (
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

      return (
        <Box margin="xsmall" pad="small" background={{color: '#ffffff'}} border>
          <Heading level={3} margin={{top: 'none'}}>
            Tags:
          </Heading>
          <Box direction="row" wrap>
            {tags.map((tag, idx) => (
              <Tag key={idx} href={`/tags/${tag.value}/page/0`}>
                <Small
                  style={{
                    color: randomcolor({
                      luminosity: 'random',
                      hue: 'random',
                    }),
                  }}>
                  {tag.value} {tag.count}
                </Small>
              </Tag>
            ))}
          </Box>
        </Box>
      );
    }}
  />
);

export default TagList;
