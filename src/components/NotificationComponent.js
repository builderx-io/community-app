import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class NotificationComponent extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <MaterialCommunityIconsIcon name="comment" style={styles.comment} />
        <View style={styles.NotificationData}>
          <Text style={styles.NotificationHeading}>
            {this.props.NotificationHeading ||
              "u/ABC replied to your post in r/pics."}
          </Text>
          <Text style={styles.notificationContent}>
            {this.props.notificationContent || "You should check it out."}
          </Text>
          <Text style={styles.Time}>
            {this.props.Time || "Post reply • 1h"}
          </Text>
        </View>
        <MaterialCommunityIconsIcon
          name="dots-vertical"
          style={styles.MoreIcon}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,1)"
  },
  comment: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    alignSelf: "flex-start",
    height: 20,
    width: 20,
    position: "absolute",
    top: 16,
    left: 20.01
  },
  NotificationData: {
    top: 13.77,
    left: "15.01%",
    width: 266.92,
    height: 77.38,
    position: "absolute",
    alignSelf: "center"
  },
  NotificationHeading: {
    top: 0,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-regular"
  },
  notificationContent: {
    top: 38.19,
    left: 0,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  Time: {
    top: 58.39,
    left: 0,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  MoreIcon: {
    color: "grey",
    fontSize: 20,
    alignSelf: "flex-start",
    height: 20,
    width: 20,
    position: "absolute",
    top: 16,
    right: 8.01
  }
});
