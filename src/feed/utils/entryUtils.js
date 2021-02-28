/**
 * Entry utils helper functions
 * @module src/feed/utils
 */

import { FIRST } from 'src/feed/constants';

/**
 * Feed to entries converter.
 * @function convertFeedToEntries
 * @param {Object} feed raw feed json.
 * @returns {array} entry array objects.
 */
export function convertFeedToEntries(feed) {
  const entries = [];
  feed.forEach(element => {
    const entry = {};
    entry.author = {
      name: element.author[FIRST].name[FIRST],
      uri: element.author[FIRST].uri[FIRST],
    };
    if (element['media:thumbnail']) {
      entry.thumbnail = element['media:thumbnail'][FIRST].$.url;
    }
    entry.link = element.link[FIRST].$.href;
    entry.date = element.updated[FIRST];
    entry.title = element.title[FIRST];
    entries.push(entry);
  });
  return entries;
}
