/**
 * Root reducer.
 * @module reducers
 */

import { combineReducers } from 'redux';

import feed from 'src/feed/redux/reducer';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default combineReducers({
  feed,
});
