import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Alert } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

import { Button, SearchBar } from 'react-native-elements';

const IngredientContainer = (props) => {
  return (
    <ThemedView style={styles.itemContainer}>
      
    </ThemedView>
  );
}

export default function HomeScreen() {
  const [item, setItem] = useState(undefined);
  const [ingredients, setIngredients] = useState([]);

  function handleButtonPress() {    //adds a ingredient to the ingredients state
    if (item) {
      if (ingredients.includes(item)) {
        Alert.alert(`${item} already added.`)
      } else {
        setIngredients(
          [...ingredients,
            item
          ]
        );
        setItem(undefined);
      }
    }
  }

  return (
    <SafeAreaView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Foodie!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.searchBar}>
        <SearchBar
          placeholder='Type ingredient here...'
          value={item}
          onChangeText={(item) => setItem(item)}
          round
        />
        <Button
          title={"Add Ingredient"}
          onPress={handleButtonPress}
        />
      </ThemedView>
      <ThemedView style={styles.itemContainer}>
        {ingredients.map((ingredient) => {
          return (<ThemedText key={ingredient}>{ingredient}</ThemedText>);
        })}
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  searchBar: {
    marginTop: 30,
    padding: 2,
    height: 45,
  },
  itemContainer: {
    top: 50,
    margin: 20,
    height: 300
  }
  
});
