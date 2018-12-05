import React from 'react';
import dateformat from 'dateformat';
import styled from 'styled-components';
import groupBy from 'lodash/groupBy';
import first from 'lodash/first';
import TagsList from './SeparatedTags';
import {Heading, Anchor, Text} from 'grommet';
import {Box} from 'grommet';
import Section from '../ui/Section';

const Posts = ({posts, filter}) => {
  let filterPosts = filter
    ? posts.filter(v => {
        return v.frontmatter.date == filter;
      })
    : posts;

  if (filterPosts.length == 0) {
    return (
      <Heading level={3} textAlign="center">
        no posts on {filter}
      </Heading>
    );
  } else {
    return (
      <div>
        {filterPosts.map(post => (
          <Box key={post.fields.permalink} margin="xsmall" pad="small">
            <Text color="#818181" margin={{right: 'medium'}}>
              {dateformat(post.frontmatter.date, 'mmm dd, yyyy  ')}
            </Text>
            <Heading level={3} margin="none">
              <Anchor href={post.fields.permalink}>
                {post.frontmatter.title}
              </Anchor>
            </Heading>
            <TagsList tags={post.frontmatter.tags} />

            <Text>{post.frontmatter.desc}</Text>
          </Box>
        ))}
      </div>
    );
  }
};

export default Posts;