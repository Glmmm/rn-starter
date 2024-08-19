import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { ...state, counter: state.counter + action.payload };
    case "Decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "Increase", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "Decrease", payload: 1 });
        }}
      />
      <Text>Count: {state.counter}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
