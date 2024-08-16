import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  return <Text style={style.textStyle}>Some Amount of text</Text>;
};
const style = StyleSheet.create({
  textStyle: {
    fontSize: 32,
  },
});

export default ComponentsScreen;
