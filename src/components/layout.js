import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';
import {ThemeProvider} from 'emotion-theming';
import Header from './header';
import Footer from './footer';
import {rhythm, scale} from '../utils/typography';
import {injectGlobal} from 'emotion';

const minWidthPx = 680;
const maxWidthPx = 960;
const spacingPx = 10;
const textColor = '#333';
const accentColor = '#ab4642';
const specialColor = '#ff0000';
const theme = {
  spacingPx,
  spacing: `${spacingPx}px`,
  textColor,
  accentColor,
  maxWidthPx,
  minWidthPx,
  specialColor,
};

injectGlobal`
  a {
    text-decoration: none;
    color: ${textColor};
    transition: color 250ms linear;
  }    

  a:hover {
    color: ${accentColor}
  }

  blockquote {
    background: #F9F9F9;
     margin: 0;
  }
`;

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <div
          css={`
            margin-left: auto;
            margin-right: auto;
            max-width: ${rhythm(50)};
            padding-top: ${rhythm(0.5)};
          `}>
          <Helmet>
            <title>
              {data.site.siteMetadata.title} &middot;{' '}
              {data.site.siteMetadata.description}
            </title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="HandheldFriendly" content="True" />
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
          </Helmet>
          <Header />
          {children}
          <Footer />
        </div>
      </ThemeProvider>
    )}
  />
);

export default Layout;
