import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions, Platform } from 'react-native';

const CalculatorApp = () => {
    const [ value, setValue ] = useState('0');
    const [ isDardkMode, setIsDarkMode ] = useState(false);

    const handlePress = ( buttonValue: string ) => {
        if( buttonValue === '=' ) {
            try{
                setValue(eval(value).toString());
            } catch( error ) {
                setValue('error');
            }
        } else if( buttonValue === 'Clear' ) {
            setValue('0');
        } else {
            setValue( prev =>  prev + buttonValue );
        }
    };

    const buttons = [
        'Clear', '/', '*', 
        '7', '8', '9', '-', 
        '4', '5', '6', '+', 
        '1', '2', '3', 
        '0', '00', '.', '=' 
    ];

    return (
        <View style={[styles.container, isDardkMode && styles.darkContainer]}>
            <Pressable style={[ styles.toggleBtn, isDardkMode && styles.darkToggleBtn ]}
            onPress={() => setIsDarkMode( !isDardkMode)}
            />

            <View style={[ styles.calculator, isDardkMode && styles.darkCalculator ]}>
                <Text style={[ styles.value, isDardkMode && styles.darkValue ]}>{value || '0'}</Text>

                <View style={styles.buttonsContainer}>
                    {buttons.map( btn => (
                        <Pressable 
                            key={btn}
                            style={ ( { pressed } ) => [
                                styles.button,
                                isDardkMode && styles.darkButton,
                                pressed && styles.buttonPressed,
                                btn === 'Clear' && styles.clearButton,
                                btn === '=' && styles.equalButton,
                                btn === '+' && styles.plusButton,
                                // btn === '-' && styles.minusButton,
                                // btn === '*' && styles.multiplyButton,
                                // btn === '/' && styles.divideButton,
                            ]}
                            onPress={() => handlePress( btn )}
                            >
                            <Text style={[ styles.buttonText, isDardkMode && styles.darkButtonText ]}>{btn}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View> 
    );
};

const screenWidth = Dimensions.get('window').width;
const buttonSize = screenWidth / 4 - 30;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#edf1f4',
      },
      darkContainer: {
        backgroundColor: '#282c2f',
      },
      calculator: {
        width: screenWidth - 40,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#edf1f4',
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 15, height: 15 },
            shadowOpacity: 0.1,
            shadowRadius: 20,
          },
          android: {
            elevation: 15,
          },
        }),
      },
      darkCalculator: {
        backgroundColor: '#33393e',
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOpacity: 0.25,
          },
          android: {
            elevation: 15,
          },
        }),
      },
      value: {
        height: 100,
        textAlign: 'right',
        fontSize: 40,
        color: '#5166d6',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#edf1f4',
        ...Platform.select({
          ios: {
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
          android: {
            elevation: 5,
          },
        }),
      },
      darkValue: {
        color: '#eee',
        backgroundColor: '#33393e',
      },
      buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
      },
      button: {
        width: buttonSize,
        height: buttonSize,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#edf1f4',
        ...Platform.select({
          ios: {
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
          android: {
            elevation: 5,
          },
        }),
      },
      darkButton: {
        backgroundColor: '#33393e',
      },
      buttonPressed: {
        ...Platform.select({
          ios: {
            shadowOffset: { width: -5, height: -5 },
            shadowOpacity: 0.1,
          },
          android: {
            elevation: 2,
          },
        }),
      },
      buttonText: {
        fontSize: 24,
        color: '#666',
      },
      darkButtonText: {
        color: '#eee',
      },
      clearButton: {
        backgroundColor: '#f44336',
        width: buttonSize * 2 + 10,
      },
      plusButton: {
        backgroundColor: '#31a935',
        height: buttonSize * 0.9 + 10,
      },
      equalButton: {
        backgroundColor: '#2196f3',
        height: buttonSize * 0.9 + 10,
      },
      toggleBtn: {
        position: 'absolute',
        top: 40,
        right: 20,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#555',
        ...Platform.select({
          ios: {
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
          },
          android: {
            elevation: 5,
          },
        }),
      },
      darkToggleBtn: {
        backgroundColor: '#edf1f4',
      },
});

export default CalculatorApp;