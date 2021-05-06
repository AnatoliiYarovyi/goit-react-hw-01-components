import React from 'react';
import PropTypes from 'prop-types';

const StatisticsItem = ({ label, percentage }) => (
  <>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
  </>
);

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsItem;
