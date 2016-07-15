import {LOAD_TWEETS_SUCCESS} from './TweeterActions';

export default function tweetReducer(state = [], action) {
  switch (action.type) {
    case LOAD_TWEETS_SUCCESS:
      return action.tweets;
    default:
      return state;
  }
}
