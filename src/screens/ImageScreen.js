import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const imageScreen = () => {
  return (
    <View>
      <ImageDetail image="" title="Forest" />
      <ImageDetail image="" title="Bar" />
      <ImageDetail image="" title="House" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default imageScreen;
