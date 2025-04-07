import React from 'react';
import { StyleSheet, SafeAreaView, Touchable } from 'react-native';
import EditListItemExample from '../src/EditListItemExample';

function ToDoListPopup(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <EditListItemExample />
    </SafeAreaView>
  );
}

export default ToDoListPopup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
