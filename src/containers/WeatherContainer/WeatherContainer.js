import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

// Actions
import * as actionCreators from './WeatherDucks.js';

// Components
import WeatherView from '../../components/WeatherView/';

const mapStateToProps = state => ({
  weather: state.weatherforecast.weather
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

class WeatherContainer extends Component {

  static propTypes = {
    weather: PropTypes.object,
    forecast: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);
    props.forecast();
  }

  render () {
    const weatherViewProps = _.pick(this.props, ['weather']);
    return <WeatherView {...weatherViewProps} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
