export const LOAD_TWEETS_SUCCESS = 'LOAD_TWEETS_SUCCESS';

export function loadTweetsSuccess(tweets) {
  return {
    type: LOAD_TWEETS_SUCCESS, tweets
  };
}

export function loadTweets() {
  return function (dispatch) {
    dispatch(loadTweetsSuccess([{id:"tweet1", message:"tweeter message"}]));
  };
}

export const actions = {
  loadTweetsSuccess
};

const initialState = [{id:"tweet1", messages:"message1"}];
export default function tweetReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TWEETS_SUCCESS:
      return action.tweets;
    default:
      return state;
  }
}

