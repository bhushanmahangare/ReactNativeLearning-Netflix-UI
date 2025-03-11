import {PropsWithChildren, ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {ITypographyProps} from '../Typography/Typograpy.types';

export interface IButtonProps extends PropsWithChildren, ITypographyProps {
  containerStyle?: ViewStyle;
  children: string;
  backgroundColor?: string;
  icon?: ReactNode;
}
