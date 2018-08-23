import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import {Button, Anchor} from 'grommet';

const Small = styled.small({
  textTransform: 'lowercase',
});

const CommaSeparatedTags = ({tags}) =>
  !_.isEmpty(tags) && (
    <Small>
      {tags.split(', ').map((tag, index, array) => (
        <Anchor key={tag} href={`/tags/${tag}/`} label={tag} color="accent-1" />
      ))}
    </Small>
  );

export default CommaSeparatedTags;
