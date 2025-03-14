import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../atoms/colors';

// 🔍 Search Icon
export const SearchIcon = (props: any) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 10-1.44 1.44l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"
      fill={COLORS.primary}
    />
  </Svg>
);
