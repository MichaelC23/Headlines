/**
 * AppearanceSettings styles
 * @module src/settings/components/AppearanceSettings
 */

import { StyleSheet } from 'react-native';
import { FONT } from 'src/common/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleText: {
    textAlign: 'left',
    fontSize: 18,
    fontFamily: FONT.medium,
  },
  contentWrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentText: {
    paddingHorizontal: 10,
    textAlign: 'left',
    fontSize: 16,
    fontFamily: FONT.regular,
  },
  switchWrapper: {
    paddingHorizontal: 10,
  },
});
