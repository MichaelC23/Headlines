/**
 * CommonHeader styles
 * @module src/common/components/CommonHeader
 */

import { FONT } from 'src/common/styles';

export default (
  { palette: defaultPalette },
  { palette = defaultPalette } = {},
) => ({
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
    color: palette.textPrimary,
  },
  menuWrapper: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
