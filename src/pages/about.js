import React from 'react';
import Layout from '../components/Layout';
import {Box, Heading, Text} from 'grommet';
import _ from 'lodash';

const logs = [
  {date: '2018-09-07', content: 'refine homepage'},
  {date: '2018-09-05', content: 'add disqus'},
  {date: '2018-09-05', content: 'add page source link'},
  {date: '2018-09-04', content: 'add tag cloud'},
  {date: '2018-08-14', content: 'build blog with gatsby/grommet'},
];

const features = [
  'Build with gatsbyjs/grommet/styled-components',
  'TOC of series',
  'Tag cloud',
  'MathJax enabled',
];

const todos = ['beautify toc'];
const Index = props => {
  return (
    <Layout>
      <Box direction="column" pad="xlarge" width="xlarge">
        <Text>This is my personal blog for technical things.</Text>

        <Heading level={3}>Features:</Heading>
        <Box margin={{left: 'medium'}}>
          {features.map((feature, key) => (
            <Text key={key}>{feature}</Text>
          ))}
        </Box>

        <Heading level={3}>Todos:</Heading>
        <Box margin={{left: 'medium'}}>
          {todos.map((todo, key) => (
            <Text key={key}>{todo}</Text>
          ))}
        </Box>

        <Heading level={3}>History:</Heading>
        <Box margin={{left: 'medium'}}>
          {logs.map((log, key) => {
            return (
              <Box
                key={key}
                direction="row"
                justify="start"
                align="start"
                gap="medium">
                <Heading level={4} margin="none">
                  {log.date} :
                </Heading>
                <Text>{log.content}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;
