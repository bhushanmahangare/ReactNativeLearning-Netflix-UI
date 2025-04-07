import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import GetLocation from '../src/getLocaltion';

function LocationComponent(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <GetLocation />
    </SafeAreaView>
  );
}

export default LocationComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
