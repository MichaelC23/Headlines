/**
 * Theme constants.
 * @module src/theme/constants
 */

// Action types
export const SET_THEME = 'SET_THEME';
export const TOGGLE_THEME = 'TOGGLE_THEME';

// Storage entries
export const STORAGE_ENTRY_THEME_NAME = '@THEME_NAME';

// Default theme names
export const defaultThemeNames = {
  light: 'light',
  dark: 'dark',
};

// Default themes
export const defaultThemes = {
  light: {
    name: defaultThemeNames.light,
    barStyle: `${defaultThemeNames.dark}-content`,
    palette: {
      background: '#FFFFFF',
      textPrimary: '#000000',
      textSecondary: '#777777',
    },
  },
  dark: {
    name: defaultThemeNames.dark,
    barStyle: `${defaultThemeNames.light}-content`,
    palette: {
      background: '#000000',
      textPrimary: '#FFFFFF',
      textSecondary: '#888888',
    },
  },
};
