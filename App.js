import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./navigation/tab";
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync().then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn);
//delay 4 seconds
const componentDidMount = () => {
  setTimeout(async () => {
    await SplashScreen.hideAsync();
  }, 4000);
}

export default function App() {
  componentDidMount();
  return (

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
