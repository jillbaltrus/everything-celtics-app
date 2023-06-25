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
  curvedBorderOutline: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
  },
  bottomBorder: {
    paddingBottom: 12,
    borderColor: "#bbb",
    borderBottomWidth: 1,
  },
  list: {
    marginTop: 15,
    flex: 1,
  },
  titleText: {
    marginBottom: 12,
    marginStart: 10,
    lineHeight: 20,
    // textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  paragraph: {
    marginBottom: 12,
    lineHeight: 25,
    // textAlign: "center",
    fontSize: 16,
  },
  paragraphBold: {
    marginBottom: 12,
    lineHeight: 25,
    // textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  leftTextContainer: {
    textAlign: "left",
    marginStart: 20,
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
