/**
 * Theme sagas.
 * @module src/theme/redux/sagas
 */

import { all, put, takeLatest } from 'redux-saga/effects';
import { Appearance } from 'react-native';

import { setTheme } from 'src/theme/redux/actions';
import {
  SET_THEME,
  TOGGLE_THEME,
  STORAGE_ENTRY_THEME_NAME,
} from 'src/theme/constants';
import { set, get } from 'src/common/utils/asyncStorage';

/**
 * Updates the async storage entry
 * @function updateStorage
 */
function* updateStorage(store) {
  yield set(STORAGE_ENTRY_THEME_NAME, store.getState().theme.name);
}

/**
 * Gets the system theme and initializes theme state
 * @function initializeTheme
 */
function* initializeTheme() {
  const savedThemeName = yield get(STORAGE_ENTRY_THEME_NAME);
  if (savedThemeName) {
    yield put(setTheme(savedThemeName));
  } else {
    yield put(setTheme(Appearance.getColorScheme()));
  }
}

/**
 * Theme root saga
 * @function rootSaga
 * @param {Object} store redux store.
 */
export default function* rootSaga(store) {
  yield all([
    initializeTheme(),
    takeLatest([SET_THEME, TOGGLE_THEME], updateStorage.bind(null, store)),
  ]);
}
