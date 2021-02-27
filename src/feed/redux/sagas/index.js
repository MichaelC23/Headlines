/**
 * Feed sagas.
 * @module src/feed/redux/sagas
 */

import { all } from 'redux-saga/effects';
import { parseString } from 'react-native-xml2js';

import feedParseCallback from 'src/feed/utils/feedParseCallback';

/**
 * Fetch feed saga
 * @function fetchFeed
 * @param {Object} store redux store.
 */
function* fetchFeed(store) {
  console.log('~ Feed | fetchFeed');
  const response = yield fetch('https://www.reddit.com/r/MadeMeSmile.rss');
  const text = yield response.text();
  yield parseString(text, feedParseCallback(store));
}

/**
 * Feed root saga
 * @function rootSaga
 * @param {Object} store redux store.
 */
export default function* rootSaga(store) {
  yield all([fetchFeed(store)]);
}
