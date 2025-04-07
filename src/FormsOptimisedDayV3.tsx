import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FormsOtpmisedDayV3 = () => {
  const [profile, setProfile] = useState({
    name: 'Akash',
    city: 'Pune',
    state: 'Maharashtra',
    isEnabled: true,
  });

  const onInputChange = (value: string, key: string) => {
    console.log('@AJ Inside onInput: ', key, value);
    setProfile(prevState => ({...prevState, [key]: value}));
  };

  return (
    <SafeAreaView>
      <Text>Name: {profile.name}</Text>
      <Text>City: {profile.city}</Text>
      <Text>State: {profile.state}</Text>
      <Text>IsEnabled: {profile.isEnabled ? 'Yes' : 'No'}</Text>

      <View>
        <View>
          <Text>Name</Text>
          <TextInput
            style={style.input}
            value={profile.name}
            placeholder="Enter name"
            id="name"
            onChange={e => onInputChange(e.nativeEvent.text, 'name')}
          />
        </View>

        <View>
          <Text>City</Text>
          <TextInput
            style={style.input}
            value={profile.city}
            placeholder="Enter city"
            onChange={e => onInputChange(e.nativeEvent.text, 'city')}
          />
        </View>

        <View>
          <Text>State</Text>
          <TextInput
            style={style.input}
            value={profile.state}
            placeholder="Enter state"
            onChange={e => onInputChange(e.nativeEvent.text, 'state')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FormsOtpmisedDayV3;

const style = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    padding: 6,
    width: '100%',
  },
});
