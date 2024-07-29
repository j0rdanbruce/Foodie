import React from "react";

import { StyleSheet, TextInput } from "react-native";

import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export default function SearchBar() {

  return (
    <ThemedView style={styles.container}>
      <TextInput></TextInput>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 40,
  }
});