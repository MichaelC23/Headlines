/**
 * AppearanceSettings styles
 * @module src/settings/components/AppearanceSettings
 */

import { FONT } from 'src/common/styles';

export default (
  { palette: defaultPalette },
  { palette = defaultPalette } = {},
) => ({
  container: {
    flex: 1,
    backgroundColor: palette.secondary.background,
  },
  titleWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleText: {
    textAlign: 'left',
    fontSize: 18,
    fontFamily: FONT.medium,
    color: palette.secondary.text.primary,
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
    color: palette.secondary.text.secondary,
  },
  switchWrapper: {
    paddingHorizontal: 10,
  },
});
