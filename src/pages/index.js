import React from 'react';
import {Box, Heading, Anchor} from 'grommet';
import Layout from '../components/Layout';
import TagList from '../components/widgets/TagList';
import LatestPosts from '../components/widgets/LatestPosts';
import {CategoryList} from '../components/widgets';
const Index = () => {
  return (
    <Layout>
      <Box direction="row" basis="xlarge" justify="center">
        <Box direction="column" width="xlarge">
          <Box direction="row">
            <Box direction="row" basis="2/3">
              <LatestPosts />
            </Box>
            <Box direction="row" basis="1/3">
              <Box>
                <TagList />
                <CategoryList />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;
