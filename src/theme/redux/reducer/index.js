/**
 * Theme reducer.
 * @module src/theme/redux/reducer
 */

import produce from 'immer';

import {
  SET_THEME,
  TOGGLE_THEME,
  defaultThemes,
  defaultThemeNames,
} from 'src/theme/constants';

const initialState = {
  ...defaultThemes.light,
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
      draftState = defaultThemes[action.body.themeName];
      return draftState;
    case TOGGLE_THEME:
      draftState =
        draftState.name === defaultThemeNames.light
          ? defaultThemes.dark
          : defaultThemes.light;
      return draftState;
  }
}, initialState);
