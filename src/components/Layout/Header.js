import React from 'react';
import {Grommet, Box, Anchor, Text} from 'grommet';
import styled, {injectGlobal} from 'styled-components';

const HeaderBox = styled(Box)`
  background: #333333;
  position: fixed;
  width: 100vw;
  height: 60px;
  z-index: 1;
`;

const Header = () => {
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

export default Header;
