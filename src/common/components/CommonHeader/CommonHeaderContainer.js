/**
 * CommonHeader container
 * @module src/common/components/CommonHeader
 */
import { connect } from 'react-redux';

import CommonHeader from './CommonHeader';

export default connect(state => ({
  menuColor: state.theme.palette.textPrimary,
  barStyle: state.theme.barStyle,
}))(CommonHeader);
