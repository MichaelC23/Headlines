/**
 * Feed reducer.
 * @module src/feed/redux/reducer
 */

import produce from 'immer';

import { UPDATE_FEED } from 'src/feed/constants';
import { convertFeedToEntries } from 'src/feed/utils/entryUtils';

const initialState = {
  entries: [],
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
  }
}, initialState);
