import { connect } from 'react-redux'
import { forecast } from '../modules/weatherDucks'

import WeatherView from 'components/Weather/WeatherView'

const mapActionCreators = {
  forecast: () => forecast('Belfast, uk')
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

export default connect(mapStateToProps, mapActionCreators)(WeatherView)
