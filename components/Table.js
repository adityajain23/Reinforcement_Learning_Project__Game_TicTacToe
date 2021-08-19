import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Table extends Component {
  render() {
    return (
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
            <Text style={styles.tableCellText}>{this.props.player1_name}</Text>
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
            <Text style={styles.tableCellText}>{this.props.player1_wins}</Text>
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
            <Text style={styles.tableCellText}>
              {this.props.player1_losses}
            </Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableCellText}>{this.props.player1_draws}</Text>
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
            <Text style={styles.tableCellText}>{this.props.player2_name}</Text>
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
            <Text style={styles.tableCellText}>
              {this.props.player1_losses}
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
            <Text style={styles.tableCellText}>{this.props.player1_wins}</Text>
          </View>
          <View style={styles.tableCell}>
            <Text style={styles.tableCellText}>{this.props.player1_draws}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
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

export default Table;
