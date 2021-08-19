import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Board from "../../components/Board";
import GameScreenButtons from "../../components/GameScreenButtons";
import Table from "../../components/Table";

class GameScreen extends Component {
  state = {
    player1_name: "",
    player2_name: "",
    isMulti: false,
    player1_wins: 0,
    player1_losses: 0,
    player1_draws: 0,
    currentBoard: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    currentPlayer: 0,
    colorList: ["#48cd49", "#107615", "#062b07"],
  };

  componentDidMount = () => {
    this.setState({
      player1_name: this.props.route.params.player1_name,
      player2_name: this.props.route.params.player2_name,
      isMulti: this.props.route.params.isMulti,
    });
  };

  newGame = () => {
    console.log(this.state.isMulti ? "hello" : "bye");
    // Logic to check which player wins
    this.state.player1_wins++;
    this.setState({
      currentBoard: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    });
  };

  reset = () => {
    this.setState({
      player1_wins: 0,
      player1_losses: 0,
      player1_draws: 0,
      currentBoard: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
      currentPlayer: 0,
      colorList: ["#48cd49", "#107615", "#062b07"],
    });
  };

  playerPlayed = (key) => {
    if (this.state.currentBoard[key] == "-") {
      this.state.currentBoard[key] = this.state.currentPlayer ? "O" : "X";
      this.changePlayer();
      this.setState({
        currentBoard: this.state.currentBoard,
      });
    }
  };

  changePlayer = () => {
    this.setState({
      currentPlayer: this.state.currentPlayer ? 0 : 1,
    });
    this.state.colorList.reverse();
  };

  render() {
    return (
      <View style={styles.screen}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={this.state.colorList}
          style={styles.headerGrad}
        >
          {/* Title  */}
          <View style={styles.nameView}>
            <Text style={styles.nameText}>{this.state.player1_name}</Text>
            <Text style={styles.nameText}>{this.state.player2_name}</Text>
          </View>

          {/* Symbols */}
          <View style={styles.symbolView}>
            <Text style={styles.nameText}>X</Text>
            <Text style={styles.nameText}>O</Text>
          </View>

          {/* Board  */}
          <View style={styles.boardView}>
            <Board
              currentBoard={this.state.currentBoard}
              playerPlayed={this.playerPlayed}
            />
          </View>

          {/* Table  */}
          <View style={styles.tableView}>
            <Table
              player1_name={this.state.player1_name}
              player2_name={this.state.player2_name}
              player1_wins={this.state.player1_wins}
              player1_losses={this.state.player1_losses}
              player1_draws={this.state.player1_draws}
            />
          </View>

          {/* Buttons  */}
          <View style={styles.buttonsView}>
            <GameScreenButtons
              player1_name={this.state.player1_name}
              player2_name={this.state.player2_name}
              player1_wins={this.state.player1_wins}
              player1_losses={this.state.player1_losses}
              newGame={this.newGame}
              reset={this.reset}
              navigation={this.props.navigation}
            />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  headerGrad: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nameView: {
    paddingTop: 20,
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  symbolView: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  nameText: {
    fontFamily: "Aloja",
    fontSize: 30,
    color: "white",
  },
  boardView: {
    flex: 7,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tableView: {
    flex: 3,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  buttonsView: {
    flex: 3,
  },
});

export default GameScreen;
