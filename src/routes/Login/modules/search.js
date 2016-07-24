export const SEARCHTERM = 'SEARCHTERM'


// ------------------------------------
// Actions
// ------------------------------------
export function searchTweets (value = 'hi') {
  return {
    type: SEARCHTERM,
    payload: value
  }
}


export const actions = {
  searchTweets
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCHTERM]: (state, action) => state
}
