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

  // This function when called manually resets the board and
  // if called from the playerPlayed function then it updates the table (wins, losses, or draws).
  newGame = () => {
    this.setState({
      currentBoard: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    });
  };

  // Resets all the states.
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

  // updates board if button (0-8) is clicked.
  playerPlayed = async (key) => {
    if (this.state.currentBoard[key] == "-") {
      // TODO: Check later if symbol same
      this.state.currentBoard[key] = this.state.currentPlayer ? "O" : "X";

      await this.setState({
        currentBoard: this.state.currentBoard,
      });

      let winner = this.checkWin(key);

      if (winner === 1) {
        // TODO: End game with winner
        await new Promise((r) => setTimeout(r, 500));

        alert(
          this.state.currentPlayer
            ? this.state.player2_name + " Wins"
            : this.state.player1_name + " Wins"
        );

        let winner_player1 = !this.state.currentPlayer;

        await this.setState({
          player1_wins: this.state.player1_wins + winner_player1,
          player1_losses: this.state.player1_losses + !winner_player1,
          currentBoard: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
        });
      } else if (winner === -1) {
        await new Promise((r) => setTimeout(r, 500));

        alert("Draw");

        await this.setState({
          player1_draws: this.state.player1_draws + 1,
          currentBoard: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
        });
      }

      await this.changePlayer();

      if (this.state.currentPlayer === 1 && !this.state.isMulti) {
        this.playBot();
      }
    } else {
      alert("Please select valid box");
    }
  };

  playBot = async () => {
    let avaPos = [];

    for (let index = 0; index < this.state.currentBoard.length; index++) {
      if (this.state.currentBoard[index] === "-") {
        avaPos.push(index);
      }
    }

    await new Promise((r) => setTimeout(r, 200));

    if (avaPos.length !== 0) {
      let key = avaPos[Math.floor(Math.random() * avaPos.length)];
      this.playerPlayed(key);
    }
  };

  checkWin = (action) => {
    const matrix = [
      [
        [1, 2],
        [3, 6],
        [4, 8],
      ],
      [
        [0, 2],
        [4, 7],
      ],
      [
        [0, 1],
        [5, 8],
        [4, 6],
      ],
      [
        [0, 6],
        [4, 5],
      ],
      [
        [3, 5],
        [1, 7],
        [0, 8],
        [2, 6],
      ],
      [
        [3, 4],
        [2, 8],
      ],
      [
        [0, 3],
        [7, 8],
        [2, 4],
      ],
      [
        [6, 8],
        [1, 4],
      ],
      [
        [6, 7],
        [2, 5],
        [0, 4],
      ],
    ];

    let checkConditons = matrix[action];

    for (let i = 0; i < checkConditons.length; i++) {
      let first = checkConditons[i][0];
      let second = checkConditons[i][1];

      if (
        this.state.currentBoard[first] === this.state.currentBoard[action] &&
        this.state.currentBoard[second] === this.state.currentBoard[action]
      ) {
        return 1;
      }
    }

    for (let i = 0; i < this.state.currentBoard.length; i++) {
      if (this.state.currentBoard[i] === "-") {
        return 0;
      }
    }
    return -1;
  };

  // change Curr Player after he has played.
  changePlayer = () => {
    this.setState({
      currentPlayer: this.state.currentPlayer ? 0 : 1,
      colorList: this.state.colorList.reverse(),
    });
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
          {/* Todo: Give random initial symbol and random current player  */}
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
