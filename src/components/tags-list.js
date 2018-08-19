import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
const Small = styled.small({
  textTransform: 'uppercase',
});

const A = styled.a(({theme}) => ({
  textDecoration: 'none',
  color: theme.textColor,
  transition: 'color 250ms linear',
  ':hover': {
    textDecoration: 'underline',
    color: theme.accentColor,
  },
}));

const CommaSeparatedTags = ({tags}) =>
  !_.isEmpty(tags) && (
    <Small>
      Topics:{' '}
      {tags.split(', ').map((tag, index, array) => (
        <span key={tag}>
          <A href={`/tags/${tag}/`}>{tag}</A>
          {index < array.length - 1 ? ', ' : ''}
        </span>
      ))}
    </Small>
  );

export default CommaSeparatedTags;
