import React from 'react';
import { View, Text, TextStyle, TextProps } from 'react-native';
import { IAvatar } from './Avatar.component.type';

export default function Avatar(props: IAvatar) {
  const nameStyle: TextStyle = Object.assign({} as TextProps, props.textStyle);

  const { size, username, ...rest } = props;
  return (
    <View {...rest}>
      <Text style={nameStyle}>{props.username.charAt(0).toUpperCase()}</Text>
    </View>
  );
}

Avatar.defaultProps = {
  size: 40,
  username: 'Zomato',
};
