/**
 * FeedSelector component
 * @module src/feed/components/FeedSelector
 */
import { compose } from 'redux';
import { connect } from 'react-redux';

import { toggleTheme } from 'src/theme/redux/actions';

import FeedHeader from './FeedHeader';

export default compose(
  connect(
    state => ({
      textPrimary: { color: state.theme.palette.textPrimary },
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
)(FeedHeader);
