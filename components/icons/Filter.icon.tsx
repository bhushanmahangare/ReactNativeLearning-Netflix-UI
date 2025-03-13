import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// 🛠️ Filter Icon
export const FilterIcon = (props: any) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M10 18h4v-2h-4v2zm-6-8v2h16v-2H4zm3-6v2h10V4H7z" fill="red" />
  </Svg>
);
