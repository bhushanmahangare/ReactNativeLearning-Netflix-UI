import React from 'react';
import { FlatList } from 'react-native';
import { mainPosterImages } from '../../../lib/movies';
import { IVerticalHeroScrollPosterProps } from './VerticalHeroScrollPosters.types';
import { styles } from './VerticalHeroScrollPosters.styles';
import HeroPoster from '../../organisms/HeroPoster/HeroPoster.component';

export default function VerticalHeroPosters(
  props: IVerticalHeroScrollPosterProps,
) {
  return (
    <FlatList
      horizontal
      data={mainPosterImages}
      renderItem={({ item }) => <HeroPoster imageSource={{ uri: item }} />}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    />
  );
}
