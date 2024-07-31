import React from "react";
import { StyleSheet, Pressable } from "react-native";

import { Button } from "react-native-elements";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

import Feather from '@expo/vector-icons/Feather';


export default function DeletableContainer(props: Ingredient) {
  const { index, title, handleDelete } = props;

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={{margin: 4}}>{title}</ThemedText>
      <Pressable style={styles.deleteBtn} onPress={() => {handleDelete(index)}}>
        <Feather name="trash-2" size={23} color="black" />
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: 'auto',
    margin: 4,
    paddingLeft: 5,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  deleteBtn: {
    marginLeft: 'auto',
    //position: 'relative',
    //right: 0,
    //height: 40,
    //width: 25,
  }
});