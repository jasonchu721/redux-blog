import { createStore, compose, applyMiddleware, } from 'redux';

import rootReducer from './reducers/index';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

const store = createStore(rootReducer, { }, enhancers);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
   const nextRootReducer = require('./reducers/index').default;
   store.replaceReducer(nextRootReducer);
  });
}
export default store;