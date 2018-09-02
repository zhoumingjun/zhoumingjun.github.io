import React from 'react';
import Helmet from 'react-helmet';
import {Link, graphql} from 'gatsby';
import PageLayout from '../components/Layout';
import {Box} from 'grommet';
import _ from 'lodash';
import Section from '../components/Section';

const Tags = ({
  pageContext: {outline},
  data: {
    site: {siteMetadata: site},
  },
}) => {
  outline = JSON.parse(outline);
  let series = [];
  _.forOwn(outline, ({post}) => {
    series.push(post);
  });

  console.dir(outline, {depth: null});
  return (
    <PageLayout>
      <Section pad={{horizontal: 'xsmall', vertical: 'large'}}>
        <Helmet
          htmlAttributes={{lang: 'en'}}
          meta={[{name: 'description', content: site.description}]}
          title={site.title}
        />
        {series &&
          series.map((post, idx) => {
            const title = post.frontmatter.title;
            const content = post.internal.content;

            return (
              <Box key={idx} direction="column">
                <Link to={post.fields.slug}>
                  <h3>{title}</h3>
                </Link>

                <p>{content}</p>
              </Box>
            );
          })}
      </Section>
    </PageLayout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query BlogSeriesBySlug {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
