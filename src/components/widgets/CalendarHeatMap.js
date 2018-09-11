import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import './CalendarHeatMap.css';
import _ from 'lodash';
import {StaticQuery} from 'gatsby';
const today = new Date();

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

const CalendarHeatMap = ({edges}) => {
  let postsDict = {};
  _.each(edges, ({node}) => {
    let key = node.frontmatter.date;
    if (!postsDict[key]) {
      postsDict[key] = {date: key, posts: []};
    }

    postsDict[key].posts.push(node);
  });

  let posts = [];
  _.forOwn(postsDict, (v, k) => {
    posts.push(v);
  });

  return (
    <div>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={posts}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-github-${value.posts.length}`;
        }}
        tooltipDataAttrs={value => {
          if (value.date == null) {
            return {'data-tip': ``};
          }

          let titles = value.posts.map(v => {
            return v.frontmatter.title;
          });
          console.log(titles);
          return {
            'data-multiline': true,
            'data-tip': `${value.date} <br/> ${titles.join('<br/>')}`,
          };
        }}
        showWeekdayLabels={true}
      />
      <ReactTooltip />
    </div>
  );
};

export default CalendarHeatMap;
