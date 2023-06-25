import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { globalStyles } from "../../styles/global";
import SearchButton from "../atoms/SearchButton";
import SeasonSelector from "../atoms/SeasonSelector";

// PLACEHOLDER CONSTANTS:
const searchButtonText = "Search";
const searchBarPlaceholder = "Last name (optional)";


export default function Search({ searchHandler, seasons }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");

  const selectHandler = (val) => setSelectedSeason(val);

  return (
    <View>
      <SeasonSelector sortedSeasons={seasons} selectHandler={selectHandler}/>
      <TextInput
        style={styles.input}
        placeholder={searchBarPlaceholder}
        onChangeText={(value) => {
          setSearchTerm(value);
        }}
      ></TextInput>
      <View style={globalStyles.center}>
        <SearchButton
          onPress={() => searchHandler(searchTerm, selectedSeason)}
          title={searchButtonText}
        ></SearchButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    marginTop: 0,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dropdownBox: {
    borderRadius: 20,
    width: 100,
    marginBottom: 12,
    borderColor: "#bbb",
    borderWidth: 1,
  },
  dropdownOptions: {
    borderColor: "#bbb",
    borderWidth: 1,
  },
});
