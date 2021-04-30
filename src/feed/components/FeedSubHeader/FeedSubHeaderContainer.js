/**
 * FeedSubHeader container
 * @module src/feed/components/FeedSubHeader
 */
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setCategory } from 'src/feed/redux/actions';

import FeedSubHeader from './FeedSubHeader';
import { defaultCategories } from 'src/feed/constants';

export default compose(
  connect(
    state => ({
      iconColor: state.theme.palette.primary.text.primary,
      barStyle: state.theme.barStyle,
    }),
    { setCategory },
    (stateProps, dispatchProps, parentProps) => ({
      ...stateProps,
      ...parentProps,
      ...dispatchProps,
      setCategory: () => dispatchProps.setCategory(defaultCategories.HOT),
    }),
  ),
)(FeedSubHeader);
