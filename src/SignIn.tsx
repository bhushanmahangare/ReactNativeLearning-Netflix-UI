import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView>
      <View>
        <TextInput
          value={phone}
          onChange={e => setPhone(e.nativeEvent.text)}
          placeholder="Enter phone"
          keyboardType="numeric"
        />
      </View>
      <View>
        <TextInput
          value={email}
          onChange={e => setEmail(e.nativeEvent.text)}
          placeholder="Enter email"
          keyboardType="email-address"
        />
      </View>
      <View>
        <TextInput
          value={password}
          onChange={e => setPassword(e.nativeEvent.text)}
          placeholder="Enter password"
          secureTextEntry={true}
        />
      </View>

      <Text>Email: {email}</Text>
      <Text>Pass: {password}</Text>
    </SafeAreaView>
  );
};

export default SignIn;
