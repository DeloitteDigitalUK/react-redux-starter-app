import React, { PropTypes } from 'react';
import cx from 'classnames';
import config from '../../config.js';
import styles from './Tweet.scss';

const Tweets = (props) => {
  return (
    <div className={styles.block}>
      <div className={styles.image}>
        <img width={config.avatarSize} height={config.avatarSize} src={props.image}/>
      </div>
      <div className={styles.tweet}>
        <ul>
          <li>
            <span className={styles.fullName}>{props.userName}</span>
            <span className={styles.screenName}>@{props.screenName}</span>
          </li>
          <li>{props.text}</li>
        </ul>
      </div>
    </div>
  );
};

Tweets.propTypes = {
  userName: React.PropTypes.func.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Tweets;
