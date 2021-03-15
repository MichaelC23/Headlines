/**
 * FeedScreen styles
 * @module src/feed/components/FeedScreen
 */

import { StyleSheet } from 'react-native';
import { FONT } from 'src/common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  headerWrapper: {
    paddingVertical: 10,
  },
  headerTitle: {
    textAlign: 'left',
    fontSize: 24,
    fontFamily: FONT.bold,
    paddingHorizontal: 10,
  },
});
