import React from "react";
import { Text } from "react-native";
import { globalStyles } from "../../styles/global";

export default function BioDetail({ detail }) {
  return (
    <Text style={globalStyles.leftTextContainer}>
      <Text style={globalStyles.paragraphBold}>{detail.title}: </Text>
      <Text style={globalStyles.paragraph}>{detail.body}</Text>
    </Text>
  );
}
