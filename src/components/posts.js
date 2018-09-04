import React from 'react';
import dateformat from 'dateformat';
import styled from 'styled-components';
import groupBy from 'lodash/groupBy';
import first from 'lodash/first';
import TagsList from './tags-list';
import {Heading} from 'grommet';

const groupPosts = posts =>
  groupBy(posts, p => first(p.frontmatter.date.split('-')));

const Header = styled.header(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.smallMedia]: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
  },
}));

const H3 = styled.h4(({theme}) => ({
  marginBottom: theme.spacing,
  textDecoration: 'underline double',
}));

const Article = styled.article(({theme}) => ({
  marginBottom: theme.spacing,
}));

const H4 = styled.h4({
  margin: 0,
});

const A = styled.a(({theme}) => ({
  textDecoration: 'none',
  color: theme.textColor,
  transition: 'color 250ms linear',
  ':hover': {
    color: theme.accentColor,
  },
}));

const Posts = ({posts}) => {
  const grouped = groupPosts(posts);
  const years = Object.keys(grouped)
    .sort()
    .reverse();
  return (
    <section>
      {years.map(year => (
        <section key={year}>
          <Heading level={3}>{year}</Heading>
          {grouped[year].map(post => (
            <Article key={post.fields.slug}>
              <Header>
                <Heading level={3} margin="none">
                  <A href={post.fields.slug}>{post.frontmatter.title}</A>
                </Heading>

                <time
                  dateTime={dateformat(post.frontmatter.date, 'isoDateTime')}>
                  {dateformat(post.frontmatter.date, 'yyyy-mm-dd')}
                </time>
              </Header>
              <footer>
                <TagsList tags={post.frontmatter.tags} />
              </footer>
            </Article>
          ))}
        </section>
      ))}
    </section>
  );
};

export default Posts;
