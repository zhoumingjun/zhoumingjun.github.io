import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import {Box, Heading, Text} from 'grommet';
import _ from 'lodash';

const logs = [
  {date: '2018-09-05', content: 'add tag cloud'},
  {date: '2018-08-14', content: 'build blog with gatsby/grommet'},
];

const Index = props => {
  return (
    <Layout>
      <Box direction="column" pad="xlarge" width="xlarge">
        <Text>This is my personal blog for technical things.</Text>

        <Heading level={3}>History:</Heading>

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
    </Layout>
  );
};

export default Index;
