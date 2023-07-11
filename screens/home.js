import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "./../styles/global";
import { fetchCelticsTeam } from "../api/nbaService.api";

export default function Home() {
  const [doneLoading, setDoneLoading] = useState(false);
  const [logo, setLogo] = useState(null);

  // TO BE REINTRODUCED - commenting out during development so I don't have to pay per API call :)
  useEffect(() => {
      const fetchCelticsData = async () => {
          try {
              const data = await fetchCelticsTeam();
              setLogo(data[0].logo);
          } catch (error) {
            console.error(error);
          } finally {
              setDoneLoading(true);
          }
        };
        fetchCelticsData();
    }, []);

  return (
    <View style={globalStyles.container}>
      {doneLoading && (
        <Image
          style={styles.logo}
          source={{
            uri: logo,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 175,
    height: 175,
    alignSelf: "center",
  },
});
