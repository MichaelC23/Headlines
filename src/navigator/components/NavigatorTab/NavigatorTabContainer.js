/**
 * NavigatorTab component
 * @module src/navigator/components/NavigatorTab
 */
import { connect } from 'react-redux';

import NavigatorTab from './NavigatorTab';

export default connect(state => ({
  palette: state.theme.palette,
  currentTheme: state.theme.name,
  routes: [
    {
      key: 'FeedNavigator',
      icon: 'HouseIcon',
    },
    {
      key: 'SettingsNavigator',
      icon: 'GearIcon',
    },
  ],
}))(NavigatorTab);
