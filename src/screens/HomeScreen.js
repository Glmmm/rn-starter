import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.body}>Hello world!</Text>
      <Text style={styles.title}>Study of react native</Text>
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
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Counter"
      ></Button>
      <Button
        onPress={() => navigation.navigate("NameUpdate")}
        title="Name Update"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Color"
      ></Button>
      <Button
        onPress={() => navigation.navigate("AdjustColor")}
        title="Adjust Color"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Box Layout"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    marginVertical: 8,
  },
});

export default HomeScreen;
