import React from "react";

import { View, Text, Button, StyleSheet } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
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

export default SettingsScreen;