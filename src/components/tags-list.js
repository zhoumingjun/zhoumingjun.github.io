import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {Button, Anchor, Text} from 'grommet';

const Small = styled.small({
  textTransform: 'lowercase',
});

const Tag = styled(Anchor)`
  border-color: green;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  padding-left: 2px;
  padding-right: 2px;
  margin-right: 10px;
`;

const CommaSeparatedTags = ({tags}) =>
  !_.isEmpty(tags) && (
    <Small>
      {tags.map((tag, index, array) => (
        // <Tag key={tag} href={`/tags/${tag}/`}>
        //   <Text>{tag}</Text>
        // </Tag>

        <Tag key={tag} href={`/tags/${tag}/page/0`}>
          <Text size="small">{tag}</Text>
        </Tag>
      ))}
    </Small>
  );

export default CommaSeparatedTags;
