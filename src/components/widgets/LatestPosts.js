import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import {Box, Anchor, Text, Heading} from 'grommet';
import styled from 'styled-components';
import _ from 'lodash';
import Posts from '../content/Posts';
import CalendarHeatMap from './CalendarHeatMap';
import {More} from 'grommet-icons';
const today = new Date().toISOString().slice(0, 10);
const interval = 365;

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

class LatestPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: today};
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: {order: DESC, fields: [frontmatter___date]}
            ) {
              edges {
                node {
                  id
                  fields {
                    permalink
                  }
                  frontmatter {
                    title
                    date(formatString: "YYYY-MM-DD")
                    tags
                    desc
                  }
                }
              }
            }
          }
        `}
        render={data => {
          let {
            allMarkdownRemark: {edges},
          } = data;

          let postsDict = {};

          _.each(_.range(-365, 1), v => {
            let d = shiftDate(today, v)
              .toISOString()
              .slice(0, 10);
            postsDict[d] = {date: d, posts: []};
          });

          _.each(edges, ({node}) => {
            let key = node.frontmatter.date;
            if (postsDict[key]) {
              postsDict[key].posts.push(node);
            }
          });

          let posts = [];
          _.forOwn(postsDict, (v, k) => {
            posts.push(v);
          });

          return (
            <Box
              margin="xsmall"
              pad="small"
              background={{color: '#ffffff'}}
              fill>
              <Box direction="row" justify="between">
                <Heading level={3} margin={{top: 'none'}}>
                  Latest:
                </Heading>
                <Anchor href="/all" label="more" />
              </Box>
              <CalendarHeatMap
                posts={posts}
                actions={{
                  onClick: v => {
                    this.setState({date: v.date});
                  },
                }}
              />
              <Posts
                posts={edges.map(post => post.node)}
                filter={this.state.date}
              />
            </Box>
          );
        }}
      />
    );
  }
}

export default LatestPosts;
