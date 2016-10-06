import ApiUtils from '../../utils/ApiUtils.ts';

// Actions
const LOAD = 'react-redux-starter-app/repositories/LOAD';
const LOAD_SUCCESS = 'react-redux-starter-app/repositories/LOAD_SUCCESS';
const LOAD_ERROR = 'react-redux-starter-app/repositories/LOAD_ERROR';

const initialState = {
  isLoading: false,
  repos: undefined,
};

// Reducers
const REDUCERS = {
  [LOAD]: (state) => Object.assign(
    {},
    state,
    { isLoading: true },
  ),
  [LOAD_SUCCESS]: (state, action) => Object.assign(
    {},
    state,
    {
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
    }
  ),
  [LOAD_ERROR]: (state, action) => Object.assign(
    {},
    state,
    {
      isLoading: false,
      error: action.error,
    }
  ),
};

export default function reducer(state = initialState, action: {type: string}) {
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

    return ApiUtils.request('https://api.github.com/users/michael-martin/starred', 'GET')
      .then(data => dispatch(loadSuccess(data)))
      .catch(err => dispatch(loadError(err)));
  };
}
