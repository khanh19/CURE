import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const TabBarItem = (props) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        top: 1,
      }}
    >
      <Image
        source={props.iconPath}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          // tintColor: "#94E1E3",
          tintColor: props.focused ? "#8DC2D9" : "#94E1E3",
        }}
      />
      <Text style={{ color: props.focused ? "#8DC2D9" : "#94E1E3" }}>
        {props.name}
      </Text>
    </View>
  );
};

export default TabBarItem;
