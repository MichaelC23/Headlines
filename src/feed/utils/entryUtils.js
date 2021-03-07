/**
 * Entry utils helper functions
 * @module src/feed/utils
 */

import { FIRST, USER_URL, BASE_URL } from 'src/feed/constants';

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
    entry.link = `${BASE_URL}${data.permalink}`;
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
    uri: `${USER_URL}/${author}`,
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
