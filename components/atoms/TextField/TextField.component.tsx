import React from 'react';
import {TextInput} from 'react-native';
import {COLORS} from '../colors';
import {styles} from './TextField.styles';
import {ITextFieldProps} from './TextField.Types';

export default function TextField(props: ITextFieldProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={COLORS.INPUT_PLACEHOLDER}
      {...props}></TextInput>
  );
}
