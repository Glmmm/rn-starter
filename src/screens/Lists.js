import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "estranho#1", age: 19 },
    { name: "estranho#2", age: 23 },
    { name: "estranho#3", age: 22 },
    { name: "estranho#4", age: 20 },
    { name: "estranho#5", age: 21 },
    { name: "estranho#6", age: 42 },
  ];
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={style.text}>
            nome: {item.name} / idade: {item.age}
          </Text>
        );
      }}
    />
  );
};

const style = StyleSheet.create({
  text: {
    marginVertical: 24,
  },
});

export default ListScreen;
