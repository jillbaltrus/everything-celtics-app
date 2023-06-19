import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 0,
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    marginTop: 15,
    flex: 1,
  },
  paragraph: {
    marginBottom: 12,
    lineHeight: 20,
    textAlign: "center",
    fontSize: 14,
  },
  drawerNavigationOptions: {
    headerStyle: {
      height: 80,
      backgroundColor: "green",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      textAlign: "center",
      color: "#fff",
      fontWeight: "bold",
      fontSize: 26,
      fontFamily: "nba_celtics_font",
      letterSpacing: 1,
    },
    drawerActiveTintColor: "green",
  },
});
