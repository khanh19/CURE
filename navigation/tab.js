import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import TabBarItem from "../components/TabBarItem";
import HomeScreen from "../screens/HomeScreen";
import BookmarkScreen from "../screens/BookmarkScreen";
import SettingsScreen from "../screens/SettingsScreen";
import NoticeScreen from "../screens/NoticeScreen";

const TabNav = createBottomTabNavigator();

const Tab = () => {
  return (
    <TabNav.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 60,
          opacity: 100,
          ...style.shadow,
        },
      }}
    >
      <TabNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem
              name="Home"
              iconPath={require("../assets/icons/home-512.png")}
              focused={focused}
              // iconPath={require("../assets/icons/favorite-512.png")}
            />
          ),
        }}
      />
      <TabNav.Screen
        name="Mark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem
              name="Marks"
              iconPath={require("../assets/icons/favorite-512.png")}
              focused={focused}
            />
          ),
        }}
      />
      <TabNav.Screen
        name="Notice"
        component={NoticeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem
              name="Notice"
              iconPath={require("../assets/icons/bell-512.png")}
              focused={focused}
            />
          ),
        }}
      />
      <TabNav.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarItem
              name="Settings"
              iconPath={require("../assets/icons/settings-512.png")}
              focused={focused}
            />
          ),
        }}
      />
    </TabNav.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tab;
