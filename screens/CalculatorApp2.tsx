import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';

const CalculatorApp2 = () => {
  const [value, setValue] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleButtonClick = (buttonValue:any) => {
    if (buttonValue === '=') {
      try {
        setValue(String(eval(value)));
      } catch (error) {
        setValue('Error');
      }
    } else if (buttonValue === 'Clear') {
      setValue('');
    } else {
      setValue(value + buttonValue);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const buttons = [
    'Clear', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '0', '00', '.', '=',
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#282c2f' : '#edf1f4',
      justifyContent: 'center',
      alignItems: 'center',
    },
    calculator: {
      width: 340,
      padding: 20,
      borderRadius: 20,
      backgroundColor: isDarkMode ? '#33393e' : '#edf1f4',
      ...Platform.select({
        ios: {
          shadowColor: isDarkMode ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.1)',
          shadowOffset: { width: 15, height: 15 },
          shadowOpacity: 1,
          shadowRadius: 20,
        },
        android: {
          elevation: 10,
        },
      }),
      shadowColor: isDarkMode ? 'rgba(0, 0, 0, 0.25)' : '#fffb',
      shadowOffset: { width: -15, height: -15 },
      shadowOpacity: 1,
      shadowRadius: 20,
    },
    value: {
      //gridColumn: 'span 4',
      textAlign: 'right',
      color: isDarkMode ? '#eee' : '#5166d6',
      height: 100,
      lineHeight: 100,
      paddingHorizontal: 20,
      fontSize: 24,
      fontWeight: '500',
      backgroundColor: isDarkMode ? '#33393e' : '#edf1f4',
      borderRadius: 10,
      marginBottom: 12,
      ...Platform.select({
        ios: {
          shadowColor: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 1,
          shadowRadius: 10,
        },
        android: {
          elevation: 5,
        },
      }),
      shadowColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#fff',
      shadowOffset: { width: -5, height: -5 },
      shadowOpacity: 1,
      shadowRadius: 20,
    },
    buttonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    button: {
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      borderRadius: 10,
      backgroundColor: isDarkMode ? '#333' : '#edf1f4',
      ...Platform.select({
        ios: {
          shadowColor: isDarkMode ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.1)',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 1,
          shadowRadius: 10,
        },
        android: {
          elevation: 5,
        },
      }),
      shadowColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#fff',
      shadowOffset: { width: -5, height: -5 },
      shadowOpacity: 1,
      shadowRadius: 10,
      borderWidth: 2,
      borderColor: isDarkMode ? '#333' : '#edf1f4',
    },
    buttonText: {
      fontSize: 20,
      color: isDarkMode ? '#eee' : '#666',
    },
    clearButton: {
      width: 150,
      backgroundColor: '#f44336',
    },
    clearText: {
      color: '#fff',
    },
    plusButton: {
      height: 150,
      backgroundColor: '#31a935',
    },
    equalButton: {
      height: 150,
      backgroundColor: '#2196f3',
    },
    toggleButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: isDarkMode ? '#edf1f4' : '#555',
      ...Platform.select({
        ios: {
          shadowColor: isDarkMode ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.1)',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 1,
          shadowRadius: 10,
        },
        android: {
          elevation: 5,
        },
      }),
      shadowColor: isDarkMode ? 'rgba(255, 255, 255, 0.25)' : '#fff',
      shadowOffset: { width: -5, height: -5 },
      shadowOpacity: 1,
      shadowRadius: 10,
      borderWidth: 2,
      borderColor: isDarkMode ? '#333' : '#edf1f4',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleDarkMode} />
      <View style={styles.calculator}>
        <Text style={styles.value}>{value}</Text>
        <View style={styles.buttonsContainer}>
          {buttons.map((button) => (
            <TouchableOpacity
              key={button}
              style={[
                styles.button,
                button === 'Clear' && styles.clearButton,
                button === '+' && styles.plusButton,
                button === '=' && styles.equalButton,
              ]}
              onPress={() => handleButtonClick(button)}
            >
              <Text style={[styles.buttonText, button === 'Clear' && styles.clearText]}>
                {button}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalculatorApp2;