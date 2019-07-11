import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'theatredeatailform',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Theatredeatailform = require('./containers/TheatreContainer').default
      const reducer = require('./modules/theatre').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'theatredeatailform', reducer })

      /*  Return getComponent   */
      cb(null, Theatredeatailform)

    /* Webpack named bundle   */
  }, 'theatredeatailform')
  }
});
