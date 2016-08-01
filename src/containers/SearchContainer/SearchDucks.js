// Actions
const SEARCH = 'react-redux-starter-app/search/SEARCH';
const LOAD_ERROR = 'react-redux-starter-app/search/LOAD_ERROR';

const initialState = {
    heading: "Search Github",
    inputValue: undefined,
    buttonText: "Search",
    errorMessage: undefined,
};

// Reducers
const REDUCERS = {
    [SEARCH]: (state, action) => ({
        ...state,
        inputValue: action.payload
    }),
    [LOAD_ERROR]: (state, action) => ({
        ...state,
        errorMessage: action.payload
    })
};

export default function reducer (state = initialState, action = {}) {
  const handler = REDUCERS[action.type];
  return handler ? handler(state, action) : state;
};

/*create search with inputValue */
export function createSearch(inputValue) {
    return {
        type: SEARCH,
        payload: inputValue
    };
}

/*failed search function */
export function loadError(errorMessage) {
    return {
        type: LOAD_ERROR,
        payload: errorMessage
    };
}
