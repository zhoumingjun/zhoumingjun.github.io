import React from 'react';
import 'prismjs/themes/prism-okaidia.css';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';
import {
  Heading,
  Text,
  Anchor,
  Grommet,
  grommet,
  Box,
  base,
  dark,
} from 'grommet';
import {injectGlobal} from 'styled-components';
import Nav from './Nav';
import Section from './Section';

injectGlobal`
  body {
    margin: 0;
  }
`;

export default class Template extends React.Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <Box style={{minHeight: '100vh', transition: 'background 2s'}}>
          <Section pad={{horizontal: 'xlarge', top: 'large'}}>
            <Nav />
          </Section>
          <Section pad={{horizontal: 'xlarge'}}>{this.props.children}</Section>
          <Section
            pad={{horizontal: 'xlarge', top: 'large', justify: 'center'}}>
            <Text>
              Build with{' '}
              <Anchor href="https://www.gatsbyjs.org/" title="GatsbyJS" /> and{' '}
              <Anchor
                href="https://reactjs.org/"
                title={`React ${React.version}`}
              />
              . Hosted on{' '}
              <Anchor href="https://www.netlify.com/" title="Netlify" />.<br />
              The code is open source and available at{' '}
              <Anchor href="https://github.com/calpa/blog" title="Github" />.
            </Text>
            <Text>Copyright &copy; {new Date().getFullYear()}</Text>
          </Section>
        </Box>
      </Grommet>
    );
  }
}
