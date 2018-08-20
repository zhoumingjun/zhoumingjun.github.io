import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';
import {
  Anchor,
  Box,
  Button,
  Chart,
  CheckBox,
  Grid,
  Heading,
  Image,
  Markdown,
  Menu,
  Meter,
  Paragraph,
  RadioButton,
  RoutedAnchor,
  RoutedButton,
  Stack,
  Text,
  TextInput,
  Video,
  hpe,
  base,
  Grommet,
  grommet,
} from 'grommet';
import {injectGlobal} from 'styled-components';

injectGlobal`
 
  body {
    margin: 0;
  }
`;
let theme1 = {
  global: {
    colors: {brand: '#FFA500', accent: ['#19e69e', '#9e19e6']},
    input: {border: {radius: '4px'}},
    font: {
      name: 'Fira Sans',
      family: "'Fira Sans', Arial, sans-serif",
      face:
        "/* cyrillic-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvm4jLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvlIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmIjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n",
    },
  },
  button: {border: {radius: '4px'}},
  checkBox: {border: {radius: '4px'}},
  layer: {border: {radius: '4px'}},
};
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
      <Grommet theme={theme1}>
        <Helmet>
          <title>
            {data.site.siteMetadata.title} &middot;{' '}
            {data.site.siteMetadata.description}
          </title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="HandheldFriendly" content="True" />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
        </Helmet>
        <Grid
          rows={['auto', 'flex']}
          columns={['full']}
          areas={[
            {name: 'header', start: [0, 0], end: [0, 0]},
            {name: 'main', start: [0, 1], end: [0, 1]},
          ]}>
          <Box
            gridArea="header"
            direction="row"
            justify="center"
            align="center"
            background="brand"
            pad="small"
            animation="fadeIn">
            <Box direction="row" justify="between" width="xlarge">
              <Text size="large">Mingjun Zhou's Dev Stacks</Text>
              <Box direction="row" gap="medium">
                <Anchor href="/" label="home" margin="large" />

                <Anchor href="/blog" label="blog" />
                <Anchor href="/about" label="about" />
              </Box>
            </Box>
          </Box>

          <Box gridArea="main" direction="row" justify="center">
            <Box direction="column" justify="between" width="xlarge">
              {children}
            </Box>
          </Box>
        </Grid>
      </Grommet>
    )}
  />
);

export default Layout;
