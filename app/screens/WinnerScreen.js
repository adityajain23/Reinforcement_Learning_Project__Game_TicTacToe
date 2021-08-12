import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

class WinnerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.screen}>
        <Image
          resizeMode="cover"
          style={styles.waves}
          source={require("../assets/upperWave.svg")}
        />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
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
  },
  waves: {
    flex: 1,
  },
});
export default WinnerScreen;
