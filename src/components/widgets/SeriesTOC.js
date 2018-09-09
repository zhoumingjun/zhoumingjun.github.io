import React from 'react';
import {Link} from 'gatsby';
import {Text, Box, Accordion, AccordionPanel} from 'grommet';
import styled from 'styled-components';
import _ from 'lodash';

import 'github-markdown-css/github-markdown.css';
import 'prismjs/themes/prism-okaidia.css';

const StyledUL = styled.ul`
  list-style: none;
  padding-left: 1em;
  margin: 0px;
`;

const StyledLink = styled.a`
  border-radius: ${0}px;
  color: #2c3e50;
  font-size: 0.8em;
  &:link {
    text-decoration: none;
  }
  &:hover {
    color: rgb(62, 175, 124);
  }
`;

const StyledLI = styled.li``;

const TreeNode = props => {
  let {post, children} = props;

  let aryChildren = [];

  _.forOwn(children, (value, key) => {
    aryChildren.push(value);
  });

  aryChildren = _.sortBy(aryChildren, o => {
    return o.post.fields.slug;
  });
  return (
    <Box>
      <StyledLink href={post.fields.slug}>{post.frontmatter.title}</StyledLink>

      {aryChildren.map((child, idx) => (
        <Box pad={{left: 'small'}} key={idx}>
          {TreeNode(child)}
        </Box>
      ))}
    </Box>
  );
};

export default TreeNode;
