import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

const SwipeList: React.FC<{ swipeList: string[] }> = ({
    swipeList = [],
}) => {
    return (
        <>
            <SwipeListView
                data={swipeList}
                renderItem={(data, index) => (
                    <View key={data.index} style={styles.renderItemContainer}>
                        <View style={styles.listCard}>
                            <Text style={styles.listCardTextOne}>{data.item}</Text>
                            <Text>{'<----'}</Text>
                        </View>
                    </View>
                )}
                renderHiddenItem={(data, index) => (
                    <View style={styles.hiddenItemContainer}>
                        <TouchableOpacity style={styles.hiddenItemButton}>
                            <Text style={styles.hiddenItemText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.hiddenItemButton ]}>
                            <Text style={styles.hiddenItemText}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.hiddenItemButton ]}>
                            <Text style={styles.hiddenItemText}>Copy</Text>
                        </TouchableOpacity>
                    </View>
                )}
                rightOpenValue={-230}
            />
        </>
    );
}

const mainItem = () => {

    const swipeListItems = [
      'Python',
      'JavaScript',
      'Java',
      'C++',
      'C#',
      'Ruby',
      'Swift',
      'Kotlin',
      'Go (Golang)',
      'PHP',
      'TypeScript',
      'Rust',
    ];
  
    return (
      <View style={{ padding: 15 }}>
        <Text style={{
            textTransform: 'uppercase',
            fontWeight: '700',
            marginVertical: 30,
            textAlign: 'center',
            color: '#000000'
          }}
        >
          React Native Swipe List
        </Text>
        <SwipeList swipeList={swipeListItems} />
      </View>
    );
  };

  export default mainItem;
  


const styles = StyleSheet.create({
    renderItemContainer: {
        marginVertical: 10,
    },
    listCard: {
        backgroundColor: '#F8F7F1',
        borderWidth: 1,
        borderRadius: 8,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listCardTextOne: {
        color: '#000000',
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    hiddenItemContainer: {
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    hiddenItemButton: {
        marginRight: 10,
        backgroundColor: '#191919',
        borderRadius: 4,
        padding: 10,
    },
    hiddenItemText: {
        color: '#FFFFFF',
        height: 20,
    },
});