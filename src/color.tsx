import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ColorPicker = () => {
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

  const onInputChange = (value: string, key: string) => {
    const numericValue = parseInt(value, 10);
  if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 255) {
    setColor((prevState) => ({ ...prevState, [key]: numericValue }));
  } else if (value === '') {
      setColor((prevState) => ({ ...prevState, [key]: 0 }));
    }
  };

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
      <View style={styles.colorDisplay}>
        <Text style={styles.colorText}>
          rgb({color.red}, {color.green}, {color.blue})
        </Text>
        <View
          style={[
            styles.colorPreview,
            { backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})` },
          ]}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Red</Text>
          <TextInput
            style={[styles.input, { backgroundColor: `rgb(${color.red}, 0, 0)` }]}
            value={color.red.toString()}
            placeholder="Enter red"
            onChangeText={(text) => onInputChange(text, 'red')}
            keyboardType="numeric"
          />
          <TouchableOpacity style={[styles.button, {backgroundColor: 'lightcoral'}]} onPress={() => handleButtonClick('red', -10)}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: 'lightgreen'}]} onPress={() => handleButtonClick('red', 10)}><Text>+</Text></TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Green</Text>
          <TextInput
            style={[styles.input, { backgroundColor: `rgb(0, ${color.green}, 0)` }]}
            value={color.green.toString()}
            placeholder="Enter green"
            onChangeText={(text) => onInputChange(text, 'green')}
            keyboardType="numeric"
          />
          <TouchableOpacity style={[styles.button, {backgroundColor: 'lightcoral'}]} onPress={() => handleButtonClick('green', -10)}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: 'lightgreen'}]} onPress={() => handleButtonClick('green', 10)}><Text>+</Text></TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.label}>Blue</Text>
          <TextInput
            style={[styles.input, { backgroundColor: `rgb(0, 0, ${color.blue})` }]}
            value={color.blue.toString()}
            placeholder="Enter blue"
            onChangeText={(text) => onInputChange(text, 'blue')}
            keyboardType="numeric"
          />
          <TouchableOpacity style={[styles.button, {backgroundColor: 'lightcoral'}]} onPress={() => handleButtonClick('blue', -10)}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor: 'lightgreen'}]} onPress={() => handleButtonClick('blue', 10)}><Text>+</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ColorPicker;

const styles = StyleSheet.create({
  colorDisplay: {
    alignItems: 'center',
    marginBottom: 20,
  },
  colorText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorPreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    width: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: 100,
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: 40,
    alignItems: 'center'
  }
});