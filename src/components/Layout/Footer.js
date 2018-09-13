import React from 'react';
import {Grommet, Box, Anchor, Text} from 'grommet';
import styled, {injectGlobal} from 'styled-components';
import {Github, Code} from 'grommet-icons';

const FooterBox = styled(Box)`
  background: #eef1f5;
  width: 100vw;
`;

const Footer = () => (
  <FooterBox
    direction="column"
    align="center"
    margin={{top: 'small'}}
    pad={{top: 'small'}}
    border={{side: 'top', color: '#EEF1F5'}}>
    <Box direction="row" justify="between" width="xlarge" pad="small">
      <Text size="small" color="rgb(130, 130, 130)">
        Mingjun Zhou blog
      </Text>
      <Anchor
        href="https://github.com/zhoumingjun"
        label={<Text size="small">zhoumingjun</Text>}
        icon={<Github />}
        primary
      />
      <Box direction="row">
        <Code />
      </Box>
    </Box>
  </FooterBox>
);

export default Footer;
