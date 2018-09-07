import React from 'react';
import {Grommet, Box, Anchor, Text} from 'grommet';
import styled, {injectGlobal} from 'styled-components';
const FooterBox = styled(Box)`
  background: #333333;
  width: 100vw;
`;

const Footer = () => (
  <FooterBox
    direction="column"
    justify="center"
    margin={{top: 'small'}}
    pad={{top: 'small'}}
    border="top">
    <Box align="center">
      <Text color="white">
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
      <Text color="white">
        Copyright &copy; 2017 - {new Date().getFullYear()}
      </Text>
    </Box>
  </FooterBox>
);

export default Footer;
