/**
 * Feed sagas.
 * @module src/feed/redux/sagas
 */

import { all, put, takeLatest } from 'redux-saga/effects';

import { updateFeed, setLoading } from 'src/feed/redux/actions';
import {
  BASE_URL,
  SET_CATEGORY,
  FETCH_FEED,
  SET_SEARCH_STRING,
  MESSAGE_NOT_FOUND,
} from 'src/feed/constants';

/**
 * Fetch feed saga
 * @function fetchFeed
 * @param {Object} store redux store.
 */
function* searchFeed(store) {
  yield put(setLoading(true));
  //yield put(setLoading(true));
  // const { category } = store.getState().feed;
  // const response = yield fetch(`${BASE_URL}/${category}.json`);
  // const json = yield response.json();
  // yield put(updateFeed(json.data.children));
  const { searchString } = store.getState().feed;
  const response = yield fetch(`${BASE_URL}/r/${searchString}.json`);
  const json = yield response.json();
  if (json.message === MESSAGE_NOT_FOUND) {
    // yield put(updateFeed(json.data.children));
  } else {
    //yield put(setLoading(true));
    //yield put(updateFeed(json.data?.children));
  }
  // console.log(`Searching for ${JSON.stringify(json)}`);
  // console.log(`${BASE_URL}/${searchString}.json`);
}

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
    takeLatest([SET_SEARCH_STRING], searchFeed.bind(null, store)),
  ]);
}
