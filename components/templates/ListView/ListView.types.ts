import { ReactElement } from 'react';
import { ViewStyle } from 'react-native';

export interface IListViewProps<TData> {
  renderItem: (item: TData, index: number, items: TData[]) => ReactElement;
  data: TData[];
  horizontal?: boolean;
  containerStyle?: ViewStyle;
}
