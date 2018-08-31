import React, {Component} from 'react';
import {Box, Responsive, Text, Image} from 'grommet';
import RoutedAnchor from './RoutedAnchor';
import logo from '../assets/logo.png';
import styled, {css} from 'styled-components';

const NavAnchor = ({path, label}) => (
  <RoutedAnchor path={path}>
    <Text size="large">
      <strong>{label}</strong>
    </Text>
  </RoutedAnchor>
);

const StyledImage = styled.img`
  height: 32px;
  width: 32px;
`;

export default class extends Component {
  state = {};

  render() {
    const {responsive} = this.state;
    return (
      <Responsive
        onChange={nextResponsive =>
          this.setState({responsive: nextResponsive})
        }>
        <Box
          direction="row"
          justify="between"
          align="center"
          margin={{bottom: 'large'}}
          {...this.props}>
          <RoutedAnchor path="/">
            <Box direction="row" align="center" margin={{right: 'small'}}>
              <StyledImage src={logo} fit="cover" />
              {responsive === 'wide' ? (
                <Box margin={{horizontal: 'small'}}>
                  <Text size="large">
                    <strong>Mingjun Zhou's Blog</strong>
                  </Text>
                </Box>
              ) : null}
            </Box>
          </RoutedAnchor>
          <Box direction="row" align="center" gap="medium">
            <NavAnchor path="/categories/post/page/0" label="post" />
            <NavAnchor path="/categories/note/page/0" label="note" />
            <NavAnchor path="/series" label="series" />
            <NavAnchor path="/knowledgebase" label="kb" />
            <NavAnchor path="/about" label="about" />
          </Box>
        </Box>
      </Responsive>
    );
  }
}
