import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {Button, Anchor, Text} from 'grommet';

const Small = styled.small({
  textTransform: 'lowercase',
});

const StyledTag = styled(Anchor)`
  border-color: rgba(0, 0, 0, 0.4);
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  padding: 1px 5px;
  margin-right: 10px;
`;

const SeparatedTags = ({tags}) =>
  !_.isEmpty(tags) && (
    <Small>
      {tags.map((tag, index, array) => (
        <StyledTag
          key={tag}
          href={`/tags/${tag}/page/0`}
          label={
            <Text size="small" color="rgba(0, 0, 0, 0.4)">
              {tag}
            </Text>
          }
        />
      ))}
    </Small>
  );

export default SeparatedTags;
