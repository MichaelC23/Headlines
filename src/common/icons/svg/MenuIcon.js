/**
 * MenuIcon svg
 * @module src/common/icon/svg
 */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default ({ size = 24, fill = '#000000' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 8.46667 8.46667">
      <Path
        d="M173.365 239.597v-.846H181.832v1.693H173.365zm0-3.386v-.847H181.832v1.693H173.365zm0-3.387v-.847H181.832v1.694H173.365z"
        transform="translate(-173.365 -231.977)"
        fill={fill}
        strokeWidth={0.386449}
      />
    </Svg>
  );
};
