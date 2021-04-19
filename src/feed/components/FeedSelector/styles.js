/**
 * FeedSelector styles
 * @module src/feed/components/FeedSelector
 */

import { FONT } from 'src/common/styles';

export default (
  { palette: defaultPalette },
  { palette = defaultPalette } = {},
) => ({
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
    color: palette.textSecondary,
  },
  tabSelected: {
    fontFamily: FONT.bold,
    color: palette.textPrimary,
  },
});
