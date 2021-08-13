import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

class GameScreen extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Button
          title="Game Ends"
          onPress={() => {
            this.props.navigation.navigate("Winner");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameScreen;
