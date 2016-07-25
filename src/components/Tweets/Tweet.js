import React, { PropTypes } from 'react';
import cx from 'classnames';

import styles from './Tweet.scss';

const Tweets = (props) => {
  return (
      <div className={cx(styles.block)}>
        <div className={cx(styles.image)}>
          <img width="48" height="48" src={props.user.profile_background_image_url}/>
        </div>
        <div className={cx(styles.tweet)}>
          <li><span className={cx(styles.fullName)}>{props.user.name}</span> - <span className={cx(styles.screenName)}>@{props.user.screen_name}</span></li>
          <li>{props.text}</li>
        </div>
      </div>
  );
};

export default Tweets;
