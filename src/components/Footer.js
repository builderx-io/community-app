import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Center } from "@builderx/utils";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

export default class Footer extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
          style={styles.button3}
        >
          <Center vertical>
            <MaterialCommunityIconsIcon name="reddit" style={styles.icon3} />
          </Center>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Explore")}
          style={styles.button}
        >
          <Center>
            <IoniconsIcon name="md-apps" style={styles.icon4} />
          </Center>
        </TouchableOpacity>
        <View style={styles.group5}>
          <Center>
            <MaterialCommunityIconsIcon name="pencil" style={styles.icon5} />
          </Center>
        </View>
        <FontAwesomeIcon name="commenting" style={styles.icon6} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Notifications")}
          style={styles.button2}
        >
          <EntypoIcon name="mail" style={styles.icon7} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  button3: {
    width: 28,
    height: 28
  },
  icon3: {
    color: "grey",
    fontSize: 28,
    position: "absolute",
    left: 0
  },
  button: {
    width: 28,
    height: 28
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 28,
    position: "absolute"
  },
  group5: {
    width: 40,
    height: 40.43,
    alignSelf: "center",
    borderRadius: 100,
    borderColor: "rgba(2,107,189,1)",
    borderWidth: 3
  },
  icon5: {
    position: "absolute",
    color: "grey",
    fontSize: 28
  },
  icon6: {
    color: "grey",
    fontSize: 28
  },
  button2: {
    width: 28,
    height: 28
  },
  icon7: {
    color: "grey",
    fontSize: 28,
    position: "absolute",
    left: 0,
    top: 0
  }
});
