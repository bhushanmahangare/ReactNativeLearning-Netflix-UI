import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {COLORS} from '../colors';
import {ITypographyProps} from './Typograpy.types';

export default function Typography(props: ITypographyProps) {
  const defaultStyke: TextStyle = {
    fontSize: 16,
    color: COLORS.BLACK,
  };

  const additional: TextStyle = {
    ...(props.muted ? {color: COLORS.MUTED} : {}),
    ...(props.size ? {fontSize: props.size} : {}),
    ...(props.weight ? {fontWeight: props.weight} : {}),
    ...(props.color ? {color: props.color} : {}),
    ...(props.opacity ? {opacity: props.opacity} : {}),
    ...(props.center ? {textAlign: 'center'} : {}),
  };

  return (
    <Text
      style={StyleSheet.flatten([defaultStyke, props.style || {}, additional])}>
      {props.children}
    </Text>
  );
}
