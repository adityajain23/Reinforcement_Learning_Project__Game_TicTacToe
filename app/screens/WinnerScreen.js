import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";

import upperWave from "../assets/upperWave.png";
import lowerWave from "../assets/lowerWave.png";

class WinnerScreen extends Component {
  render() {
    return (
      <Pressable
        onPress={() => {
          this.props.navigation.navigate("Home");
        }}
        style={styles.screen}
      >
        <ImageBackground
          source={upperWave}
          style={styles.upperWave}
          resizeMode="cover"
        ></ImageBackground>
        <View style={styles.container}>
          <Text style={styles.title}>Player 1 Wins</Text>
          <Image
            resizeMode="center"
            style={styles.trophy}
            source={require("../assets/Trophy.jpg")}
          />
          <Text style={styles.text}>Tap Any Where To Go Back</Text>
        </View>
        <Image
          resizeMode="cover"
          style={styles.waves}
          source={require("../assets/lowerWave.svg")}
        />
        <ImageBackground
          source={lowerWave}
          style={styles.lowerWave}
          resizeMode="cover"
        ></ImageBackground>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  upperWave: {
    width: "100%",
    height: 100,
    zIndex: 2,
  },
  lowerWave: {
    width: "100%",
    height: 100,
  },
  text: {
    flex: 1,
    fontSize: 24,
    fontFamily: "Aloja",
    textAlign: "center",
  },
  title: {
    flex: 1,
    fontFamily: "Aloja",
    fontSize: 40,
    textAlign: "center",
  },
  trophy: {
    flex: 4,
  },
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  waves: {
    flex: 1,
  },
});
export default WinnerScreen;
