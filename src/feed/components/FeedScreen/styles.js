/**
 * FeedScreen styles
 * @module src/feed/components/FeedScreen
 */

import { StyleSheet } from 'react-native';
import { COLOR, FONT } from 'src/common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
  header: {},
  headerWrapper: {
    paddingVertical: 10,
  },
  headerTitle: {
    textAlign: 'left',
    fontSize: 24,
    fontFamily: FONT.bold,
    color: COLOR.textPrimary,
    paddingHorizontal: 10,
  },
});
