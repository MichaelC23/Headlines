/**
 * FeedSubScreen styles
 * @module src/feed/components/FeedSubScreen
 */

import { FONT } from 'src/common/styles';

export default (
  { palette: defaultPalette },
  { palette = defaultPalette } = {},
) => ({
  container: {
    flex: 1,
    backgroundColor: palette.primary.background,
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