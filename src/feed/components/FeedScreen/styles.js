/**
 * FeedScreen styles
 * @module src/feed/components/FeedScreen
 */

import { FONT } from 'src/common/styles';

export default (
  { palette: defaultPalette },
  { palette = defaultPalette } = {},
) => ({
  container: {
    flex: 1,
    backgroundColor: palette.background,
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
