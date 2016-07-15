import expect from 'expect';
import * as tweetActions from '../TweeterActions';

import thunk from 'redux-thunk';
// import nock from 'nock';
import configureMockStore from 'redux-mock-store';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', ()=> {
  // afterEach(()=> {
  //   nock.cleanAll();
  // });

  it('should create BEGIN_AJAX_CALL and LOAD_TWEETS_SUCCESS when loading tweets', (done) => {
    //Here's an example call to nock
    //nock('http://example.com/')
    // .get('couses')
    // .reply(200, {body: {tweets: [{id:1, firstName:'Cory', lastName: 'House}] }});

    const expectedActions = [
      {type: tweetActions.LOAD_TWEETS_SUCCESS, body: {tweets: [{id: '1', date: 'today', message:'Red was here!'}]}}
    ];

    const store = mockStore({tweets: []}, expectedActions);
    store.dispatch(tweetActions.loadTweets()).then(()=> {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(tweetActions.LOAD_TWEETS_SUCCESS);
      done();
    })
  });
});
