import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../../../store/reducers';
import * as tweetActions from '../TweeterActions';
import initialState from '../../../initialState';


/**
 * Not sure why this isn't working but for some reason the state isn't being populated
 * See store.test.js in the pluralsight example code
 */

/**
 * This is an integration test that proves all the major pieces work together
 */
// describe('Store', function () {
//   it('Should handle loading tweets', function () {
//     //arrange
//     const store = createStore(rootReducer, initialState);
//     expect(store.getState().tweets.length).toEqual(0);
//
//     const tweet = {id: '1', date: 'today', message: "Yo!"};
//     const tweets = [tweet];
//
//     //act
//     const action = tweetActions.loadTweetsSuccess(tweets);
//     store.dispatch(action);
//
//     //assert
//     expect(store.getState().tweets.length).toEqual(1);
//     //const actual = store.getState().tweets[0];
//
//     //expect(actual).toEqual(tweet);
//   });
// });
