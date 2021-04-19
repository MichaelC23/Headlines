/**
 * useTheme utils.
 * @module src/theme/utils
 */
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';

/**
 * Generates a new style sheet with the provided parameters
 * @function makeStyleSheet
 * @param {Function} createStyle function tha generates style object
 * @param {Object} theme theming object
 * @param {Object} props further properties
 * @returns {Object} background color style object.
 */
const makeStyleSheet = (createStyle, theme, props) =>
  StyleSheet.create(
    createStyle instanceof Function ? createStyle(theme, props) : createStyle,
  );

/**
 * Selects state theme and constructs new object to include the
 * themes properties
 * @function useStyle
 * @param {Function} createStyle function tha generates style object
 * @param {Object} props further properties
 * @returns {Object} background color style object.
 */
export function useStyle(createStyle, props) {
  const { palette } = useSelector(state => state.theme);
  return makeStyleSheet(createStyle, { palette }, props);
}

/**
 * Verifies the theme name
 * @function useThemeName
 * @param {String} themeName the theme name
 * @returns {Bool} true if it matches.
 */
export function useThemeName(themeName) {
  return themeName === useSelector(state => state.theme.name);
}
