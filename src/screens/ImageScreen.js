import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const imageScreen = () => {
  return (
    <View>
      <ImageDetail
        imageSource={require("../components/assets/forest.jpg")}
        title="Forest"
        score={9}
      />
      <ImageDetail
        imageSource={require("../components/assets/beach.jpg")}
        title="Beach"
        score={7}
      />
      <ImageDetail
        imageSource={require("../components/assets/mountain.jpg")}
        title="Mountain"
        score={6}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default imageScreen;
