import expect from 'expect';
import tweetReducer from '../TweeterReducer';
import * as actions from '../TweeterActions';

describe('Tweet Reducer', ()=> {

  it('should load tweets when passed LOAD_TWEET_SUCCESS', ()=> {
    const initialState = [];

    const tweet = {id: '1', date: 'today', message:"Yo!"};
    const tweets = [tweet];
    const action = actions.loadTweetsSuccess(tweets);

    //act
    const newState = tweetReducer(initialState, action);
    const persistedTweet = newState.find(a => a.id == tweet.id);


    //assert
    expect(newState.length).toEqual(1);
    expect(persistedTweet.id).toEqual('1');
    expect(persistedTweet.date).toEqual('today');
  });
});
