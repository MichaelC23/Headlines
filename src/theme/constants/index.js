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
      primary: {
        background: '#FFFFFF',
        search: '#EEEEEE',
        text: {
          primary: '#000000',
          secondary: '#777777',
        },
      },
      secondary: {
        background: '#EEEEEE',
        text: {
          primary: '#000000',
          secondary: '#777777',
        },
      },
    },
  },
  dark: {
    name: defaultThemeNames.dark,
    barStyle: `${defaultThemeNames.light}-content`,
    palette: {
      primary: {
        background: '#000000',
        search: '#111111',
        text: {
          primary: '#FFFFFF',
          secondary: '#888888',
        },
      },
      secondary: {
        background: '#EEEEEE',
        text: {
          primary: '#000000',
          secondary: '#777777',
        },
      },
    },
  },
};
