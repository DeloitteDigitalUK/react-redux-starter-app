import ApiUtils, { weatherbaseUrl } from '../../utils/ApiUtils.ts';
import { belfastWeather } from '../../components/WeatherView/WeatherFixture.js';

const query = '?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D"london%2C%20uk")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys.json'; // eslint-disable-line max-len

// Actions
const FORECAST_SUCCESS = 'react-redux-starter-app/weather/FORECAST_SUCCESS';
const FORECAST_ERROR = 'react-redux-starter-app/weather/FORECAST_ERROR';

const initialState = {
  weather: belfastWeather,
};


// Reducers
const REDUCERS = {
  [FORECAST_SUCCESS]: (state, action) => {
    const { channel } = action.data.query.results;
    const { title } = channel;
    const { forecast: channelForecast } = channel.item;
    const { temp, text, date } = channel.item.condition;
    const { temperature } = channel.units.temperature;

    return {
      ...state,
      weather: {
        title,
        forecast: channelForecast,
        temperature: temp,
        todaysCondition: text,
        todaysDate: date,
        unit: temperature,
      },
    };
  },
  [FORECAST_ERROR]: (state, action) => ({
    ...state,
    error: action.error,
  }),
};

export default function reducer(state = initialState, action = {}) {
  const handler = REDUCERS[action.type];
  return handler ? handler(state, action) : state;
}

function forecastSuccess(result) {
  return {
    type: FORECAST_SUCCESS,
    data: result,
  };
}

function forecastError(error) {
  return {
    type: FORECAST_ERROR,
    error,
  };
}

// Action Creators
export function forecast() {
  return (dispatch) => ApiUtils.get(`${weatherbaseUrl}${query}`)
    .then(data => dispatch(forecastSuccess(data)))
    .catch(error => dispatch(forecastError(error)));
}
