import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "./../styles/global";

// CONSTANTS
const titleText = "Games Screen";

export default function Games() {
  return (
    <View style={globalStyles.container}>
      <Text>{titleText}</Text>
    </View>
  );
}
