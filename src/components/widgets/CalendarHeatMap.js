import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import {Box, Text} from 'grommet';
import './CalendarHeatMap.css';
import _ from 'lodash';
import styled, {css} from 'styled-components';

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

const Legend = styled.li`
  display: inline-block;
  width: 14px;
  height: 14px;
  ${props =>
    props.color &&
    css`
      background-color: ${props.color};
    `};
`;
const MyCalendarHeatmap = ({posts, actions: {onClick}}) => {
  const today = new Date();

  return (
    <Box>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={posts}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }

          return `color-github-${
            value.posts.length > 4 ? 4 : value.posts.length
          }`;
        }}
        tooltipDataAttrs={value => {
          if (value.date == null) {
            return {'data-tip': `${value.date}`};
          }

          let titles = value.posts.map(v => {
            return v.frontmatter.title;
          });
          return {
            'data-multiline': true,
            'data-tip': `${value.date} <br/> ${titles.join('<br/>')}`,
          };
        }}
        showWeekdayLabels={true}
        onClick={value => {
          onClick(value);
        }}
        showWeekdayLabels
      />
      <ReactTooltip />

      <Box direction="row" gap="xsmall" justify="end" align="center">
        <Text size="small">Less</Text>
        <Legend color="#ebedf0" />
        <Legend color="#c6e48b" />
        <Legend color="#7bc96f" />
        <Legend color="#239a3b" />
        <Legend color="#196127" />
        <Text size="small">More</Text>
      </Box>
    </Box>
  );
};
export default MyCalendarHeatmap;
