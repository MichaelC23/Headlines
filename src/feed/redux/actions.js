/**
 * Feed actions.
 * @module src/feed/redux/actions
 */

import { UPDATE_FEED } from 'src/feed/constants';

/**
 * Update feed action.
 * @function updateFeed
 * @param {Object} body raw json feed.
 * @returns {Object} update feed action.
 */
export function updateFeed(body) {
  return {
    type: UPDATE_FEED,
    body,
  };
}
