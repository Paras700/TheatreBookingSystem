import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'booking',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Booking = require('./containers/BookingContainer').default
      const reducer = require('./modules/booking').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'booking', reducer })

      /*  Return getComponent   */
      cb(null, Booking)

    /* Webpack named bundle   */
  }, 'booking')
  }
});
