// import React from 'react';
// import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
// import { Text } from 'react-native-svg';

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { MapIcon } from '../components/icons/Map.icon';
import { SearchIcon } from '../components/icons/Search.icon';
import { MicIcon } from '../components/icons/Mic.icon';
import { FilterIcon } from '../components/icons/Filter.icon';
import { DropdownIcon } from '../components/icons/Dropdown.icon';
import { BreadcrumbsIcon } from '../components/icons/Breadcrumbs.icon';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import FoodFilterScreen from './FoodFilterScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ZomatoHomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <MapIcon />
            <Text style={styles.headerTitle}>Emersion Residency Hotel</Text>
            <DropdownIcon />
            <TouchableOpacity>
              <BreadcrumbsIcon />
            </TouchableOpacity>
            <Text style={styles.headerSubtitle}>
              Lane Number 4, Lexman Nogar, Baner, Pune, Maharashtra
            </Text>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Icon
              name="search"
              size={20}
              color="#666"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search 'guijiya'"
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* Hotel Image & Details */}
          <ImageBackground
            source={{ uri: 'https://iili.io/3faf0Ml.jpg' }} // Add your image path
            style={styles.hotelImage}
            resizeMode="cover">
            <View style={styles.imageOverlay}>
              <Text style={styles.hotelName}>Emersion Residency Hotel</Text>
              <Text style={styles.ratingText}>⭐ 4.5 (120 reviews)</Text>
            </View>
          </ImageBackground>

          {/* Additional Content */}
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Popular Facilities</Text>
            <View style={styles.facilitiesContainer}>
              <Text style={styles.facility}>🏊 Swimming Pool</Text>
              <Text style={styles.facility}>🍴 Restaurant</Text>
              <Text style={styles.facility}>🅿️ Free Parking</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 15,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    //alignContent: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#2d3436',
    alignContent: 'center',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#636e72',
    marginTop: 4,
    textAlign: 'right',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#2d3436',
  },
  hotelImage: {
    height: 200,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    padding: 16,
  },
  hotelName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 12,
  },
  facilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  facility: {
    backgroundColor: '#f1f2f6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 14,
    color: '#2d3436',
  },
});

export default ZomatoHomeScreen;

// const ZomatoHomeScreen = () => {
//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         {/* Location & Hotel Name */}
//         <View style={styles.header}>
//           <MapIcon />
//           <Text style={styles.hotelName}>Emersion Residency Hotel</Text>
//           <DropdownIcon />
//           <TouchableOpacity>
//             <BreadcrumbsIcon />
//           </TouchableOpacity>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <SearchIcon />
//           <Text style={styles.searchText}>Search "gujiya"</Text>
//           <MicIcon />
//         </View>

//         {/* Filter Icon */}
//         <TouchableOpacity style={styles.filterButton}>
//           <FilterIcon />
//         </TouchableOpacity>
//       </View>
//       <FoodFilterScreen />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//     backgroundColor: 'white',
//     elevation: 5,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   hotelName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginHorizontal: 8,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F2F2F2',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginVertical: 10,
//   },
//   searchText: {
//     flex: 1,
//     fontSize: 16,
//     paddingHorizontal: 10,
//   },
//   filterButton: {
//     alignSelf: 'flex-end',
//   },
// });

// export default ZomatoHomeScreen;
