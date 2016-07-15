import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'tweeter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Tweeter = require('./containers/TweeterContainer').default;
      const reducer = require('./modules/tweeter').default;

      /*  Add the reducer to the store on key 'tweeter'  */
      injectReducer(store, {key: 'tweeter', reducer});

      /*  Return getComponent   */
      cb(null, Tweeter);

      /* Webpack named bundle   */
    }, 'tweeter')
  }
})
