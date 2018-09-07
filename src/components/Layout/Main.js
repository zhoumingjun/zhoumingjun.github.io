import React from 'react';
import {Grommet, Box, Anchor, Text} from 'grommet';
import styled, {injectGlobal} from 'styled-components';

const ContentBox = styled(Box)`
  width: 100vw;
  padding-top: 60px;
`;
const Content = props => <ContentBox>{props.children}</ContentBox>;
export default Content;
