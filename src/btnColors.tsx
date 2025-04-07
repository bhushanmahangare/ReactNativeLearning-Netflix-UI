import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FormsOtpmisedDayV3 = () => {

  type Color = {
    red: number;
    green: number;
    blue: number;
  };

  const [color, setColor] = useState<Color>({
    red: 0,
    green: 0,
    blue: 0,
  });

  const handleButtonClick = (key: keyof Color, changeValue: number) => {
    setColor((prevState) => {
      let newValue = prevState[key] + changeValue;
      if(newValue > 255) newValue = 255;
      if(newValue < 0) newValue = 0;
      return {...prevState, [key]: newValue};

    })
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
      <View>Colors</View>

      <View>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'lightcoral'}]} onPress={() => handleButtonClick('red', -10)}><Text>-</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FormsOtpmisedDayV3;


const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    width: 40,
    alignItems: 'center'
  }
});