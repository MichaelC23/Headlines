/**
 * Theme reducer.
 * @module src/theme/redux/reducer
 */

import produce from 'immer';

import { SET_THEME, defaultThemes } from 'src/theme/constants';

const initialState = {
  theme: defaultThemes.light,
};

/**
 * Theme reducer.
 * @function produce
 * @param {Object} draftState Mutated state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export default produce((draftState, action) => {
  switch (action.type) {
    case SET_THEME:
      draftState.theme = defaultThemes[action.body.themeName];
      break;
  }
}, initialState);
