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
  state = {
    player1_name: "",
    player2_name: "",
  };

  componentDidMount = () => {
    if (!this.props.route.params.isMulti) {
      this.setPlayer2Name("Bot");
    }
  };

  setPlayer1Name = (name) => {
    this.setState({ player1_name: name });
  };

  setPlayer2Name = (name) => {
    this.setState({ player2_name: name });
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Header />
        </View>
        <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.playerNamesContainer}>
          {this.props.route.params.isMulti ? (
            <View style={styles.playerNamesContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.text}>Player 1</Text>
                <TextInput
                  placeholder="name"
                  defaultValue="Player 1"
                  style={styles.textInput}
                  value={this.state.player1_name}
                  onChangeText={this.setPlayer1Name}
                />
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.text}>Player 2</Text>
                <TextInput
                  placeholder="name"
                  defaultValue="Player 2"
                  style={styles.textInput}
                  value={this.state.player2_name}
                  onChangeText={this.setPlayer2Name}
                />
              </View>
            </View>
          ) : (
            <View style={styles.playerNamesContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.text}>Player</Text>
                <TextInput
                  placeholder="name"
                  defaultValue="Player"
                  style={styles.textInput}
                  value={this.state.player1_name}
                  onChangeText={this.setPlayer1Name}
                />
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.text}>Computer</Text>
                <TextInput
                  placeholder="Bot"
                  style={styles.textInput}
                  value={this.state.player2_name}
                  defaultValue="Bot"
                  onChangeText={this.setPlayer2Name}
                />
              </View>
            </View>
          )}
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
              this.props.navigation.navigate("Game", {
                player1_name: this.state.player1_name,
                player2_name: this.state.player2_name,
              });
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
    fontFamily: "Aloja",
    fontSize: 14,
    textAlign: "center",
  },
  textInput: {
    fontFamily: "Aloja",
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
