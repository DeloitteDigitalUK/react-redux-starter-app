import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// Actions
import * as actionCreators from './WeatherDucks.js';

// Components
import WeatherView from '../../components/WeatherView/';

const mapStateToProps = state => ({
  weather: state.weatherforecast.weather,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const WeatherContainer = (props) => {
  const weatherViewProps = _.pick(props, ['weather']);

  return <WeatherView {...weatherViewProps} forecastWeather={props.forecast} />;
};

WeatherContainer.propTypes = {
  weather: PropTypes.object,
  forecast: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
