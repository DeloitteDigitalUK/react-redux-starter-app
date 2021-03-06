import _ from 'lodash';
import ApiUtils from '../../utils/ApiUtils';

// Actions
const LOAD = 'react-redux-starter-app/repositories/LOAD';
const LOAD_SUCCESS = 'react-redux-starter-app/repositories/LOAD_SUCCESS';
const LOAD_ERROR = 'react-redux-starter-app/repositories/LOAD_ERROR';
const SEARCH = 'react-redux-starter-app/search/SEARCH';

const initialState = {
  isLoading: false,
  repos: undefined,
};

// Reducers
const REDUCERS = {
  [LOAD]: state => ({
    ...state,
    isLoading: true,
  }),
  [LOAD_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    repos: action.data.map(repo => ({
      author: repo.owner.login,
      avatar: repo.owner.avatar_url,
      description: repo.description,
      id: repo.id,
      name: repo.name,
      starsCount: repo.stargazers_count,
      url: repo.html_url,
    })),
  }),
  [LOAD_ERROR]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }),
  // When SEARCH action is triggered --filter the repos by the name
  // that starts with the inputValue payload.
  [SEARCH]: (state, action) => ({
    ...state,
    repos: state.repos.filter((repo) => _.startsWith(repo.name, action.payload)),
  }),
};

export default function reducer(state = initialState, action = {}) {
  const handler = REDUCERS[action.type];
  return handler ? handler(state, action) : state;
}

function loadSuccess(data) {
  return {
    type: LOAD_SUCCESS,
    data,
  };
}

function loadError(error) {
  return {
    type: LOAD_ERROR,
    error,
  };
}

// Action Creators
export function load() {
  return (dispatch, getState) => {
    // Already loading?
    if (getState().repositories.isLoading) {
      return undefined;
    }

    // Notify that we're loading.
    dispatch({
      type: LOAD,
    });

    return ApiUtils.get('https://api.github.com/users/michael-martin/starred')
      .then(data => dispatch(loadSuccess(data)))
      .catch(err => dispatch(loadError(err)));
  };
}
