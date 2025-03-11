import shuffle from 'lodash.shuffle';
import React, { useMemo } from 'react';
import { Image, ImageStyle, StyleSheet, View } from 'react-native';
import { COLORS } from '../../atoms/colors';
import Typography from '../../atoms/Typography/Typograpy.component';
import ListView from '../ListView/ListView.component';
import { styles } from './HorizontalScrollPosters.styles';
import { IHorizontalScrollPostersProps } from './HorizontalScrollPosters.types';

export default function HorizontalScrollPosters(
  props: IHorizontalScrollPostersProps,
) {
  const movieList = useMemo(
    () => (props.shuffle ? shuffle(props.posters) : props.posters),
    [props.shuffle],
  );

  return (
    <View style={styles.container}>
      <Typography color={COLORS.WHITE} weight={600} style={styles.title}>
        {props.title}
      </Typography>
      <ListView
        data={movieList}
        horizontal
        containerStyle={styles.listContainer}
        renderItem={(item, index) => {
          const _styles: ImageStyle[] = [styles.image];

          if (index == 0) {
            _styles.push(styles.firstImage);
          }

          return (
            <Image
              key={index}
              style={StyleSheet.flatten([
                ..._styles,
                {
                  width: props.width,
                  aspectRatio: props.aspectRatio,
                },
                props.cardStyle,
              ])}
              src={item.thumbnail}></Image>
          );
        }}></ListView>
    </View>
  );
}
