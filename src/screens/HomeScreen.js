import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";
import ListScreen from "./Lists";

const HomeScreen = ({ navigation }) => {
  const user = "Guilherme";
  return (
    <View>
      <Text style={styles.body}>Hello world!</Text>
      <Text style={styles.title}>My name is {user}</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Components"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Permission")}
        title="Permissions"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Lists")}
        title="Lists"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Images"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
  },
  title: {
    fontSize: 32,
  },
  button: {
    marginVertical: 8,
  },
});

export default HomeScreen;
