import React from 'react';
import {Link} from 'gatsby';
import {Text, Box, Accordion, AccordionPanel} from 'grommet';
import styled, {css} from 'styled-components';
import _ from 'lodash';

import 'github-markdown-css/github-markdown.css';
import 'prismjs/themes/prism-okaidia.css';

const windowGlobal = typeof window !== 'undefined' && window;

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

  ${props =>
    props.current &&
    css`
      color: rgb(62, 175, 124);
    `};
`;

const TreeNode = props => {
  let {post, children, fontsize} = props;

  if (fontsize === undefined) {
    fontsize = 1;
  }
  let aryChildren = [];

  _.forOwn(children, (value, key) => {
    aryChildren.push(value);
  });

  aryChildren = _.sortBy(aryChildren, o => {
    return o.post.fields.permalink;
  });

  let isCurrent =
    windowGlobal && windowGlobal.location.pathname == post.fields.permalink;
  return (
    <Box>
      <StyledLink
        current={isCurrent}
        href={post.fields.permalink}
        style={{fontSize: `${fontsize}em`}}>
        {post.frontmatter.title}
      </StyledLink>

      {aryChildren.map((child, idx) => {
        child.fontsize = fontsize * 0.9;

        return (
          <Box pad={{left: 'small'}} key={idx}>
            {TreeNode(child)}
          </Box>
        );
      })}
    </Box>
  );
};

export default TreeNode;
