import React from "react";
import { View, Text, StyleSheet, ViewBase, TextInput } from "react-native";

const UpdateNameScreen = () => {
  userName = "";
  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput></TextInput>
      <Text>Your name is: {userName}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default UpdateNameScreen;
