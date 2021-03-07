/**
 * Theme sagas.
 * @module src/theme/redux/sagas
 */

import { all, put } from 'redux-saga/effects';
import { Appearance } from 'react-native';

import { setTheme } from 'src/theme/redux/actions';

/**
 * Fetch feed saga
 * @function fetchFeed
 * @param {Object} store redux store.
 */
function* initialSaga() {
  console.log(Appearance.getColorScheme())
  yield put(setTheme(Appearance.getColorScheme()));
}

/**
 * Feed root saga
 * @function rootSaga
 * @param {Object} store redux store.
 */
export default function* rootSaga(store) {
  yield all([initialSaga(store)]);
}
