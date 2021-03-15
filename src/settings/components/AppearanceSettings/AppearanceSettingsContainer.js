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
      textPrimary: { color: state.theme.palette.textPrimary },
      textSecondary: { color: state.theme.palette.textSecondary },
      themeName: state.theme.name,
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
