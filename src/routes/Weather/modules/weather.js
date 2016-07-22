import axios from 'axios';
import { belfastWeather } from './WeatherHelper.js';

// ------------------------------------
// Constants
// ------------------------------------
export const WEATHER_FORECAST = 'WEATHER_FORECAST';
const baseUrl = 'https://query.yahooapis.com/v1/public/yql';
const query = '?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D"london%2C%20uk")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys.json';

// ------------------------------------
// Actions
// ------------------------------------
export function forecast () {
  return function(dispatch) {
    axios.get(`${baseUrl}${query}`).then(function(result) {
      console.log(result.data);
      dispatch({
        type: WEATHER_FORECAST,
        data: result.data
      });
    })
  }
}

export const actions = {
  forecast
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [WEATHER_FORECAST]: (state, action) => action.data
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function weatherReducer (state = belfastWeather, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
