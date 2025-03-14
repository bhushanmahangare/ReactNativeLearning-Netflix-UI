import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { FlexboxContainerProps } from './Flexbox.component.type';

export const Flexbox: React.FC<FlexboxContainerProps> = ({
  row = false,
  column = false,
  justifyContentCenter = false,
  alignItemsCenter = false,
  justifyContentSpaceBetween = false,
  style,
  children,
  ...props
}) => {
  const flexDirection = row ? 'row' : column ? 'column' : 'column';
  const justifyContent = justifyContentCenter
    ? 'center'
    : justifyContentSpaceBetween
    ? 'space-between'
    : 'flex-start';
  const alignItems = alignItemsCenter ? 'center' : 'stretch';

  const containerStyle: ViewStyle = {
    flexDirection,
    justifyContent,
    alignItems,
    gap: props.gap,
    ...style,
  };

  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
