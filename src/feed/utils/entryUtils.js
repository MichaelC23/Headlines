/**
 * Entry utils helper functions
 * @module src/feed/utils
 */

import { FIRST, URL_USER, URL_BASE } from 'src/feed/constants';

/**
 * Feed to entries converter.
 * @function convertFeedToEntries
 * @param {Object} feed raw feed json.
 * @returns {array} entry array objects.
 */
export function convertFeedToEntries(feed) {
  const entries = [];
  feed.forEach(({ data }) => {
    const entry = {};
    entry.author = constructAuthor(data.author);
    if (data.preview) {
      entry.imageSource = constructImageSource(
        data.preview.images[FIRST].source.url,
      );
    }
    entry.link = `${URL_BASE}${data.permalink}`;
    entry.title = data.title;
    entries.push(entry);
  });
  return entries;
}

/**
 * Constructs author field for entry.
 * @function constructAuthor
 * @param {Object} author user id.
 * @returns {Object} returns an object with the users name and uri.
 */
function constructAuthor(author) {
  return {
    name: `u/${author}`,
    uri: `${URL_USER}/${author}`,
  };
}

/**
 * Constructs image source.
 * @function constructImageSource
 * @param {Object} imageSource the unescaped uri.
 * @returns {Object} returns an encoded image.
 */
function constructImageSource(imageSource) {
  const raw = imageSource;
  let encoded = raw.replace('amp;s', 's');
  let doubleEncoded = encoded.replace('amp;', '');
  let tripleEncoded = doubleEncoded.replace('amp;', '');
  return tripleEncoded;
}

/**
 * Validates the response object structure
 * @function validateResponseData
 * @param {Object} response response data.
 * @returns {Bool} return true if the objects are defined.
 */
export function validateResponseData(response) {
  return (
    response &&
    response.data &&
    response.data.children &&
    response.data.children.length > 0
  );
}
