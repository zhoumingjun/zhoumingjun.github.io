import React from 'react';
import dateformat from 'dateformat';
import styled from 'styled-components';
import groupBy from 'lodash/groupBy';
import first from 'lodash/first';
import TagsList from './tags-list';
import {Heading, Anchor, Text} from 'grommet';
import {Box} from 'grommet';

const Posts = ({posts}) => {
  return (
    <section>
      {posts.map(post => (
        <Box key={post.fields.slug} margin={{bottom: 'medium'}}>
          <Text color="#818181" margin={{right: 'medium'}}>
            {dateformat(post.frontmatter.date, 'mmm dd, yyyy  ')}
          </Text>
          <Heading level={3} margin="none">
            <Anchor href={post.fields.slug}>{post.frontmatter.title}</Anchor>
          </Heading>
          <TagsList tags={post.frontmatter.tags} />

          <Text>{post.frontmatter.desc}</Text>
        </Box>
      ))}
    </section>
  );
};

export default Posts;
