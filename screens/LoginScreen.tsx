import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Logo from '../components/icons/Logo.icon';
import {COLORS} from '../lib/colors';
import LoginForm from '../components/forms/LoginForm/LoginForm.component';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Logo style={styles.iconContainer}> </Logo>
        <LoginForm />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
  },
  container: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  iconContainer: {
    height: 30,
    width: 100,
  },
});
