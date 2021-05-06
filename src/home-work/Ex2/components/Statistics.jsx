import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <StatisticsItem label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

export default Statistics;
