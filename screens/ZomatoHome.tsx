import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import ZomatoHomeScreen from './ZomatoHomeScreen';
export default function ZomatoHome() {
  return (
    <SafeAreaView style={styles.view}>
      <ZomatoHomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f5f5f5',
  },
});
