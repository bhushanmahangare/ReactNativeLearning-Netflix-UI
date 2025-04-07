import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const FormsDayV3 = () => {
  const [profile, setProfile] = useState({
    name: 'Akash',
    city: 'Pune',
    state: 'Maharashtra',
    isEnabled: true,
  });

  const handleNameInputChange = (e: any) => {
    // Using getter based
    // setProfile({
    //   ...profile,
    //   name: e.nativeEvent.text,
    // });

    // Using closure based (This is the best way) setState(arrowFunc) -> arrowFunc -> (abTakKiState)=> ({...abTakKiState, new: value})
    setProfile(prevState => {
      return {
        ...prevState,
        name: e.nativeEvent.text,
      };
    });
  };

  const handleCityInputChange = (e: any) => {
    // Using getter based
    setProfile({
      ...profile,
      city: e.nativeEvent.text,
    });
  };

  return (
    <View>
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
            onChange={handleNameInputChange}
          />
        </View>

        <View>
          <Text>City</Text>
          <TextInput
            style={style.input}
            value={profile.city}
            placeholder="Enter city"
            onChange={handleCityInputChange}
          />
        </View>
      </View>
    </View>
  );
};

export default FormsDayV3;

const style = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    padding: 6,
    width: '100%',
  },
});