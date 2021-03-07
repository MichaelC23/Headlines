/**
 * Theme sagas.
 * @module src/theme/redux/sagas
 */

import { all, put } from 'redux-saga/effects';
import { Appearance } from 'react-native';

import { setTheme } from 'src/theme/redux/actions';

/**
 * Gets the system theme and initializes theme state
 * @function initializeTheme
 */
function* initializeTheme() {
  yield put(setTheme(Appearance.getColorScheme()));
}

/**
 * Theme root saga
 * @function rootSaga
 * @param {Object} store redux store.
 */
export default function* rootSaga(store) {
  yield all([initializeTheme()]);
}
