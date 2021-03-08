/**
 * Theme actions.
 * @module src/theme/redux/actions
 */

import { SET_THEME, TOGGLE_THEME } from 'src/theme/constants';

/**
 * Creates setTheme action.
 * @function setTheme
 * @param {Object} themeName theme name.
 * @returns {Object} set theme action.
 */
export function setTheme(themeName) {
  return {
    type: SET_THEME,
    body: { themeName },
  };
}

/**
 * Creates toggleTheme action.
 * @function toggleTheme
 * @returns {Object} toggle theme action.
 */
export function toggleTheme() {
  return {
    type: TOGGLE_THEME,
  };
}
