import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const UpdateNameScreen = () => {
  const [userName, setUsername] = useState("");
  regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        style={style.input}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        value={userName}
        onChangeText={(newValue) => setUsername(newValue)}
      />
      <Text>{userName}</Text>
      {regexPassword.test(userName) ? (
        <Text>Tudo certo</Text>
      ) : (
        <Text>8 (caracteres) 1 (letra) 1 (número)</Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default UpdateNameScreen;
