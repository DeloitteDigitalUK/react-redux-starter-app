import ApiUtils from '../../utils/ApiUtils.js';

// Actions
const LOAD = 'react-redux-starter-app/repositories/LOAD';
const LOAD_SUCCESS = 'react-redux-starter-app/repositories/LOAD_SUCCESS';
const LOAD_ERROR = 'react-redux-starter-app/repositories/LOAD_ERROR';

const initialState = {
  isLoading: false,
  repos: undefined
};

// Reducers
const REDUCERS = {
  [LOAD]: (state, action) => ({
    ...state,
    isLoading: true
  }),
  [LOAD_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    repos: action.data
  }),
  [LOAD_ERROR]: (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  })
};

export default function reducer (state = initialState, action = {}) {
  const handler = REDUCERS[action.type];
  return handler ? handler(state, action) : state;
};

// Action Creators
export function load () {
  return (dispatch, getState) => {
    // Already loading?
    if (getState().repositories.isLoading) {
      return Promise.resolve();
    }

    // Notify that we're loading.
    dispatch({
      type: LOAD
    });

    return ApiUtils.get('https://api.github.com/users/michael-martin/starred')
      .then(data => dispatch(loadSuccess(data)))
      .catch(err => dispatch(loadError(err)));
  }
}

function loadSuccess (data) {
  return {
    type: LOAD_SUCCESS,
    data
  }
}

function loadError (error) {
  return {
    type: LOAD_ERROR,
    error
  }
}
