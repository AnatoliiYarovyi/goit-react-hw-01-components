import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ item }) => (
  <table className={style.transactionHistory}>
    <thead>
      <tr className={style.header}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {item.map(({ id, type, amount, currency }, index) => (
        <tr
          key={id}
          style={{ backgroundColor: index % 2 ? '#77d0eb' : 'white' }}
        >
          <TransactionItem type={type} amount={amount} currency={currency} />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
