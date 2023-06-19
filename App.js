import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import Home from "./screens/home";
import PlayersStack from "./routes/playersStack";
import { globalStyles } from "./styles/global";
import GamesStack from "./routes/gamesStack";
import StatsStack from "./routes/statsStack";

const Drawer = createDrawerNavigator();

export default function App() {
  const [loaded] = useFonts({
    nba_celtics_font: require("./assets/fonts/nba_celtics_font.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={globalStyles.drawerNavigationOptions}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
            }}
          />
          <Drawer.Screen
            name="PlayersStack"
            component={PlayersStack}
            options={{
              title: "Players",
            }}
          />
          <Drawer.Screen
            name="GamesStack"
            component={GamesStack}
            options={{
              title: "Games",
            }}
          />
          <Drawer.Screen
            name="StatsStack"
            component={StatsStack}
            options={{
              title: "Stats & Standings",
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}
