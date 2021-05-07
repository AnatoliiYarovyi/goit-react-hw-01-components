import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import style from './Profile.module.css';

const Profile = ({ name, tag, location, avatar = { defaultImage }, stats }) => (
  <div className={style.profile}>
    <div className={style.description}>
      <img src={avatar} alt="Аватар пользователя" className={style.avatar} />
      <p className={style.name}>{name}</p>
      <p className={style.tag}>@{tag}</p>
      <p className={style.location}>{location}</p>
    </div>

    <ul className={style.stats}>
      <li className={style.item}>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{stats.followers}</span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{stats.views}</span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
