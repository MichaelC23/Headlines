/**
 * Theme actions.
 * @module src/theme/redux/actions
 */

import { SET_THEME } from 'src/theme/constants';

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
