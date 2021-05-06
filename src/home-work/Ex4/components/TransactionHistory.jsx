import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

const TransactionHistory = ({ item }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {item.map(({ id, type, amount, currency }) => (
        <tr key={id}>
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
