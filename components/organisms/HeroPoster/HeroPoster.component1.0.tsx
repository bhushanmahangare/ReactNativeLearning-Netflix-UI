import sample from 'lodash.sample';
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { mainPosterImages } from '../../../lib/movies';
import Button from '../../atoms/Button/Button.component';
import Typography from '../../atoms/Typography/Typograpy.component';
import PlayIcon from '../../icons/Play.icon';
import PlusIcon from '../../icons/Plus.icon';
import { IHeroPosterProps } from './HeroPoster.types1.0';
import { styles } from './HeroPoster.styles1.0';
import { COLORS } from '../../atoms/colors';
import HeroPosterCom from './HeroPoster.component';

import { ImageSourcePropType } from 'react-native';

const HeroPoster = ({ imageSource }: { imageSource: ImageSourcePropType }) => (
  <View style={StyleSheet.flatten([styles.container, styles.borderRadius])}>
    <View
      style={StyleSheet.flatten([
        styles.gredientContainer,
        styles.borderRadius,
      ])}>
      <LinearGradient
        colors={['transparent', 'transparent', 'white']}
        style={StyleSheet.flatten([
          styles.gredient,
          styles.borderRadius,
        ])}></LinearGradient>
    </View>
    <Image
      style={StyleSheet.flatten([styles.image, styles.borderRadius])}
      source={imageSource}
      resizeMode="cover"></Image>
    <View style={styles.footer}>
      <Typography weight={500} color={COLORS.WHITE} center>
        Watch in Hindi, Tamil,English
      </Typography>
      <View style={styles.actions}>
        <Button
          icon={<PlayIcon />}
          weight={600}
          containerStyle={styles.playButton}>
          Play
        </Button>
        <Button
          icon={<PlusIcon fill={COLORS.WHITE} />}
          weight={600}
          color={COLORS.WHITE}
          containerStyle={styles.addToListButton}>
          My List
        </Button>
      </View>
    </View>
  </View>
);

export default function HeroPosters(props: IHeroPosterProps) {
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
