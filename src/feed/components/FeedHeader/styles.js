/**
 * FeedHeader styles
 * @module src/feed/components/FeedHeader
 */

import { StyleSheet } from 'react-native';
import { FONT } from 'src/common/styles';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    textAlign: 'left',
    fontSize: 24,
    fontFamily: FONT.bold,
    paddingHorizontal: 10,
  },
  switchWrapper: {
    paddingHorizontal: 10,
  },
});
