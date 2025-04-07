import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

// Define types for the colors state
interface ColorState {
  color1: string;
  color2: string;
  color3: string;
}

const ButtonClrs: React.FC = () => {
  // Specify the initial state with the correct type
  const [clrs, setClrs] = useState<ColorState>({
    color1: 'red',
    color2: 'green',
    color3: 'blue',
  });

  // Function to generate random hex color
  const getRandomHexColor = (): string => {
    // Generate a random hex color code
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
  };

  // Type for the key argument in the onChangeColor function
  const onChangeColor = (key: keyof ColorState) => {
    setClrs(prev => ({...prev, [key]: getRandomHexColor()}));
  };

  return (
    <View style={styles.container}>
      {Object.keys(clrs).map(key => (
        <TouchableOpacity
          key={key}
          style={[
            styles.button,
            {backgroundColor: clrs[key as keyof ColorState]},
          ]} // Type assertion here
          onPress={() => onChangeColor(key as keyof ColorState)}>
          <Text style={styles.text}>{`${
            key.charAt(0).toUpperCase() + key.slice(1)
          }: ${clrs[key as keyof ColorState]}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonClrs;
