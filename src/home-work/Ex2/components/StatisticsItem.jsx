import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const StatisticsItem = ({ label, percentage }) => (
  <>
    <span className={style.label}>{label}</span>
    <span className={style.percentage}>{percentage}%</span>
  </>
);

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsItem;
