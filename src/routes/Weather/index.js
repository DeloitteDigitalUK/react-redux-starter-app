import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'weather',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Weather = require('./containers/WeatherContainer').default
      const reducer = require('./modules/weather').default

      /*  Add the reducer to the store on key 'weather'  */
      injectReducer(store, { key: 'weather', reducer })

      /*  Return getComponent   */
      cb(null, Weather)

    /* Webpack named bundle   */
    }, 'weather')
  }
})
