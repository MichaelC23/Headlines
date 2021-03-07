/**
 * useTheme utils.
 * @module src/theme/utils
 */
import { useSelector } from 'react-redux';

/**
 * Selects teh background colour from the state theme
 * @function useThemedBackground
 * @returns {Object} background color style object.
 */
export function useThemedBackground() {
  return {
    backgroundColor: useSelector(state => state.theme.palette.background),
  };
}

/**
 * Selects teh primary text colour from the state theme
 * @function useThemedPrimaryText
 * @returns {Object} color style object.
 */
export function useThemedPrimaryText() {
  return {
    color: useSelector(state => state.theme.palette.textPrimary),
  };
}

/**
 * Selects teh secondary text colour from the state theme
 * @function useThemedSecondaryText
 * @returns {Object} color style object.
 */
export function useThemedSecondaryText() {
  return {
    color: useSelector(state => state.theme.palette.textSecondary),
  };
}
