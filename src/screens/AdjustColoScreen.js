import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import AdjustColorComponent from "../components/AdjustColorComponent";

const increment = 25;
const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};
const AdjustColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { red, green, blue } = state;

  return (
    <View>
      <AdjustColorComponent
        onIncrease={() => {
          dispatch({ type: "change_red", payload: increment });
        }}
        onDecrease={() => {
          dispatch({ type: "change_red", payload: -1 * increment });
        }}
        type="Red"
      />
      <AdjustColorComponent
        onIncrease={() => {
          dispatch({ type: "change_green", payload: increment });
        }}
        onDecrease={() => {
          dispatch({ type: "change_green", payload: -1 * increment });
        }}
        type="Green"
      />
      <AdjustColorComponent
        onIncrease={() => {
          dispatch({ type: "change_blue", payload: increment });
        }}
        onDecrease={() => {
          dispatch({ type: "change_blue", payload: -1 * increment });
        }}
        type="Blue"
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};
const style = StyleSheet.create({});

export default AdjustColorScreen;
