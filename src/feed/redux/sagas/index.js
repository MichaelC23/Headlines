/**
 * Feed sagas.
 * @module src/feed/redux/sagas
 */

import { all, put, takeLatest } from 'redux-saga/effects';

import { updateFeed, setLoading } from 'src/feed/redux/actions';
import { BASE_URL, SET_CATEGORY, FETCH_FEED } from 'src/feed/constants';

/**
 * Fetch feed saga
 * @function fetchFeed
 * @param {Object} store redux store.
 */
function* fetchFeed(store) {
  yield put(setLoading(true));
  const { category } = store.getState().feed;
  const response = yield fetch(`${BASE_URL}/${category}.json`);
  const json = yield response.json();
  yield put(updateFeed(json.data.children));
}

/**
 * Feed root saga
 * @function rootSaga
 * @param {Object} store redux store.
 */
export default function* rootSaga(store) {
  yield all([
    fetchFeed(store),
    takeLatest([SET_CATEGORY, FETCH_FEED], fetchFeed.bind(null, store)),
  ]);
}
