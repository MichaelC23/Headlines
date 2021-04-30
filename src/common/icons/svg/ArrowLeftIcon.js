/**
 * ArrowLeftIcon svg
 * @module src/common/icon/svg
 */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default ({ size = 24, fill = '#000000' }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 12.7 12.7"
      fill={fill}>
      <Path d="M5.907 9.542L2.752 6.385l3.193-3.193L9.137 0l.574.557.575.556L7.653 3.75 5.02 6.386l2.633 2.636 2.633 2.636-.538.521c-.295.287-.57.521-.612.521-.041 0-1.494-1.42-3.23-3.158z" />
    </Svg>
  );
};
