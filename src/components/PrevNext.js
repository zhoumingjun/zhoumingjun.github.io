import React from 'react';
import Section from './Section';
import {Link, graphql} from 'gatsby';

const PrevNext = ({prev, next}) => (
  <Section pad={{horizontal: 'xlarge', top: 'small'}}>
    <hr />

    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
      }}>
      <li>
        {prev && (
          <Link to={prev.fields.slug} rel="prev">
            <span>←</span> {prev.frontmatter.title}
          </Link>
        )}
      </li>

      <li>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
  </Section>
);

export default PrevNext;
