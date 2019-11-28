import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class Divider extends Component {
  render() {
    return <View style={[styles.container, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#808080"
  }
});
