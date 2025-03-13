import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// 📍 Map Marker Icon
export const MapIcon = (props: any) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 2C8.13 2 5 5.13 5 9c0 4.24 5.77 10.91 6.06 11.25.29.34.85.34 1.14 0C13.23 19.91 19 13.24 19 9c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      fill="red"
    />
  </Svg>
);
