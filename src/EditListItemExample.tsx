import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  TextInput
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Toast from 'react-native-simple-toast';

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
  profileImage: string;
}

interface UserCard extends User {
  onDelete: () => void;
  onEdit: () => void;
}

const UserCard = ({
  name,
  city,
  email,
  phone,
  profileImage,
  onDelete,
  onEdit,
}: UserCard) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.cardActionBtns}>
            <TouchableOpacity style={styles.editItemBtn} onPress={onEdit}>
              <Text>Ed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteItemBtn} onPress={onDelete}>
              <Text>De</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </View>
  );
};

// Move the ItemSeparatorComponent outside the FlatList
const ItemSeparator = () => <View style={styles.separator} />;

const EditListItemExample = () => {
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
    {
      id: 5,
      name: 'Amit',
      city: 'Delhi',
      email: 'amit@example.com',
      phone: '123-321-1234',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 6,
      name: 'Priya',
      city: 'Mumbai',
      email: 'priya@example.com',
      phone: '321-654-9871',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 7,
      name: 'Vishal',
      city: 'Chennai',
      email: 'vishal@example.com',
      phone: '654-321-9872',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 8,
      name: 'Ravi',
      city: 'Hyderabad',
      email: 'ravi@example.com',
      phone: '876-543-2101',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 9,
      name: 'Anjali',
      city: 'Kolkata',
      email: 'anjali@example.com',
      phone: '543-210-9873',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 10,
      name: 'Deepak',
      city: 'Bangalore',
      email: 'deepak@example.com',
      phone: '321-654-9872',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 11,
      name: 'Manoj',
      city: 'Jaipur',
      email: 'manoj@example.com',
      phone: '657-987-1234',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 12,
      name: 'Nisha',
      city: 'Chennai',
      email: 'nisha@example.com',
      phone: '789-654-3212',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 13,
      name: 'Sandeep',
      city: 'Mumbai',
      email: 'sandeep@example.com',
      phone: '555-888-7777',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 14,
      name: 'Nikhil',
      city: 'Delhi',
      email: 'nikhil@example.com',
      phone: '444-222-8888',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 15,
      name: 'Neha',
      city: 'Pune',
      email: 'neha@example.com',
      phone: '987-234-5678',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 16,
      name: 'Karan',
      city: 'Mumbai',
      email: 'karan@example.com',
      phone: '123-777-5555',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 17,
      name: 'Alok',
      city: 'Gurgaon',
      email: 'alok@example.com',
      phone: '654-789-4562',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 18,
      name: 'Ruchi',
      city: 'Indore',
      email: 'ruchi@example.com',
      phone: '432-876-9873',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 19,
      name: 'Madhuri',
      city: 'Bhubaneshwar',
      email: 'madhuri@example.com',
      phone: '987-765-4321',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 20,
      name: 'Ritika',
      city: 'Lucknow',
      email: 'ritika@example.com',
      phone: '321-432-6543',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 21,
      name: 'Shubham',
      city: 'Patna',
      email: 'shubham@example.com',
      phone: '567-543-2341',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 22,
      name: 'Rohit',
      city: 'Nagpur',
      email: 'rohit@example.com',
      phone: '432-234-7654',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 23,
      name: 'Tanya',
      city: 'Ahmedabad',
      email: 'tanya@example.com',
      phone: '213-456-7891',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 24,
      name: 'Meena',
      city: 'Surat',
      email: 'meena@example.com',
      phone: '546-234-7653',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 25,
      name: 'Sonali',
      city: 'Goa',
      email: 'sonali@example.com',
      phone: '654-876-2312',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 26,
      name: 'Aman',
      city: 'Chandigarh',
      email: 'aman@example.com',
      phone: '123-345-6547',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 27,
      name: 'Pooja',
      city: 'Noida',
      email: 'pooja@example.com',
      phone: '432-543-7654',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 28,
      name: 'Harsh',
      city: 'Dehradun',
      email: 'harsh@example.com',
      phone: '567-432-9874',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 29,
      name: 'Seema',
      city: 'Jammu',
      email: 'seema@example.com',
      phone: '876-543-3211',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
    {
      id: 30,
      name: 'Gaurav',
      city: 'Shimla',
      email: 'gaurav@example.com',
      phone: '234-567-8999',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
    },
  ]);
  const [editingUser, setIsEditingUser] = useState<User | null>(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);

  const [isRefreshing, setIsRefreshing] = useState(false);

  // Function to simulate refreshing the list
  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    // Simulate fetching data after 1 second
    setTimeout(() => {
      setIsRefreshing(false);
      // You can update `users` state with new data here if necessary
    }, 1000);
  }, []);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>User List</Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.footerText}>End of List</Text>
    </View>
  );

  const onDeleteCardItem = ({ id, name }: User) => {
    Alert.alert('Confirmation', `Do you want to remove ${name} the list?`, [
      {
        text: 'No',
        onPress: () => console.log('You said no', id),
      },
      {
        text: 'Yes',
        onPress: () => {
          setUsers(prevUsers => prevUsers.filter(item => item.id !== id));
          Toast.show(`${name} is removed successfully!`, Toast.SHORT);
        },
        style: 'cancel',
      },
    ]);
  };

  const onEditUser = (user: User) => {
    setIsEditingUser(user);
    setIsEditModalVisible(true);
  };

  const handleSubmit = () => {
    if (
      !editingUser?.name?.trim() ||
      !editingUser?.email?.trim() ||
      !editingUser?.city?.trim()
    ) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    // Update the item
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === editingUser?.id
          ? {
              ...user,
              name: editingUser.name,
              email: editingUser.email,
              city: editingUser.city,
              phone: editingUser.phone,
            }
          : user,
      ),
    );
    setIsEditModalVisible(false);
    setIsEditingUser({
      id: 0,
      name: '',
      email: '',
      city: '',
      phone: '',
      profileImage: '',
    });
  };

  return (
    <View style={styles.container}>
      <ReactNativeModal
        isVisible={isEditModalVisible}
        style={styles.modal}
        backdropOpacity={0.5}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        deviceHeight={null}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: '#fff', padding: 12 }}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={editingUser?.name}
              onChangeText={text =>
                setIsEditingUser(prev =>
                  prev ? { ...prev, name: text } : null,
                )
              }
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              value={editingUser?.email}
              onChangeText={text =>
                setIsEditingUser(prev =>
                  prev ? { ...prev, email: text } : null,
                )
              }
            />

            <TextInput
              style={styles.input}
              placeholder="City"
              value={editingUser?.city}
              onChangeText={text =>
                setIsEditingUser(prev =>
                  prev ? { ...prev, city: text } : null,
                )
              }
            />

            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={editingUser?.phone}
              onChangeText={text =>
                setIsEditingUser(prev =>
                  prev ? { ...prev, phone: text } : null,
                )
              }
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsEditModalVisible(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>

            <Text>Name: {editingUser?.name}</Text>
            <Text>Email: {editingUser?.email}</Text>
            <Text>City: {editingUser?.city}</Text>
            <Text>Phone: {editingUser?.phone}</Text>
            <TouchableOpacity onPress={() => setIsEditModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ReactNativeModal>

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserCard
            {...item}
            onDelete={() => onDeleteCardItem(item)}
            onEdit={() => onEditUser(item)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        onEndReached={() => {
          // Implement logic to load more items when end of list is reached
          console.log('End of List reached');
        }}
        onEndReachedThreshold={0.5} // Trigger the onEndReached when 50% of the content is visible
        initialNumToRender={5} // How many items to render initially
        style={styles.list}
      />
    </View>
  );
};

export default EditListItemExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 12,
  },
  header: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  footer: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#777',
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
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
    flex: 1,
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
    height: 10,
    backgroundColor: '#f5f5f5',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  deleteItemBtn: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  editItemBtn: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardActionBtns: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: '80%', // This controls the modal height
  },
});
