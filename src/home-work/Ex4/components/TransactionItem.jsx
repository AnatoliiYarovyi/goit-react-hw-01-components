import React from 'react';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

const TransactionItem = ({ type, amount, currency }) => (
  <>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </>
);

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionItem;
