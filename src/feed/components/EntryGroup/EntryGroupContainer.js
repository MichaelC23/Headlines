/**
 * EntryGroup component
 * @module src/feed/components/EntryGroupContainer
 */
import { compose } from 'redux';
import { connect } from 'react-redux';

import { fetchFeed } from 'src/feed/redux/actions';

import EntryGroup from './EntryGroup';

export default compose(
  connect(
    state => ({
      entries: state.feed.entries,
      loading: state.feed.loading,
    }),
    { fetchFeed },
    (stateProps, dispatchProps, parentProps) => ({
      ...stateProps,
      ...parentProps,
      ...dispatchProps,
      fetchFeed: () => dispatchProps.fetchFeed(true),
    }),
  ),
)(EntryGroup);
