// Actions
const SEARCH = 'react-redux-starter-app/search/SEARCH';

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
