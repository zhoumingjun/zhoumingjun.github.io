import React from 'react';
import {Grommet, grommet, Box, Anchor, Text} from 'grommet';
import {withTheme} from 'grommet/components/hocs';
import styled, {injectGlobal} from 'styled-components';
import Section from './Section';

import logo from '../assets/logo.png';
injectGlobal`
  body {
    margin: 0;
  }
`;

const MyTheme = {
  global: {
    colors: {brand: '#61DAFB', accent: ['#921076', '#769210']},
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

const HeaderBox = styled(Box)`
  background: #333333;
  position: fixed;
  width: 100vw;
  height: 60px;
`;
const ContentDiv = styled.div`
  padding-top: 60px;
`;
const FooterBox = styled(Box)`
  background: #eeeeee;
  width: 100vw;
`;

const Header = props => {
  console.log(props);

  return (
    <HeaderBox direction="row" justify="center" pad={{vertical: 'small'}}>
      <Box direction="row" justify="between" align="center" basis="xlarge">
        <a href="/">
          <Text size="medium" color="#61DAFB">
            Mingjun Zhou's Blog
          </Text>
        </a>
        <Box direction="row" align="center" gap="medium">
          <a href="/categories/post/page/0">
            <Text size="medium" color="white">
              post
            </Text>
          </a>
          <a href="/categories/note/page/0">
            <Text size="medium" color="white">
              note
            </Text>
          </a>
          <a href="/series">
            <Text size="medium" color="white">
              series
            </Text>
          </a>
          <a href="/knowledgebase">
            <Text size="medium" color="white">
              kb
            </Text>
          </a>
          <a href="/about">
            <Text size="medium" color="white">
              about
            </Text>
          </a>
        </Box>
      </Box>
    </HeaderBox>
  );
};
const Footer = () => (
  <FooterBox direction="row" justify="center" pad={{vertical: 'small'}}>
    <Box align="center">
      <Text>
        Build with <Anchor href="https://www.gatsbyjs.org/" label="GatsbyJS" />{' '}
        <Anchor href="https://reactjs.org/" label={`React ${React.version}`} />
        {' and '}
        <Anchor href="https://v2.grommet.io" label={`Grommet`} />. Hosted on{' '}
        <Anchor
          href="https://github.com/zhoumingjun/zhoumingjun.github.io"
          label="Github"
        />
        .<br />
        The code is open source and available at{' '}
        <Anchor href="https://github.com/calpa/blog" label="Github" />.
      </Text>
      <Text>Copyright &copy; 2017 - {new Date().getFullYear()}</Text>
    </Box>
  </FooterBox>
);

const PageLayout = props => (
  <Grommet theme={MyTheme} style={{minHeight: '100vh'}}>
    <Header />
    <ContentDiv>{props.children}</ContentDiv>
    <Footer />
  </Grommet>
);
export default PageLayout;
