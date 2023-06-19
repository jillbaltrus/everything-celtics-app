import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "./../styles/global";

// constants
const titleText = "Stats Screen"

export default function Stats() {
  return (
    <View style={globalStyles.container}>
      <Text>{titleText}</Text>
    </View>
  );
}
