import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {Box} from 'grommet';

const StyledLink = styled(Link)`
  border-color: grey;
  border-style: solid;
  border-width: 1px;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;
const PostNav = ({prev, next}) => (
  <Box direction="row" justify="between" margin="xsmall">
    {prev && (
      <StyledLink to={prev.fields.permalink} rel="prev">
        <span>{'<-'}</span> {prev.frontmatter.title}
      </StyledLink>
    )}
    <div />
    {next && (
      <StyledLink to={next.fields.permalink} rel="next">
        {next.frontmatter.title} <span>{'->'}</span>
      </StyledLink>
    )}
  </Box>
);

export default PostNav;
