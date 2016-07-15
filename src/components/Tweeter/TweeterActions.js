export const LOAD_TWEETS_SUCCESS = 'LOAD_TWEETS_SUCCESS';
export function requestTweetsSuccess(tweets) {
  return {
    type: LOAD_TWEETS_SUCCESS, tweets
  };
}

export function loadTweets() {
  return function (dispatch) {
    dispatch({type: LOAD_TWEETS_SUCCESS, payload: [{id: "tweet1", date: "today", message: "tweeter message1"}]});
  };
}

