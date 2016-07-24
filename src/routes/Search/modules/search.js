export const SEARCHTERM = 'SEARCHTERM'

// ------------------------------------
// Actions
// ------------------------------------

export function createSearch(value = 1) {
  return (
          type: SEARCHTERM,
          payload:value);
}


export const actions = {
  createSearch
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCHTERM]: (state, action) => state
}
