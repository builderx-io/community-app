import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default class PostComponent extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity
          style={styles.PostWrapper}
          onPress={() =>
            this.props.navigation.navigate("Post", { postData: this.props })
          }
        >
          <View style={styles.PostHeader}>
            <Image
              source={require("../assets/images/lights.jpg")}
              resizeMode="cover"
              style={styles.image}
            />
            <View style={styles.HeaderGroup}>
              <Text style={styles.Subreddit}>
                {this.props.Subreddit || "r/Jokes"}
              </Text>
              <Text style={styles.PostDetails}>
                {this.props.text5 || "Posted by u/ChromeNewfie • 14h"}
              </Text>
            </View>
            <MaterialCommunityIconsIcon
              name="dots-vertical"
              style={styles.MoreIcon}
            />
          </View>
          <Text style={styles.ContentText}>
            {this.props.ContentText ||
              "What noise does a subatomic duck make?\n\nQuark"}
          </Text>
          <View style={styles.ActionBar}>
            <View style={styles.VoteWrapper}>
              <EntypoIcon name="arrow-up" style={styles.UpvoteIcon} />
              <Text style={styles.UpvotesText}>
                {this.props.UpvotesText || "16.5k"}
              </Text>
              <EntypoIcon name="arrow-down" style={styles.DownvoteIcon} />
            </View>
            <TouchableOpacity style={styles.CommentWrapper}>
              <MaterialCommunityIconsIcon
                name="comment"
                style={styles.CommentIcon}
              />
              <Text style={styles.CommentText}>
                {this.props.CommentText || "346"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ShareWrapper}>
              <FontAwesomeIcon name="share" style={styles.ShareIcon} />
              <Text style={styles.ShareText}>Share</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,1)",
    alignItems: "center",
    justifyContent: "space-around"
  },
  PostWrapper: {
    height: 108.21,
    alignItems: "flex-start",
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
  PostHeader: {
    width: 319.63,
    height: 30,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 0
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 100
  },
  HeaderGroup: {
    width: 247.98,
    height: 27
  },
  Subreddit: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  PostDetails: {
    color: "#808080",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1,
    marginTop: 1
  },
  MoreIcon: {
    color: "grey",
    fontSize: 18
  },
  ContentText: {
    width: 320.33,
    height: 36,
    color: "rgba(255,255,255,1)",
    alignSelf: "center",
    marginRight: 0,
    marginLeft: 0,
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  ActionBar: {
    width: 320.02,
    height: 15.69,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 0
  },
  VoteWrapper: {
    width: 62.37,
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    marginRight: 0,
    marginLeft: 0
  },
  UpvoteIcon: {
    color: "#828384",
    fontSize: 10
  },
  UpvotesText: {
    color: "#828384",
    fontSize: 10,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  DownvoteIcon: {
    color: "#828384",
    fontSize: 10
  },
  CommentWrapper: {
    width: 38.41,
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 0
  },
  CommentIcon: {
    color: "#828384",
    fontSize: 10
  },
  CommentText: {
    color: "#828384",
    fontSize: 10,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  ShareWrapper: {
    width: 48.9,
    height: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    marginRight: 0,
    marginLeft: 0
  },
  ShareIcon: {
    color: "#828384",
    fontSize: 10
  },
  ShareText: {
    color: "#828384",
    fontSize: 10,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  }
});
