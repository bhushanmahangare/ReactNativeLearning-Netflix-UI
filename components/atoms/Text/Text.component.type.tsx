import { TextProps, TextStyle } from 'react-native';

export interface ITextProps extends TextProps {
  size?: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  textTransform?: TextStyle['textTransform'];
  textAlign?: TextStyle['textAlign'];
  color?: TextStyle['color'];
  style?: TextStyle;
  children: React.ReactNode;
}
