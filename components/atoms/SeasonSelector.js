import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { globalStyles } from "../../styles/global";

// PLACEHOLDER CONSTANTS:
const seasonDropdownPlaceholder = "Select a season";
const dropdownValueFieldName = "value";

export default function SeasonSelector({ selectHandler, sortedSeasons }) {
  const [defaultSeasonOption, setDefaultSeasonOption] = useState();

  useEffect(() => {
    if (sortedSeasons.length > 0) {
      // index 0 always has latest season
      setDefaultSeasonOption(sortedSeasons[0]);
      // "select" default value
      selectHandler(defaultSeasonOption);
    }
  }, [sortedSeasons]);

  return (
      <View style={globalStyles.center}>
        <SelectList
          setSelected={selectHandler}
          data={sortedSeasons}
          save={dropdownValueFieldName}
          search={false}
          placeholder={seasonDropdownPlaceholder}
          defaultOption={defaultSeasonOption}
          boxStyles={styles.dropdownBox}
          dropdownStyles={styles.dropdownOptions}
        ></SelectList>
      </View>
  );
}

const styles = StyleSheet.create({
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
