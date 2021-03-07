/**
 * Theme constants.
 * @module src/theme/constants
 */

// Action types
export const SET_THEME = 'SET_THEME';

// Default theme names
export const defaultThemeNames = {
  light: 'light',
  dark: 'dark',
};

// Default themes
export const defaultThemes = {
  light: {
    name: defaultThemeNames.light,
    palette: {
      background: '#FFFFFF',
      textPrimary: '#000000',
      textSecondary: '#777777',
    },
  },
  dark: {
    name: defaultThemeNames.dark,
    palette: {
      background: '#000000',
      textPrimary: '#FFFFFF',
      textSecondary: '#888888',
    },
  },
};
