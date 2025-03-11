import React from 'react';
import {TouchableOpacity} from 'react-native';
import Typography from '../Typography/Typograpy.component';
import {styles} from './Button.styles';
import {IButtonProps} from './Button.types';

export default function Button(props: IButtonProps) {
  const {children, containerStyle, ...typographyProps} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        ...styles.button,
        ...(props.containerStyle || {}),
        backgroundColor:
          props.backgroundColor || props.containerStyle?.backgroundColor,
      }}>
      {props.icon}
      <Typography {...typographyProps}>{props.children}</Typography>
    </TouchableOpacity>
  );
}
