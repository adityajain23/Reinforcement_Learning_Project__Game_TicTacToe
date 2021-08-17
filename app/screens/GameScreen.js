import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class GameScreen extends Component {
  state = {
    player1_name: "",
    player2_name: "",
    currentBoard: "---------",
    currentPlayer: 0,
    colorList: ["#48cd49", "#107615", "#062b07"],
  };

  componentDidMount = () => {
    this.setState({
      player1_name: this.props.route.params.player1_name,
      player2_name: this.props.route.params.player2_name,
    });
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
            <View style={styles.board}>
              <View style={styles.row}>
                <TouchableOpacity
                  style={[
                    styles.cell,
                    { borderRightColor: "black", borderRightWidth: 2 },
                  ]}
                >
                  <Text style={styles.cellText}>
                    {this.state.currentBoard[0]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.cell,
                    { borderRightColor: "black", borderRightWidth: 2 },
                  ]}
                >
                  <Text style={styles.cellText}>
                    {this.state.currentBoard[1]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cell}>
                  <Text style={styles.cellText}>
                    {this.state.currentBoard[2]}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.line}></View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={[
                    styles.cell,
                    { borderRightColor: "black", borderRightWidth: 2 },
                  ]}
                >
                  <Text style={styles.cellText}>
                    {this.state.currentBoard[4]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.cell,
                    { borderRightColor: "black", borderRightWidth: 2 },
                  ]}
                >
                  <Text style={styles.cellText}>
                    {this.state.currentBoard[5]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cell}>
                  <Text style={styles.cellText}>
                    {this.state.currentBoard[6]}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.line}></View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={[
                    styles.cell,
                    { borderRightColor: "black", borderRightWidth: 2 },
                  ]}
                >
                  <Text style={styles.cellText}>
                    {this.state.currentBoard[6]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.cell,
                    { borderRightColor: "black", borderRightWidth: 2 },
                  ]}
                >
                  <Text style={styles.cellText}>
                    {this.state.currentBoard[7]}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cell}>
                  <Text style={styles.cellText}>
                    {this.state.currentBoard[8]}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Table  */}
          <View style={styles.tableView}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View
                  style={[
                    styles.tableCell,
                    {
                      borderRightColor: "black",
                      borderRightWidth: 2,
                    },
                  ]}
                >
                  <Text style={styles.tableCellText}>Tally</Text>
                </View>
                <View
                  style={[
                    styles.tableCell,
                    {
                      borderRightColor: "black",
                      borderRightWidth: 2,
                    },
                  ]}
                >
                  <Text style={styles.tableCellText}>Wins</Text>
                </View>
                <View
                  style={[
                    styles.tableCell,
                    {
                      borderRightColor: "black",
                      borderRightWidth: 2,
                    },
                  ]}
                >
                  <Text style={styles.tableCellText}>Losses</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.tableCellText}>Draws</Text>
                </View>
              </View>
              <View style={styles.line}></View>
              <View style={styles.tableRow}>
                <View
                  style={[
                    styles.tableCell,
                    {
                      borderRightColor: "black",
                      borderRightWidth: 2,
                    },
                  ]}
                >
                  <Text style={styles.tableCellText}>
                    {this.state.player1_name}
                  </Text>
                </View>
                <View
                  style={[
                    styles.tableCell,
                    {
                      borderRightColor: "black",
                      borderRightWidth: 2,
                    },
                  ]}
                >
                  <Text style={styles.tableCellText}></Text>
                </View>
                <View
                  style={[
                    styles.tableCell,
                    {
                      borderRightColor: "black",
                      borderRightWidth: 2,
                    },
                  ]}
                >
                  <Text style={styles.tableCellText}></Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.tableCellText}></Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View
                  style={[
                    styles.tableCell,
                    {
                      borderRightColor: "black",
                      borderRightWidth: 2,
                    },
                  ]}
                >
                  <Text style={styles.tableCellText}>
                    {this.state.player2_name}
                  </Text>
                </View>
                <View
                  style={[
                    styles.tableCell,
                    {
                      borderRightColor: "black",
                      borderRightWidth: 2,
                    },
                  ]}
                >
                  <Text style={styles.tableCellText}></Text>
                </View>
                <View
                  style={[
                    styles.tableCell,
                    {
                      borderRightColor: "black",
                      borderRightWidth: 2,
                    },
                  ]}
                >
                  <Text style={styles.tableCellText}></Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.tableCellText}></Text>
                </View>
              </View>
            </View>
          </View>

          {/* Buttons  */}
          <View style={styles.button1View}>
            <TouchableOpacity style={styles.button_1}>
              <Text style={styles.text_1}>{"New Game"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_1}>
              <Text style={styles.text_1}>{"Reset"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button2View}>
            <TouchableOpacity
              style={styles.button_2}
              onPress={() =>
                this.props.navigation.navigate("Winner", {
                  winnerName: this.state.player1_name,
                })
              }
            >
              <Text style={styles.text_2}>{"End Game"}</Text>
            </TouchableOpacity>
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
  button1View: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button2View: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  button_1: {
    width: 140,
    height: 40,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  text_1: {
    fontSize: 15,
    fontFamily: "Aloja",
    letterSpacing: 0.25,
    color: "black",
    padding: 8,
  },
  button_2: {
    width: 140,
    height: 40,
    borderRadius: 30,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  text_2: {
    fontSize: 15,
    fontFamily: "Aloja",
    letterSpacing: 0.25,
    color: "white",
    padding: 8,
  },
  board: {
    width: "60%",
    height: "60%",
    backgroundColor: "#e8874b",
    borderRadius: 20,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    fontFamily: "Aloja",
    fontSize: 10,
  },
  line: {
    borderColor: "black",
    borderWidth: 1,
  },
  table: {
    width: "90%",
    height: "80%",
    backgroundColor: "#c9e265",
    borderRadius: 20,
  },
  tableRow: {
    flex: 1,
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tableCellText: {
    fontFamily: "Aloja",
    fontSize: 10,
  },
});

export default GameScreen;
