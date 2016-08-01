import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

// Reducers
import repositories from '../containers/RepositoriesContainer/RepositoriesDucks.js';
import repositoriesDetail from '../containers/RepositoriesDetailContainer/RepositoriesDetailDuck.js';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    repositories,
    repositoriesDetail,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
