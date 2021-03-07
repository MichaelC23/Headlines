/**
 * FeedSelector component
 * @module src/feed/components/FeedSelector
 */
import { compose } from 'redux';
import { connect } from 'react-redux';

import { defaultCategories } from 'src/feed/constants';
import { setCategory } from 'src/feed/redux/actions';

import FeedSelector from './FeedSelector';

export default compose(
  connect(
    state => ({
      category: state.feed.category,
      defaultCategories: Object.values(defaultCategories),
    }),
    { setCategory },
    (stateProps, dispatchProps, parentProps) => ({
      ...stateProps,
      ...parentProps,
      ...dispatchProps,
      setCategory: value => dispatchProps.setCategory(value),
    }),
  ),
)(FeedSelector);
