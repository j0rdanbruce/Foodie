import React from "react";
import { StyleSheet } from "react-native";

import { Button } from "react-native-elements";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";


export default function DeletableContainer(props: Ingredient) {
  const { index, title, handleDelete } = props;

  return (
    <ThemedView style={styles.container}>
      <ThemedText>{title}</ThemedText>
      <Button
        title="X"
        onPress={() => {handleDelete(index)}}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 100,
    margin: 4,
    paddingLeft: 5,
    backgroundColor: 'red',
  },
  deleteBtn: {
    //flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    position: 'relative',
    right: 0,
    //height: 40,
    //width: 25,
    //backgroundColor: 'yellow'
  }
});