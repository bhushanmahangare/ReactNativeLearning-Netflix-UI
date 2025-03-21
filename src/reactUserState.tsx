import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const incrementCounter2 = () => {
    setCount2(count2 + 1);
  };

  console.log('Re-Render: ', {count, count2});
  return (
    <View style={styles.container}>
      <Text>Val:{count}</Text>
      <Text>
        Val2:{count2}-{count}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={incrementCounter}>
        <Text>Increment: {count}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={incrementCounter2}>
        <Text>Increment2: {count}</Text>
      </TouchableOpacity>

      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
      <Text>Val:{count}</Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: '#e9e9e9',
    padding: 12,
  },
});
