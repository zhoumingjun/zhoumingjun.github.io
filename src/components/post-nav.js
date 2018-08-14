import React from 'react';
import styled from 'react-emotion';

const Wrap = styled.div(({prev}) => ({
  textAlign: prev ? 'left' : 'right',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  textTransform: 'uppercase',
}));

const Span = styled.span(({theme}) => ({
  color: theme.textColor,
  opacity: 0.35,
  fontWeight: 'bold',
}));

const A = styled.a(({theme}) => ({
  color: theme.textColor,
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'color 250ms linear',
  ':hover': {
    color: theme.accentColor,
  },
}));

const PostNav = ({prev, post}) => {
  const link = post ? (
    <A href={post.fields.slug}>{prev ? 'Previous Post' : 'Next Post'}</A>
  ) : (
    <Span>{prev ? 'Previous Post' : 'Next Post'}</Span>
  );
  return (
    <Wrap prev={prev}>
      {link}
      <small>{post ? post.frontmatter.title : null}</small>
    </Wrap>
  );
};

PostNav.defaultProps = {
  prev: false,
};

export default PostNav;
