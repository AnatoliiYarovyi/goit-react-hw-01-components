import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.friendList}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li className={style.item} key={id}>
        <FriendItem isOnline={isOnline} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};

export default FriendList;
