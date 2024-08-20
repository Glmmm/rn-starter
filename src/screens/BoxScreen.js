import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={style.view}>
      <Text style={style.text_1}>Box #1</Text>
      <Text style={style.text_2}>Box #2</Text>
      <Text style={style.text_3}>Box #3</Text>
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    borderColor: "black",
    borderWidth: 1,
    height: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text_1: {
    borderColor: "red",
    borderWidth: 1,
    alignSelf: "flex-start",
    height: 50,
    flex: 1,
  },
  text_2: {
    borderColor: "red",
    borderWidth: 1,
    alignSelf: "center",
    height: 50,
    flex: 1,
  },

  text_3: {
    borderColor: "red",
    borderWidth: 1,
    alignSelf: "flex-start",
      height: 50,
    flex: 1,
  },
});

export default BoxScreen;
