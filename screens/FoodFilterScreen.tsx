import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const FoodFilterScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Sample data
  const categories = ['All', 'Idli', 'Dosa', 'Poha', 'Sandw'];
  const filters = ['New', 'Under 30 mins', 'Rating 4.0+', 'Pure Veg'];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter],
    );
  };

  return (
    <View style={styles.container}>
      {/* Category Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryItem,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Additional Filters */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => console.log('Open advanced filters')}>
          <Text style={styles.filterButtonText}>Filters</Text>
        </TouchableOpacity>

        {filters.map(filter => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterItem,
              selectedFilters.includes(filter) && styles.selectedFilter,
            ]}
            onPress={() => toggleFilter(filter)}>
            <Text
              style={[
                styles.filterText,
                selectedFilters.includes(filter) && styles.selectedFilterText,
              ]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  categoryContainer: {
    paddingVertical: 8,
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
  },
  selectedCategory: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6B6B',
  },
  categoryText: {
    fontSize: 16,
    color: '#666',
  },
  selectedCategoryText: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    gap: 8,
  },
  filterButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  filterButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  filterItem: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  selectedFilter: {
    backgroundColor: '#FFE8E8',
    borderWidth: 1,
    borderColor: '#FF6B6B',
  },
  filterText: {
    color: '#666',
  },
  selectedFilterText: {
    color: '#FF6B6B',
    fontWeight: '500',
  },
});

export default FoodFilterScreen;
