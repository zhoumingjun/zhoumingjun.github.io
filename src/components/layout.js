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

const theme = {
  spacingPx,
  spacing: `${spacingPx}px`,
  headerHeight: '75px',
  textColor,
  accentColor,
  maxWidthPx,
  minWidthPx,
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
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(50),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}>
          <main>
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
          </main>
        </div>
      </ThemeProvider>
    )}
  />
);

export default Layout;
