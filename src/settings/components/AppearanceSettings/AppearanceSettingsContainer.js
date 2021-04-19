/**
 * AppearanceSettings container
 * @module src/settings/components/AppearanceSettings
 */
import { compose } from 'redux';
import { connect } from 'react-redux';

import { toggleTheme } from 'src/theme/redux/actions';

import AppearanceSettings from './AppearanceSettings';

export default compose(
  connect(
    state => ({
      themeName: state.theme.name,
      switchTrackColor: {
        false: state.theme.palette.secondary.text.primary,
        true: state.theme.palette.secondary.text.primary,
      },
      switchThumpColor: state.theme.palette.secondary.background,
    }),
    { toggleTheme },
    (stateProps, dispatchProps, parentProps) => ({
      ...stateProps,
      ...parentProps,
      ...dispatchProps,
      toggleTheme: () => dispatchProps.toggleTheme(),
    }),
  ),
)(AppearanceSettings);
