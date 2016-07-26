// Actions
const LOAD = 'react-redux-starter-app/repositories/LOAD';
const LOAD_SUCCESS = 'react-redux-starter-app/repositories/LOAD_SUCCESS';
const LOAD_FAIL = 'react-redux-starter-app/repositories/LOAD_FAIL';

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
    isLoading: false
  }),
  [LOAD_FAIL]: (state, action) => ({
    ...state,
    isLoading: false
  })
};

export default function reducer (state = initialState, action = {}) {
  const handler = REDUCERS[action.type];
  return handler ? handler(state, action) : state;
};

// Action Creators
export function load () {
  return {
    type: LOAD
  };
}
