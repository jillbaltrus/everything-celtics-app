import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { globalStyles } from "../../styles/global";
import SearchButton from "../atoms/SearchButton";

// PLACEHOLDER CONSTANTS:
const seasonDropdownPlaceholder = "Select a season";
const searchBarPlaceholder = "last name (optional)";
const searchButtonText = "Search";
const dropdownValueFieldName = "value";

export default function Search({ searchHandler, seasons }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [defaultSeasonOption, setDefaultSeasonOption] = useState();

  useEffect(() => {
    if (seasons.length > 0) {
      // index 0 always has latest season
      setDefaultSeasonOption(seasons[0]);
      setSelectedSeason(seasons[0].value);
    }
  }, [seasons]);

  return (
    <View>
      <View style={globalStyles.center}>
        <SelectList
          setSelected={(val) => setSelectedSeason(val)}
          data={seasons}
          save={dropdownValueFieldName}
          search={false}
          placeholder={seasonDropdownPlaceholder}
          defaultOption={defaultSeasonOption}
          boxStyles={styles.dropdownBox}
          dropdownStyles={styles.dropdownOptions}
        ></SelectList>
      </View>
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
