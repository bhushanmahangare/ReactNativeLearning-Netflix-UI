import React from 'react';
import { FlatList } from 'react-native';
import { IListViewProps } from './ListView.types';

export default function ListView<TData>(props: IListViewProps<TData>) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={props.data}
      horizontal={props.horizontal}
      contentContainerStyle={props.containerStyle}
      renderItem={item =>
        props.renderItem(item.item, item.index, props.data)
      }></FlatList>
  );
}
