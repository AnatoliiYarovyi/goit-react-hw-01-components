import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../Ex1/components/default.jpg';

const FriendItem = ({ isOnline, avatar = { defaultImage }, name }) => (
  <>
    <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="avatar" width="48" />
    <p className="name">{name}</p>
  </>
);

FriendItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendItem;
