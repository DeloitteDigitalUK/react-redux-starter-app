import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

// Reducers
import repositories from '../containers/RepositoriesContainer/RepositoriesDucks.js';
import weatherforecast from '../containers/WeatherContainer/WeatherDucks.js';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    repositories,
    weatherforecast,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
