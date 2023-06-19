import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function SearchButton({ onPress, title }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Feather name="search" color={"white"} size={20}></Feather>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "green",
    flexDirection: "row",
    width: 175,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: "white",
    marginEnd: 5,
  },
});
