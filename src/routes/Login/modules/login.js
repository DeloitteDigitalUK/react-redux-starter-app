

export const USERNAME = 'USERNAME'


// ------------------------------------
// Actions
// ------------------------------------
export function userLogin (value = 'john') {
  return {
    type: USERNAME,
    payload: value
  }
}


export const actions = {
  userLogin
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USERNAME]: (state, action) => state
}
