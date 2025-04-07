import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const UseEffectExample1 = () => {
  const [counter, setCounter] = useState<number>(0);

  // It will run only once
  useEffect(() => {
    console.log('The component is mounted, now you can do anything');
  }, []);

  console.log('Re-Rerendering:', counter);

  return (
    <View>
      <Text>Counter: {counter}</Text>
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => setCounter(val => val + 1)}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.btn}
        onPress={() => setCounter(val => val - 1)}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseEffectExample1;

const Styles = StyleSheet.create({
  btn: {
    backgroundColor: '#325795',
    padding: 12,
  },
});
