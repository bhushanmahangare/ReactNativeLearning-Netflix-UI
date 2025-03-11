import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import HeroPoster from '../components/organisms/HeroPoster/HeroPoster.component1.0';
import { movies } from '../lib/movies';
import HorizontalScrollPosters from '../components/templates/HorizontalScrollPosters/HorizontalScrollPosters.component';

export default function HomeScreen() {
  const categories = [
    {
      title: 'New Releases',
      posters: movies,
      width: 120,
      aspectRatio: 3 / 4,
    },
    {
      title: 'Binge-Worthy',
      posters: movies,
      width: 128,
      aspectRatio: 3 / 4,
    },
    {
      title: 'Popular on Netflix',
      posters: movies,
      width: 248,
      aspectRatio: 16 / 9,
    },
    {
      title: 'Family Favorites',
      posters: movies,
      width: 168,
      aspectRatio: 1 / 2,
    },
    {
      title: 'Award-Winning Movies',
      posters: movies,
      width: 248,
      aspectRatio: 1,
    },
  ];
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.container}>
        <View style={styles.poster}>
          <HeroPoster />
        </View>

        <View>
          {categories.map(category => (
            <HorizontalScrollPosters
              key={category.title}
              shuffle
              title={category.title}
              posters={category.posters}
              width={category.width}
              aspectRatio={category.aspectRatio}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#2e303d',
    paddingBottom: 200,
  },
  container: {},
  poster: {
    padding: 16,
  },
});
