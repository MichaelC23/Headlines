/**
 * NavigatorTab styles
 * @module src/navigator/components/NavigatorTab
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 64,
    backgroundColor: '#222222',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonWrapper: {
    paddingBottom: 8,
  },
});
