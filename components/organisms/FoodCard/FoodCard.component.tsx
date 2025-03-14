import { FlatList, ScrollView, View, Text } from 'react-native';
import foodFilterData from '../../../lib/foodFilter.json';
import foodData from '../../../lib/food.json';
import FoodFilterCard from '../../organisms/FoodFilterCard/FoodFilterCard.component';
import { useState } from 'react';
import FoodCardItem from '../FoodCardItem/FoodCardItem.component';

export default function FoodCard() {
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  return (
    <View>
      <ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={foodFilterData}
          contentContainerStyle={{}}
          renderItem={({ item, index }) => {
            return (
              <FoodFilterCard
                key={index}
                image={item.src}
                title={item.title}
                onPress={() => {
                  setSelectedFilter(item.title);
                }}
              />
            );
          }}
        />

        <View
          style={{
            marginTop: 16,
          }}>
          <FlatList
            contentContainerStyle={{}}
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            data={foodData}
            renderItem={({ item, index }) => {
              return (
                <FoodCardItem
                  containerStyle={{
                    width: '100%',
                  }}
                  key={index}
                  {...item}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
