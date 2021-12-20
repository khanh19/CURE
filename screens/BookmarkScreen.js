import React from "react";

import { View, Text, Button, StyleSheet } from "react-native";

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>BookmarkScreen</Text>
      <Button title="Click me!" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});

export default SearchScreen;
