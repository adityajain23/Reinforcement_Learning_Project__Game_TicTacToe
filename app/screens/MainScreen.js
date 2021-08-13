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
  TextInput,
} from "react-native";

import Header from "../../components/Header";
import boardImg from "../assets/ticTacToeBoard.jpg";
class MainScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Header />
        </View>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.playerNamesContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.text}>Player 1</Text>
            <TextInput placeholder="name" style={styles.textInput} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.text}>Player 2</Text>
            <TextInput placeholder="name" style={styles.textInput} />
          </View>
        </View>
        <ImageBackground
          style={styles.boardImg}
          resizeMode="contain"
          source={boardImg}
        ></ImageBackground>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          >
            <Text style={styles.text}>{"Back"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("Game");
            }}
          >
            <Text style={styles.text}>{"Start"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boardImg: {
    flex: 6,
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
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  header: {
    height: 60,
  },
  nameContainer: {
    width: "35%",
  },
  playerNamesContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontFamily: "BungeeInline",
    fontSize: 14,
    textAlign: "center",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "green",
    borderLeftWidth: 15,
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  title: {
    fontFamily: "Aloja",
    fontSize: 35,
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default MainScreen;
