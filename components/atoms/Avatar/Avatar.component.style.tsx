import { ViewStyle } from 'react-native';
import { IAvatar } from './Avatar.component.type';

export const styles = ({
  size = 40,
  backgroundColor,
  rounded = false,
  containerStyle = {},
}: IAvatar): ViewStyle => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  aspectRatio: 1,
  width: size,
  backgroundColor,
  borderRadius: rounded ? 50 : 0,
  ...containerStyle,
});
