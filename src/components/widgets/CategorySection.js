import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Box, Anchor, Text, Heading} from 'grommet';
import styled from 'styled-components';
import _ from 'lodash';

let categories = [
  {name: 'post', url: '/categories/post/page/0', desc: 'common posts'},
  {name: 'note', url: '/categories/note/page/0', desc: 'technical notes'},
  {name: 'series', url: '/series', desc: 'series'},
  {name: 'kb', url: '/knowledgebase', desc: 'knowledge base'},
];

const CategoryList = () => (
  <Box margin="xsmall" pad="small" background={{color: '#ffffff'}} border>
    <Heading level={3}>Categories:</Heading>
    <Box direction="column">
      {categories.map((category, index) => (
        <div key={index}>
          <Anchor href={category.url}>{category.name}</Anchor>: {category.desc}
        </div>
      ))}
    </Box>
  </Box>
);

export default CategoryList;
