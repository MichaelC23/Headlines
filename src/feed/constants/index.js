/**
 * Feed constants.
 * @module src/feed/constants
 */

// Action types
export const UPDATE_FEED = 'UPDATE_FEED';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_LOADING = 'SET_LOADING';
export const FETCH_FEED = 'FETCH_FEED';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR';

// Helpers
export const FIRST = 0;

// URLS
export const URL_BASE = 'https://www.reddit.com';
export const URL_USER = 'https://www.reddit.com/user';
export const URL_SUB = 'https://www.reddit.com/r';

// Default categories
export const defaultCategories = {
  New: 'new',
  HOT: 'hot',
  TOP: 'top',
};

// Message responses
export const MESSAGE_NOT_FOUND = 'Not Found';

// ERROR responses
export const ERROR_NOT_FOUND = 'Not Found';
