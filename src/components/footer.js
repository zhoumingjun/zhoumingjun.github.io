/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'react-emotion';
import A from './header-footer-anchor';

const Footer = styled.footer(({theme}) => ({
  color: theme.textColor,
  height: theme.headerHeight,
  textTransform: 'uppercase',
  textAlign: 'center',
  opacity: 0.35,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const P = styled.p(({theme}) => ({
  margin: `${theme.spacingPx / 2}px 0`,
}));

const SiteFooter = () => (
  <Footer>
    <P>&copy; 2017-2018 Mingjun Zhou</P>
    <P>
      <small>
        This site is built with{' '}
        <A inline href="https://www.gatsbyjs.org/">
          GatsbyJS
        </A>
        . You can find the{' '}
        <A
          inline
          href="https://github.com/zhoumingjun/zhoumingjun.github.io/tree/develop">
          source code on GitHub
        </A>
        .
      </small>
    </P>
  </Footer>
);

export default SiteFooter;
