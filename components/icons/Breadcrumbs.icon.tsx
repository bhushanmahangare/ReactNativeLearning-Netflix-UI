import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

// ☰ Breadcrumbs / Menu Icon
export const BreadcrumbsIcon = (props: any) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="black" />
  </Svg>
);
