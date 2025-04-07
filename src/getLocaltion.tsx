import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  // Request location permission for Android
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(() => err.message);
      } else {
        setError(() => 'An unknown error occurred');
      }
      return false;
    }
  };

  const getLocation = async () => {
    try {
      const hasPermission = await requestLocationPermission();

      if (!hasPermission) {
        setError('Location permission denied');
        return;
      }

      Geolocation.getCurrentPosition(
        position => {
          setLocation(position.coords);
        },
        error => {
          setError(error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>Error: {error}</Text>
      ) : location ? (
        <View style={styles.locationContainer}>
          <Text style={styles.text}>Latitude: {location.latitude}</Text>
          <Text style={styles.text}>Longitude: {location.longitude}</Text>
          <Text style={styles.text}>Accuracy: {location.accuracy}m</Text>
        </View>
      ) : (
        <Text style={styles.loading}>Fetching location...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  locationContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
  loading: {
    fontSize: 16,
    color: '#666',
  },
});

export default LocationComponent;
