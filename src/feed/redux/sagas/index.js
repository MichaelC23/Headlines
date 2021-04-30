/**
 * Feed sagas.
 * @module src/feed/redux/sagas
 */

import { all, put, takeLatest } from 'redux-saga/effects';

import { updateFeed, setLoading, setSearchError } from 'src/feed/redux/actions';
import { validateResponseData } from 'src/feed/utils/entryUtils';
import {
  URL_BASE,
  URL_SUB,
  SET_CATEGORY,
  FETCH_FEED,
  SET_SEARCH_VALUE,
  MESSAGE_NOT_FOUND,
  ERROR_NOT_FOUND,
} from 'src/feed/constants';

/**
 * Fetch feed saga
 * @function fetchFeed
 * @param {Object} store redux store.
 */
function* searchFeed(store) {
  yield put(setLoading(true));
  const { search } = store.getState().feed;
  const response = yield fetch(`${URL_SUB}/${search.value}.json`);
  const json = yield response.json();
  if (json.message === MESSAGE_NOT_FOUND && json.error === ERROR_NOT_FOUND) {
    yield put(setSearchError(json.error));
    yield put(setLoading(false));
  } else {
    if (validateResponseData(json)) {
      yield put(updateFeed(json.data.children));
    } else {
      yield put(setSearchError(ERROR_NOT_FOUND));
      yield put(setLoading(false));
    }
  }
}

/**
 * Fetch feed saga
 * @function fetchFeed
 * @param {Object} store redux store.
 */
function* fetchFeed(store) {
  yield put(setLoading(true));
  const { category } = store.getState().feed;
  const response = yield fetch(`${URL_BASE}/${category}.json`);
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
    takeLatest([SET_SEARCH_VALUE], searchFeed.bind(null, store)),
  ]);
}
