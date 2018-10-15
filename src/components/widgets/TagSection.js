import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Box, Anchor, Text, Heading} from 'grommet';
import styled, {css} from 'styled-components';
import _ from 'lodash';
import randomcolor from 'randomcolor';
import {Tag} from 'grommet-icons';
const Small = styled.small({
  textTransform: 'lowercase',
});

const StyledTag = styled(Anchor)`
  border-color: rgba(0, 0, 0, 0.4);
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  padding: 1px 5px;
  margin-right: 10px;
  margin-bottom: 10px;
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
        <Box margin="xsmall" pad="small" border="top">
          <Heading level={3} margin={{top: 'none'}}>
            Tags:
          </Heading>

          <Box direction="row" wrap>
            {tags.map((tag, idx) => (
              <StyledTag
                key={idx}
                href={`/tags/${tag.value}/page/0`}
                label={
                  <Small
                    style={{
                      color: randomcolor({
                        luminosity: 'random',
                        hue: 'random',
                      }),
                    }}>
                    {tag.value} {tag.count}
                  </Small>
                }
              />
            ))}
          </Box>
        </Box>
      );
    }}
  />
);

export default TagList;
