import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import { Center } from "@builderx/utils";
import Icon from "react-native-vector-icons/EvilIcons";

export default class HeaderSection extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Center vertical>
          <View style={styles.SearchHeader}>
            <Icon name="search" style={styles.SearchIcon} />
            <TextInput placeholder="Search" style={styles.SearchInput} />
          </View>
        </Center>
        <Center vertical>
          <Image
            source={require("../assets/images/bat.jpg")}
            resizeMode="contain"
            style={styles.UserAvatar}
          />
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  SearchHeader: {
    left: 45.89,
    height: 39.92,
    backgroundColor: "#1a1a1c",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    right: 4,
    opacity: 1,
    justifyContent: "flex-start",
    borderRadius: 10
  },
  SearchIcon: {
    color: "grey",
    fontSize: 20,
    marginLeft: 5,
    marginRight: 1
  },
  SearchInput: {
    width: 238.52,
    height: 39.92,
    color: "rgba(255,255,255,1)",
    marginRight: 1,
    marginLeft: 5,
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  UserAvatar: {
    left: 10.04,
    width: 29.82,
    height: 35.81,
    position: "absolute",
    borderRadius: 10
  }
});
