import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import {Box, Heading, Text} from 'grommet';

const Index = props => {
  return (
    <Layout>
      <Box direction="column" pad="xlarge" width="xlarge">
        <Text>This is my personal blog for technical things.</Text>

        <Heading level={3} margin="none">
          History:
        </Heading>

        <Box direction="row" justify="start" align="start" gap="medium">
          <Heading level={4} margin="none">
            2018-09-05
          </Heading>
          <Text>add tag cloud</Text>
        </Box>
        <Box direction="row" justify="start" align="start" gap="medium">
          <Heading level={4} margin="none">
            2018-08-14
          </Heading>
          <Text>build blog with gatsby/grommet</Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;
