import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import repositories from '../containers/RepositoriesContainer/RepositoriesDucks';
import repositoriesDetail from '../containers/RepositoriesDetailContainer/RepositoriesDetailDuck';
import search from '../containers/SearchContainer/SearchDucks';

export const makeRootReducer = asyncReducers => combineReducers({
  form: formReducer,
  // Add sync reducers here
  search,
  repositories,
  repositoriesDetail,
  router,
  ...asyncReducers,
});

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer; // eslint-disable-line no-param-reassign
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
