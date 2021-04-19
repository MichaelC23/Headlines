/**
 * CommonModal styles
 * @module src/common/components/CommonModal
 */

export default (
  { palette: defaultPalette },
  { palette = defaultPalette } = {},
) => ({
  container: {
    paddingTop: 100,
    justifyContent: 'flex-end',
    margin: 0,
  },
  dividerWrapper: {
    backgroundColor: palette.secondary.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 45,
    paddingTop: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  divider: {
    height: 4,
    borderRadius: 90,
    width: 110,
    backgroundColor: palette.primary.text.secondary,
    opacity: 0.5,
  },
});
