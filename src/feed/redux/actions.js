/**
 * Feed actions.
 * @module src/feed/redux/actions
 */

import {
  UPDATE_FEED,
  SET_CATEGORY,
  SET_LOADING,
  FETCH_FEED,
  SET_SEARCH_STRING,
} from 'src/feed/constants';

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

/**
 * Fetches feed
 * @function fetchFeed
 * @param {Bool} value for loading.
 * @returns {Object} fetch feed action.
 */
export function fetchFeed(loading) {
  return {
    type: FETCH_FEED,
    body: {
      loading,
    },
  };
}

/**
 * Set the feed category
 * @function setCategory
 * @param {String} category the name.
 * @returns {Object} set category action.
 */
export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    body: {
      category,
    },
  };
}

/**
 * Set loading flag
 * @function setLoading
 * @param {Bool} loading for loading.
 * @returns {Object} set loading action.
 */
export function setLoading(loading) {
  return {
    type: SET_LOADING,
    body: {
      loading,
    },
  };
}

/**
 * Set the search string
 * @function setLoading
 * @param {String} value for loading.
 * @returns {Object} set loading action.
 */
export function setSearchString(searchString) {
  return {
    type: SET_SEARCH_STRING,
    body: {
      searchString,
    },
  };
}
