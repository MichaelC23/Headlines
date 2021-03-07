/**
 * FeedSelector styles
 * @module src/feed/components/FeedSelector
 */

import { StyleSheet } from 'react-native';
import { FONT } from 'src/common/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  tabWrapper: {
    flex: 2,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  tabText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FONT.medium,
  },
  tabSelected: {
    fontFamily: FONT.bold,
  },
});
