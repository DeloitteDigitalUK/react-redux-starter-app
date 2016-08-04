import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import repositories from '../containers/RepositoriesContainer/RepositoriesDucks.js';
import weatherforecast from '../containers/WeatherContainer/WeatherDucks.js';
import search from '../containers/SearchContainer/SearchDucks.js';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    form: formReducer,
    // Add sync reducers here
    search,
    repositories,
    weatherforecast,
    router,
    ...asyncReducers,
  });
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
