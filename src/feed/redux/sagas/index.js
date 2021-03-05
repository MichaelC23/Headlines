/**
 * Feed sagas.
 * @module src/feed/redux/sagas
 */

import { all, put } from 'redux-saga/effects';

import { updateFeed } from 'src/feed/redux/actions';
import { BASE_URL } from 'src/feed/constants';

/**
 * Fetch feed saga
 * @function fetchFeed
 * @param {Object} store redux store.
 */
function* fetchFeed(store) {
  console.log('~ Feed | fetchFeed');
  const response = yield fetch(`${BASE_URL}/hot.json`);
  const json = yield response.json();
  yield put(updateFeed(json.data.children));
}

/**
 * Feed root saga
 * @function rootSaga
 * @param {Object} store redux store.
 */
export default function* rootSaga(store) {
  yield all([fetchFeed(store)]);
}
