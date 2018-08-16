import React from 'react';
import dateformat from 'dateformat';
import styled from 'react-emotion';
import groupBy from 'lodash/groupBy';
import first from 'lodash/first';
import TagsList from './tags-list';

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
          <H3>{year}</H3>
          {grouped[year].map(post => (
            <Article key={post.fields.slug}>
              <Header>
                <H4>
                  <A href={post.fields.slug}>{post.frontmatter.title}</A>
                </H4>
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
