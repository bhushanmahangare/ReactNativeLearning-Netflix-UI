import {PropsWithChildren} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export interface ITypographyProps extends PropsWithChildren {
  children: string;
  size?: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  color?: TextStyle['color'];
  opacity?: TextStyle['opacity'];
  style?: StyleProp<TextStyle>;
  muted?: boolean;
  center?: boolean;
}
