import React from 'react';
import {Box, Anchor, Text, Heading} from 'grommet';
import _ from 'lodash';

let Links = [
  {
    name: 'github',
    url: 'https://github.com/zhoumingjun',
    desc: ' ',
  },
  {
    name: 'pytorch',
    url: 'https://pytorch.org/',
    desc: ' ',
  },
];

const UsefulLinks = () => (
  <Box margin="xsmall" pad="small" border="top">
    <Heading level={3} margin={{top: 'none'}}>
      Links:
    </Heading>
    <Box direction="row" gap="small">
      {Links.map(link => (
        <div key={link.name}>
          <Anchor href={link.url}>{link.name}</Anchor>
        </div>
      ))}
    </Box>
  </Box>
);

export default UsefulLinks;
