/**
 * PlusIcon svg
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
      <Path d="M4.842 12.592c-1.018-.255-2.465-1.11-3.168-1.872-.361-.391-.885-1.193-1.165-1.783C.048 7.966 0 7.72 0 6.332 0 4.885.034 4.73.6 3.586 1.324 2.125 2.254 1.215 3.75.508 4.72.048 4.969 0 6.35 0s1.63.049 2.601.508c1.495.707 2.425 1.617 3.149 3.078.567 1.146.6 1.297.6 2.754s-.033 1.608-.6 2.754c-1.087 2.195-3.017 3.483-5.388 3.595-.686.033-1.527-.011-1.87-.097zm2.151-4.326V6.982h2.572V5.698H6.993V3.13H5.707v2.568H3.135v1.284h2.572V9.55h1.286z" />
    </Svg>
  );
};
