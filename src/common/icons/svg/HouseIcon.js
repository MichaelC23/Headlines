/**
 * HouseOutlineIcon svg
 * @module src/common/icon/svg
 */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default ({ size = 32, fill = '#000000' }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16.933 16.933"
      fill={fill}>
      <Path d="M2.48 12.958V8.983l-1.24-.048L0 8.887l4.233-4.444L8.467 0 12.7 4.443l4.233 4.444-1.24.048-1.24.048v7.95h-4.276v-5.972h-3.42v5.972H2.48z" />
    </Svg>
  );
};
