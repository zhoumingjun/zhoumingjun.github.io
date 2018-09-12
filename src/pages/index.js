import React from 'react';
import {Box, Heading, Anchor} from 'grommet';
import Layout from '../components/Layout';
import {
  TagSection,
  LatestPosts,
  CategorySection,
  CalendarHeatMap,
  UsefulLinks,
} from '../components/widgets';
const Index = () => {
  return (
    <Layout>
      <Box direction="row" basis="xlarge" justify="center">
        <Box direction="row">
          <Box>
            <Box direction="row">
              <Box direction="row" basis="2/3">
                <LatestPosts />
              </Box>
              <Box direction="row" basis="1/3">
                <Box>
                  <TagSection />
                  <CategorySection />
                  <UsefulLinks />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;
