import ApiUtils from './utils/ApiUtils';

export function createActions(collectionName) {
  return {
    LOAD: `${collectionName}/LOAD`,
    LOAD_SUCCESS: `${collectionName}/LOAD_SUCCESS`,
    LOAD_ERROR: `${collectionName}/LOAD_ERROR`,
  };
}

export function createReducers(collectionName, dataTransform = el => el) {
  // Actions
  const { LOAD, LOAD_SUCCESS, LOAD_ERROR } = createActions(collectionName);

  const initialState = {
    isLoading: false,
    [collectionName]: undefined,
  };

  const reducers = {
    [LOAD]: (state) => ({
      ...state,
      isLoading: true,
    }),

    [LOAD_SUCCESS]: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.data.map(dataTransform),
    }),
    [LOAD_ERROR]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }),
  };

  return function reducer(state = initialState, action = {}) {
    const handler = reducers[action.type];
    return handler ? handler(state, action) : state;
  };
}

export function createActionCreator(collectionName, url) {
  const { LOAD, LOAD_SUCCESS, LOAD_ERROR } = createActions(collectionName);
  return function load() {
    return (dispatch, getState) => {
      // Already loading?
      if (getState()[collectionName].isLoading) {
        return undefined;
      }

      // Notify that we're loading.
      dispatch({
        type: LOAD,
      });

      return ApiUtils.get(url)
        .then(data => dispatch({
          type: LOAD_SUCCESS,
          data,
        }))
        .catch(error => dispatch({
          type: LOAD_ERROR,
          error,
        }));
    };
  };
}
