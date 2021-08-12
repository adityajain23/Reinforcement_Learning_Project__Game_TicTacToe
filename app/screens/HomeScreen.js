import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  Button,
} from "react-native";

import Header from "../../components/Header";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Header />
        </View>
        <ImageBackground
          resizeMode="cover"
          style={[
            styles.wave,
            { justifyContent: "flex-end", paddingBottom: 20 },
          ]}
          source={require("../assets/upperWave.svg")}
        >
          <Text style={styles.title}>TicTacToe</Text>
        </ImageBackground>
        <View style={styles.boardImageContainer}>
          <Image
            resizeMode="center"
            style={styles.boardImage}
            source={require("../assets/ticTacToeBoard.jpg")}
          />
        </View>
        <ImageBackground
          resizeMode="cover"
          style={[styles.wave, { justifyContent: "flex-start" }]}
          source={require("../assets/lowerWave.svg")}
        >
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => {}}>
              <Text style={styles.text}>{"Single Player"}</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => {}}>
              <Text style={styles.text}>{"Multi Player"}</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boardImage: {
    flex: 1,
  },
  boardImageContainer: {
    flex: 8,
  },
  button: {
    width: 140,
    height: 40,
    borderRadius: 60,
    backgroundColor: "#107615",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  header: {
    height: 60,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Aloja",
    letterSpacing: 0.25,
    color: "white",
    padding: 8,
  },
  title: {
    fontSize: 40,
    transform: [{ rotate: "-20deg" }],
    textAlign: "center",
    fontFamily: "Aloja",
  },
  screen: {
    flex: 1,
  },
  wave: {
    flex: 3,
  },
});

export default HomeScreen;
