import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AdjustColorComponent = ({ type, onDecrease, onIncrease }) => {
  
  return (
    <View>
      <Text>{type}</Text>
      <Button title={`More ${type}`} onPress={() => {onIncrease()}} />
      <Button title={`Less ${type}`} onPress={() => {onDecrease()}} />
    </View>
  );
};

const style = StyleSheet.create({});

export default AdjustColorComponent;
