import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { IFoodCardItemProps } from './FoodCardItem.types';
import { styles } from './FoodCardItem.styles';
import Text from '../../atoms/Text/Text.component';
import StarIcon from '../../../components/icons/Star.icon';
import { COLORS } from '../../atoms/colors';

export default function FoodCardItem({
  image,
  name,
  rating,
  category,
  price,
  time,
  containerStyle,
}: IFoodCardItemProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.content]}>
        <Image style={styles.image} source={{ uri: image }} />

        <View style={styles.details}>
          <View style={styles.row}>
            <Text numberOfLines={2} weight={600} size={18} style={styles.name}>
              {name}
            </Text>
            <View style={styles.rating}>
              <Text weight={600} color={COLORS.textLight}>
                {rating}
              </Text>
              <StarIcon style={styles.ratingIcon} />
            </View>
          </View>
          <View style={styles.row}>
            <Text
              color={COLORS.textSecondary}
              size={12}
              numberOfLines={1}
              style={StyleSheet.flatten([styles.left])}>
              {category}
            </Text>
            <Text color={COLORS.textSecondary} size={12} style={styles.right}>
              {price}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.category}>{category}</Text>
            <Text color={COLORS.textPrimary} size={12} style={styles.right}>
              {time}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
