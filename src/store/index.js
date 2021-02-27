/**
 * Store
 * @module src/store
 */
import { createStore, compose, applyMiddleware } from 'redux';

import { runSaga, sagaMiddleware } from './sagasMiddleware';
import rootSaga from './rootSaga';
import rootReducer from 'src/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...[sagaMiddleware])),
);
runSaga(rootSaga, store);

export default store;
