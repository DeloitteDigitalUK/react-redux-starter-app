export const SEARCHTERM = 'SEARCHTERM'

// ------------------------------------
// Actions
// ------------------------------------

export function createSearch() {
  return (
            type: '',
            payload: ''
          );
}


export const actions = {
  createSearch
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCHTERM]: (state, action) => state.payload
}
