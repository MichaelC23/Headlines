/**
 * Entry styles
 * @module src/feed/components/Entry
 */

import { StyleSheet } from 'react-native';
import { FONT } from 'src/common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  author: {},
  authorWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  authorTitle: {
    textAlign: 'left',
    fontSize: 18,
    fontFamily: FONT.medium,
  },
  content: {},
  contentWrapper: {
    paddingBottom: 10,
  },
  contentTitle: {
    paddingHorizontal: 10,
    textAlign: 'left',
    fontSize: 16,
    fontFamily: FONT.regular,
    paddingBottom: 10,
  },
  stretch: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
