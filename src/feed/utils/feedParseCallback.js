/**
 * feedParseCallback helper function.
 * @module src/feed/utils
 */

import { updateFeed } from 'src/feed/redux/actions';

/**
 * Callback function for the xmlParser.
 * @function feedParseCallback
 * @param {Object} store redux store.
 * @param {string} error message.
 * @param {Object} result the parsed result.
 */
export default store => (error, result) => {
  if (error) {
    console.log('~ Feed | utils | feedParseCallback | error ', error);
  }
  store.dispatch(updateFeed(result.feed.entry));
};
