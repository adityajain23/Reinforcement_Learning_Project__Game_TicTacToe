import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Button,
} from "react-native";
import * as Font from "expo-font";

import HomeScreen from "./app/screens/HomeScreen";
import WinnerScreen from "./app/screens/WinnerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  componentDidMount() {
    Font.loadAsync({
      Aloja: require("./app/assets/fonts/Aloja-Light.otf"),
      BungeeInline: require("./app/assets/fonts/BungeeInline-Regular.ttf"),
      StyleScript: require("./app/assets/fonts/StyleScript-Regular.ttf"),
      PaletteMosaic: require("./app/assets/fonts/PaletteMosaic-Regular.ttf"),
    }).then(() => this.setState({ isLoaded: true }));
    StatusBar.setHidden(true);
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Winner" component={WinnerScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, //notch-related problem.
    // transform: [{ rotate: "-20deg" }],
  },
  title: {
    fontSize: 66,
    fontFamily: "StyleScript",
  },
});

export default App;
