import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class GameScreenButtons extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Container for "New Game" and "Reset" Button */}
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{"New Game"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{"Reset"}</Text>
          </TouchableOpacity>
        </View>

        {/* Container for "End Game" Button */}
        <View
          style={[
            styles.buttonView,
            { marginBottom: 30, justifyContent: "center" },
          ]}
        >
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "black" }]}
            onPress={() =>
              this.props.navigation.navigate("Winner", {
                winnerName: this.props.player1_name,
              })
            }
          >
            <Text style={[styles.text, { color: "white" }]}>{"End Game"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: 140,
    height: 40,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: "Aloja",
    letterSpacing: 0.25,
    color: "black",
    padding: 8,
  },
});

export default GameScreenButtons;
