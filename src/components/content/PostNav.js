import React from 'react';
import Section from '../ui/Section';
import {Link, graphql} from 'gatsby';
import styled from 'styled-components';

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
  <Section pad={{horizontal: 'xlarge', top: 'small'}}>
    <hr />

    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
      }}>
      <li>
        {prev && (
          <StyledLink to={prev.fields.slug} rel="prev">
            <span>{'<-'}</span> {prev.frontmatter.title}
          </StyledLink>
        )}
      </li>

      <li>
        {next && (
          <StyledLink to={next.fields.slug} rel="next">
            {next.frontmatter.title} <span>{'->'}</span>
          </StyledLink>
        )}
      </li>
    </ul>
  </Section>
);

export default PostNav;
