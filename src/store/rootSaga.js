/**
 * Root Saga
 * @module src/store
 */
import { all } from 'redux-saga/effects';

import feed from 'src/feed/redux/sagas';
import theme from 'src/theme/redux/sagas';

export default function* rootSaga(store) {
  yield all([feed(store), theme(store)]);
}
