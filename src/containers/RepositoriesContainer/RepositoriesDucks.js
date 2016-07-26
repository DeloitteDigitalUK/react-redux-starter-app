// Actions
const LOAD = 'react-redux-starter-app/repositories/LOAD';

const initialState = {
  isLoading: false,
  repos: undefined
};

// Reducer
export default function reducer (state = initialState, action = {}) {
  return {
    ...state
  };
};

// Action Creators
export function loadRepos () {
  return {
    type: LOAD
  };
}
