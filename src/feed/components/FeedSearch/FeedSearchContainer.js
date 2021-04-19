/**
 * FeedSearch component
 * @module src/feed/components/FeedSearch
 */
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setSearchString } from 'src/feed/redux/actions';

import FeedSearch from './FeedSearch';

export default compose(
  connect(
    state => ({
      iconColor: state.theme.palette.primary.text.secondary,
    }),
    { setSearchString },
    (stateProps, dispatchProps, parentProps) => ({
      ...stateProps,
      ...parentProps,
      ...dispatchProps,
      setSearchString: value => dispatchProps.setSearchString(value),
    }),
  ),
)(FeedSearch);
