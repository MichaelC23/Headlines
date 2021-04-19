/**
 * FeedSearch styles
 * @module src/feed/components/FeedSearch
 */

import { FONT } from 'src/common/styles';

export default (
  { palette: defaultPalette },
  { palette = defaultPalette } = {},
) => ({
  container: {
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: palette.primary.search,
    borderRadius: 35,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    textAlign: 'left',
    fontSize: 18,
    fontFamily: FONT.medium,
    color: palette.primary.text.secondary,
  },
  inputIcon: {
    marginLeft: 10,
  },
});
