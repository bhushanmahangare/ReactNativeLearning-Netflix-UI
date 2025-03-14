import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './FoodFilterCard.style';
import { IFoodFilterCardProps } from './FoodFilterCard.types';

export default function FoodFilterCard({
  image,
  title,
  onPress,
}: IFoodFilterCardProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
