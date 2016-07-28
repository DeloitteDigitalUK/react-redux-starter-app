const SEARCH_GITHUB = 'SEARCH_GITHUB'

const initialState = {
    heading: "Search Github",
    inputValue: undefined,
    buttonText: "Search",
    errorMessage: undefined
};


export function createSearch(inputValue) {
  return (
            type: SEARCH_GITHUB,
            payload: inputValue
          );
}


export const actions = {
  createSearch
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCH_GITHUB]: (state, action) => state.payload
}
