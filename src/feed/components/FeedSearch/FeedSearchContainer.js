/**
 * FeedSearch component
 * @module src/feed/components/FeedSearch
 */
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setSearchValue } from 'src/feed/redux/actions';

import FeedSearch from './FeedSearch';

export default compose(
  connect(
    state => ({
      iconColor: state.theme.palette.primary.text.secondary,
    }),
    { setSearchValue },
    (stateProps, dispatchProps, parentProps) => ({
      ...stateProps,
      ...parentProps,
      ...dispatchProps,
      setSearchValue: value => dispatchProps.setSearchValue(value),
    }),
  ),
)(FeedSearch);
