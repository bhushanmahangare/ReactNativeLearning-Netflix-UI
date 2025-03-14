import { TextStyle } from 'react-native';
import { COLORS } from '../colors';

type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'normal'
  | 'bold';

const {
  size = 14,
  weight = '400',
  textAlign = 'left',
  textTransform,
  style = {},
  children,
  color,
  ...rest
}: {
  size?: number;
  weight?: FontWeight;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  style?: TextStyle;
  children?: React.ReactNode;
  color?: string;
  [key: string]: any;
} = {};

const textStyle: TextStyle = {
  fontSize: size,
  fontWeight: weight,
  textAlign,
  textTransform: textTransform || 'none',
  color: color || COLORS.textPrimary,
  ...style,
};
