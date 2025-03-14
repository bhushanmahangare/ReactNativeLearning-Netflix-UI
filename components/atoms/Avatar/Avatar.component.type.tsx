import { ViewStyle, TextStyle } from 'react-native';

export interface IAvatar {
  size?: TextStyle['width'];
  fontWeight?: TextStyle['fontWeight'];

  backgroundColor?: TextStyle['backgroundColor'];
  color?: TextStyle['color'];

  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  rounded?: boolean;

  username: string;
}
