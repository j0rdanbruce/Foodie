import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";


const RecipeItem = ({label}: recipe) => {
  <View style={styles.recipe}>
    <Text style={styles.title}>{label}</Text>
  </View>
};

export default function RecipeContainer(props: recipe[]) {
  const recipes = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <RecipeItem label={item.label} />
        )}
        keyExtractor={recipe => recipe.label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tan'
  },
  recipe: {
    marginTop: 8,
    padding: 20,
    backgroundColor: 'red'
  },
  title: {
    fontSize: 32,
  }
});