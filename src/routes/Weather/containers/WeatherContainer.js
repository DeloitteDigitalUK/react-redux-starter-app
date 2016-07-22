import { connect } from 'react-redux'
import { forecast } from '../modules/weather'

import Weather from 'components/Weather'

const mapActionCreators = {
  forecast: () => forecast('Belfast, uk')
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

export default connect(mapStateToProps, mapActionCreators)(Weather)
