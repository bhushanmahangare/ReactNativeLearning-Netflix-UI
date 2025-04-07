import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const UseEffectExample2 = () => {
  const [counter, setCounter] = useState<number>(0);
  const [counter2, setCounter2] = useState<number>(0);

  // It will run only once
  useEffect(() => {
    console.log('The component is mounted, now you can do anything');
  }, []);

  // It will run on first time & on state change
  useEffect(() => {
    console.log('There is a change hence useEffect with [counter] running');
  }, [counter]);

  // It will run always
  useEffect(() => {
    console.log('This is a useEffect with no dependency array');
  });

  console.log('Re-Rerendering:', counter);

  return (
    <>
      <Text>First</Text>
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
      <Text> Second</Text>
      <View>
        <Text>Counter2: {counter2}</Text>
        <TouchableOpacity
          style={Styles.btn}
          onPress={() => setCounter2(val => val + 1)}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.btn}
          onPress={() => setCounter2(val => val - 1)}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UseEffectExample2;

const Styles = StyleSheet.create({
  btn: {
    backgroundColor: '#325795',
    padding: 12,
  },
});
