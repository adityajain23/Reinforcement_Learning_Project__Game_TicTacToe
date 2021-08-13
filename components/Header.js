import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.header}>
        <LinearGradient
          // start={{ x: 0, y: 0 }}
          // end={{ x: 1, y: 0 }}
          colors={["rgba(0,0,0,1)", "rgba(17,121,9,1)", "#44a049"]}
        >
          <View style={styles.headerContainer}>
            <Image
              style={styles.logo}
              source={require("../app/assets/logo.png")}
            />
            <Text style={styles.link}>About</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  link: {
    fontSize: 14,
    fontFamily: "Aloja",
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default Header;
