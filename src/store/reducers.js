import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import tweets from '../components/Tweeter/TweeterReducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    tweets,
    ...asyncReducers
  })
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer
