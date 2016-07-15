import tweetApi from '../../apimock/mockTweetApi';

export const LOAD_TWEETS_SUCCESS = 'LOAD_TWEETS_SUCCESS';
export function loadTweetsSuccess(tweets) {
  return {
    type: LOAD_TWEETS_SUCCESS, payload: tweets
  };
}

/**
 * LoadTweets thunk
 * @returns {Function}
 */
export function loadTweets() {
  return function (dispatch) {
    return tweetApi.getAllTweets().then(tweets => {
      console.log("tweetAction::loadTweets" + tweets);
      dispatch(loadTweetsSuccess(tweets));
    }).catch(error=> {
      throw(error);
    });
  };
}

