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
      <Link to={post.fields.slug}>
        <Text> {post.frontmatter.title}</Text>
      </Link>

      {aryChildren.map((child, idx) => (
        <Box pad={{left: 'small'}} key={idx}>
          {TreeNode(child)}
        </Box>
      ))}
    </Box>
  );
};

export default TreeNode;
