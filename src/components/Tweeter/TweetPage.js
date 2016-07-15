import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TweetList from './TweetList';
import * as tweetActions from './TweeterActions'

class TweetPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    //this.loadTweets = this.loadTweets.bind(this);
  }

  componentDidMount() {
    console.log("Component did mount!!");
    this.props.actions.loadTweets();
  }


  render() {
    const {tweets} = this.props;

    return (
      <div>
        <h1>Tweets</h1>
        <TweetList tweets={tweets}/>
      </div>
    );
  }
}


TweetPage.propTypes = {
  tweets: PropTypes.array.isRequired,
  loadTweetsSuccess: React.PropTypes.any
};


/* *** Connect Code *** **/
function mapStateToProps(state, ownProps) {
  return {
    tweets: state.tweets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(tweetActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TweetPage);
