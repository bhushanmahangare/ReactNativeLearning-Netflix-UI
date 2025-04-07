import React, { useEffect, useState } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';
import Contacts from 'react-native-contacts';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const PLATFORM_IOS = Platform.OS === 'ios';
  const CONTACTS_PERMISSION = PLATFORM_IOS
    ? PERMISSIONS.IOS.CONTACTS
    : PERMISSIONS.ANDROID.READ_CONTACTS;

  // Check and request contacts permission
  const requestContactsPermission = async () => {
    try {
      const status = await check(CONTACTS_PERMISSION);

      if (status === RESULTS.GRANTED) {
        setPermissionGranted(true);
        return true;
      }

      const result = await request(CONTACTS_PERMISSION);
      setPermissionGranted(result === RESULTS.GRANTED);
      return result === RESULTS.GRANTED;
    } catch (error) {
      console.error('Permission error:', error);
      return false;
    }
  };

  // Load contacts after permission is granted
  const loadContacts = async () => {
    if (!permissionGranted) return;

    try {
      console.log('Loading contacts...');
      const allContacts = await Contacts.getAll();
      console.log('Contacts:', allContacts);
      setContacts(allContacts);
    } catch (error) {
      console.error('Error loading contacts:', error);
    }
  };

  useEffect(() => {
    const init = async () => {
      const hasPermission = await requestContactsPermission();
      if (hasPermission) {
        loadContacts();
      }
    };

    init();
  }, []);

  const renderItem = ({ item }: { item: Contact }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>
        {item.givenName} {item.familyName}
      </Text>
      {item.phoneNumbers?.map((phone: { number: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
        <Text key={index} style={styles.phoneNumber}>
          {phone.number}
        </Text>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {!permissionGranted ? (
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>
            Please grant contacts permission to view your contacts
          </Text>
          <Button
            title="Grant Permission"
            onPress={async () => {
              const granted = await requestContactsPermission();
              if (granted) loadContacts();
            }}
          />
        </View>
      ) : (
        <FlatList
          data={contacts}
          keyExtractor={item => item.recordID}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No contacts found</Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  contactItem: {
    padding: 16,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  phoneNumber: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  permissionText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default ContactList;
