import React from 'react';
import { View, StyleSheet } from 'react-native';
import ZomatoHeader from '../components/organisms/Header/Zomato.Header.component';
import SearchInput from '../components/organisms/SearchInput/SearchInput.component';
import FoodCard from '../components/organisms/FoodCard/FoodCard.component';

export default function ZomatoHomeScreen() {
  return (
    <View style={styles.bodyView}>
      <ZomatoHeader />
      <SearchInput />
      <FoodCard />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyView: {
    width: '100%',
  },
});
