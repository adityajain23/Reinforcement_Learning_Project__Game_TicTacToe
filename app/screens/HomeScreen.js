import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";

import Header from "../../components/Header";
import boardImg from "../assets/ticTacToeBoard.jpg";
import upperWave from "../assets/upperWave.png";
import lowerWave from "../assets/lowerWave.png";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Header />
        </View>
        <ImageBackground
          source={upperWave}
          style={styles.upperWave}
          resizeMode="cover"
        >
          <Text style={styles.title}>TicTacToe</Text>
        </ImageBackground>
        <View style={styles.imgHolder}>
          <ImageBackground
            source={boardImg}
            style={styles.boardImg}
          ></ImageBackground>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("MainPage");
            }}
          >
            <Text style={styles.text}>{"Single Player"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("MainPage");
            }}
          >
            <Text style={styles.text}>{"Multi Player"}</Text>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={lowerWave}
          style={styles.lowerWave}
          resizeMode="cover"
        ></ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boardImage: {
    flex: 1,
  },
  imgHolder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  boardImg: {
    width: 400,
    height: 400,
  },
  button: {
    width: 140,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#107615",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  buttonContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  header: {
    height: 60,
  },
  text: {
    fontSize: 10,
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
    paddingTop: 35,
    zIndex: 10,
  },
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default HomeScreen;
