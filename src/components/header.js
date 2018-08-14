/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'react-emotion';
import A from './header-footer-anchor';
import {withTheme} from 'emotion-theming';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${props => props.theme.headerHeight};
  color: ${props => props.theme.textColor};
`;

const H1 = styled.h1(({theme}) => ({
  margin: 0,
}));

const Small = styled.small`
  font-size: 75%;
  opacity: 0.35;
}`;

const Nav = styled.nav({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  textTransform: 'uppercase',
});

const SiteHeader = () => (
  <Header>
    <H1>
      {/* <Small>With</Small>{' '} */}
      <A inline href="/">
        Mingjun Zhou's
      </A>{' '}
      <Small>tech stacks </Small>
    </H1>
    <Nav>
      <A href="/">Blog</A>
      <A href="/about">About</A>
      <A href="https://github.com/zhoumingjun">GitHub</A>
    </Nav>
  </Header>
);

export default SiteHeader;
