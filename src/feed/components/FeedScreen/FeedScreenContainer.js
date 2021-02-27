/**
 * Feed screen view container
 * @module src/feed/components/FeedScreenContainer
 */
import { connect } from 'react-redux';

import FeedScreen from './FeedScreen';

export default connect(state => ({
  feed: state.feed,
}))(FeedScreen);
