/**
 * FeedSubHeader styles
 * @module src/feed/components/FeedSubHeader
 */

import { FONT } from 'src/common/styles';

export default (
  { palette: defaultPalette },
  { palette = defaultPalette } = {},
) => ({
  container: {
    paddingTop: 48,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'left',
    fontSize: 24,
    fontFamily: FONT.bold,
    paddingHorizontal: 10,
    color: palette.primary.text.primary,
  },
  iconWrapper: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
