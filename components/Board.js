import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Board extends Component {
  render() {
    return (
      <View style={styles.board}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.cell,
              { borderRightColor: "black", borderRightWidth: 2 },
            ]}
            onPress={this.props.playerPlayed.bind(this, 0)}
          >
            <Text style={styles.cellText}>{this.props.currentBoard[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.cell,
              { borderRightColor: "black", borderRightWidth: 2 },
            ]}
            onPress={this.props.playerPlayed.bind(this, 1)}
          >
            <Text style={styles.cellText}>{this.props.currentBoard[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cell}
            onPress={this.props.playerPlayed.bind(this, 2)}
          >
            <Text style={styles.cellText}>{this.props.currentBoard[2]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.cell,
              { borderRightColor: "black", borderRightWidth: 2 },
            ]}
            onPress={this.props.playerPlayed.bind(this, 3)}
          >
            <Text style={styles.cellText}>{this.props.currentBoard[3]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.cell,
              { borderRightColor: "black", borderRightWidth: 2 },
            ]}
            onPress={this.props.playerPlayed.bind(this, 4)}
          >
            <Text style={styles.cellText}>{this.props.currentBoard[4]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cell}
            onPress={this.props.playerPlayed.bind(this, 5)}
          >
            <Text style={styles.cellText}>{this.props.currentBoard[5]}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.cell,
              { borderRightColor: "black", borderRightWidth: 2 },
            ]}
            onPress={this.props.playerPlayed.bind(this, 6)}
          >
            <Text style={styles.cellText}>{this.props.currentBoard[6]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.cell,
              { borderRightColor: "black", borderRightWidth: 2 },
            ]}
            onPress={this.props.playerPlayed.bind(this, 7)}
          >
            <Text style={styles.cellText}>{this.props.currentBoard[7]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cell}
            onPress={this.props.playerPlayed.bind(this, 8)}
          >
            <Text style={styles.cellText}>{this.props.currentBoard[8]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    fontSize: 16,
  },
  line: {
    borderColor: "black",
    borderWidth: 1,
  },
});

export default Board;
