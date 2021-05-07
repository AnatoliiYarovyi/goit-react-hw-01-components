import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import style from './Statistics.module.css';

const randomColorRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b}, 85)`;
};

const Statistics = ({ title, stats }) => (
  <section className={style.statistics}>
    <h2 className={style.title}>{title}</h2>
    <ul className={style.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={style.item}
          key={id}
          style={{
            backgroundColor: randomColorRGB(),
          }}
        >
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
