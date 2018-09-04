import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import {Box, Heading, Text} from 'grommet';

const Index = props => {
  return (
    <Layout>
      <Box direction="row" basis="xlarge" justify="center">
        <Box direction="column" pad="xlarge" width="xlarge" align="center">
          <Text>This is my personal blog for technical things.</Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;
