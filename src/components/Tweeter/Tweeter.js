import React from 'react'
import classes from './Tweeter.scss'
import TweetList from './TweetList';

export const Tweeter = (props) => (
  <div>
    <h2 className={classes.tweeterContainer}>
      Tweeter:
      {' '}
      <span className={classes['tweeter--green']}>
        <TweetList tweets={props.tweets}/>
      </span>
    </h2>
  </div>


);

Tweeter.propTypes = {
  tweets: React.PropTypes.array
};

export default Tweeter
