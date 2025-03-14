import React from 'react';
import { ViewStyle } from 'react-native';

export interface FlexboxContainerProps {
  row?: boolean;
  column?: boolean;
  justifyContentCenter?: boolean;
  alignItemsCenter?: boolean;
  justifyContentSpaceBetween?: boolean;
  gap?: ViewStyle['gap'];
  style?: ViewStyle;
  children: React.ReactNode;
}
