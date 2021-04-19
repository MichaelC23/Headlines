/**
 * Feed reducer.
 * @module src/feed/redux/reducer
 */

import produce from 'immer';

import {
  UPDATE_FEED,
  SET_CATEGORY,
  SET_LOADING,
  FETCH_FEED,
  SET_SEARCH_STRING,
  defaultCategories,
} from 'src/feed/constants';
import { convertFeedToEntries } from 'src/feed/utils/entryUtils';

const initialState = {
  entries: [],
  category: defaultCategories.HOT,
  loading: false,
  searchString: '',
};

/**
 * Feed reducer.
 * @function produce
 * @param {Object} draftState Mutated state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default produce((draftState, action) => {
  switch (action.type) {
    case UPDATE_FEED:
      draftState.entries = convertFeedToEntries(action.body);
      draftState.loading = false;
      break;
    case SET_CATEGORY:
      draftState.category = action.body.category;
      break;
    case SET_SEARCH_STRING:
      draftState.searchString = action.body.searchString;
      break;
    case SET_LOADING:
    case FETCH_FEED:
      draftState.loading = action.body.loading;
  }
}, initialState);
