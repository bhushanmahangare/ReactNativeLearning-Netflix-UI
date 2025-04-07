import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

/**
 * 1. Define data using state
 * 2. Create a render component for JSON
 * 3. Use FlatList to render data
 * 4. Render UI
 */

interface User {
  id: number;
  name: string;
  city: string;
  email: string;
  phone: string;
  profileImage: string; // Add profile image URL
}

const UserCard = ({name, city, email, phone, profileImage}: User) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: profileImage}} style={styles.profileImage} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </View>
  );
};

const FirstRenderList = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'Siddharth',
      city: 'Jaipur',
      email: 'siddharth@example.com',
      phone: '123-456-7890',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 2,
      name: 'Yash',
      city: 'Pune',
      email: 'yash@example.com',
      phone: '987-654-3210',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 3,
      name: 'Shivam',
      city: 'Jabalpur',
      email: 'shivam@example.com',
      phone: '456-789-1234',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 4,
      name: 'Sanskrati',
      city: 'Bangalore',
      email: 'sanskrati@example.com',
      phone: '321-654-9870',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Users</Text>
      <FlatList
        style={{padding: 12}}
        data={users}
        renderItem={({item}) => <UserCard {...item} />}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default FirstRenderList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  cardContent: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  city: {
    fontSize: 16,
    color: '#777',
  },
  email: {
    fontSize: 14,
    color: '#333',
  },
  phone: {
    fontSize: 14,
    color: '#333',
  },
  separator: {
    height: 10, // This is the gap between the items
    backgroundColor: '#f5f5f5', // The background color of the separator, can be the same as the container
  },
});
