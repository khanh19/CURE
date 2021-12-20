import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./navigation/tab";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello World!</Text>
    //   <StatusBar style="auto" />

    // </View>
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
