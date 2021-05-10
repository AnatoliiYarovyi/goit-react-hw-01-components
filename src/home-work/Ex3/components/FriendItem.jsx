import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../Ex1/components/default.jpg';
import style from './FriendList.module.css';

const FriendItem = ({ isOnline, avatar = { defaultImage }, name }) => (
  <>
    <span
      className={style.status}
      style={{ backgroundColor: isOnline ? '#008000' : '#800000' }}
    />
    <img className={style.avatar} src={avatar} alt="avatar" width="48" />
    <p className={style.name}>{name}</p>
  </>
);

FriendItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendItem;
