/**
 * Feed constants.
 * @module src/feed/constants
 */

// Action types
export const UPDATE_FEED = 'UPDATE_FEED';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_LOADING = 'SET_LOADING';
export const FETCH_FEED = 'FETCH_FEED';
export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';

// Helpers
export const FIRST = 0;

// URLS
export const BASE_URL = 'https://www.reddit.com';
export const USER_URL = 'https://www.reddit.com/user';

// Default categories
export const defaultCategories = {
  New: 'new',
  HOT: 'hot',
  TOP: 'top',
};

// Message responses
export const MESSAGE_NOT_FOUND = 'Not Found';
