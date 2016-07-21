// ------------------------------------
// Constants
// ------------------------------------
export const WEATHER_FORECAST = 'WEATHER_FORECAST'

// ------------------------------------
// Actions
// ------------------------------------
export function forecast (value = 'belfast,uk') {
  return {
    type: WEATHER_FORECAST,
    payload: value
  }
}

export const actions = {
  forecast
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [WEATHER_FORECAST]: (state, action) => state
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
