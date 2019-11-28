import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput
} from "react-native";
import { Center } from "@builderx/utils";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Divider from "../components/Divider";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";

export default class Post extends Component {
  render() {
    const postData = this.props.navigation.state.params.postData;
    return (
      <View style={styles.container}>
        <View style={styles.HeaderSection}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.button3}
          >
            <Center>
              <MaterialCommunityIconsIcon name="close" style={styles.icon} />
            </Center>
          </TouchableOpacity>
          <MaterialCommunityIconsIcon name="bookmark" style={styles.icon2} />
          <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={styles.icon3}
          />
          <Divider style={styles.divider} />
        </View>
        <View style={styles.PostDetails}>
          <Image
            source={require("../assets/images/bat.jpg")}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.text}>{postData.Subreddit || "r/Jokes"}</Text>
          <Text style={styles.text2}>
            {postData.PostDetails || "Posted by u/explosivelyddehi • 10h"}
          </Text>
        </View>
        <Text style={styles.text3}>
          {postData.ContentText ||
            "They all laughed when I told them that one day I would discover the secrets of invisibility"}
        </Text>
        <Text style={styles.text4}>If only they could see me now</Text>
        <Center horizontal>
          <View style={styles.ActionBar}>
            <View style={styles.PostVote}>
              <EntypoIcon name="arrow-up" style={styles.icon4} />
              <Text style={styles.text5}>
                {postData.UpvotesText || "16.5k"}
              </Text>
              <EntypoIcon name="arrow-down" style={styles.icon5} />
            </View>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIconsIcon name="comment" style={styles.icon6} />
              <Text style={styles.text6}>{postData.UpvotesText || "346"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <FontAwesomeIcon name="share" style={styles.icon7} />
              <Text style={styles.text7}>Share</Text>
            </TouchableOpacity>
          </View>
        </Center>
        <View style={styles.CommentSelection}>
          <IoniconsIcon name="md-arrow-dropdown" style={styles.icon8} />
          <Text style={styles.text8}>BEST COMMENTS</Text>
          <MaterialCommunityIconsIcon name="rocket" style={styles.icon9} />
        </View>
        <View style={styles.CommentsWrapper}>
          <View style={styles.Comment1}>
            <Text style={styles.text9}>Mindbender • 9h</Text>
            <Text style={styles.text10}>
              You didn&#39;t have me in the first half, not gonna lie.
            </Text>
            <View style={styles.group}>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={styles.CommentOptions}
              />
              <View style={styles.ReplyAction}>
                <Center vertical>
                  <MaterialCommunityIconsIcon
                    name="reply"
                    style={styles.icon12}
                  />
                </Center>
                <Center vertical>
                  <Text style={styles.text16}>Reply</Text>
                </Center>
              </View>
              <View style={styles.CommentVote}>
                <EntypoIcon name="arrow-up" style={styles.icon10} />
                <Text style={styles.text15}>16</Text>
                <EntypoIcon name="arrow-down" style={styles.icon11} />
              </View>
            </View>
          </View>
          <View style={styles.Comment11}>
            <Text style={styles.text11}>I can&#39;t see either half</Text>
            <Text style={styles.text12}>Mindbender • 9h</Text>
            <View style={styles.rect3}>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={styles.icon13}
              />
              <View style={styles.rect4}>
                <Center vertical>
                  <MaterialCommunityIconsIcon
                    name="reply"
                    style={styles.icon14}
                  />
                </Center>
                <Center vertical>
                  <Text style={styles.text17}>Reply</Text>
                </Center>
              </View>
              <View style={styles.rect5}>
                <EntypoIcon name="arrow-up" style={styles.icon15} />
                <Text style={styles.text18}>16</Text>
                <EntypoIcon name="arrow-down" style={styles.icon16} />
              </View>
            </View>
          </View>
          <View style={styles.Comment111}>
            <Text style={styles.text13}>Mindbender • 9h</Text>
            <Text style={styles.text14}>I can&#39;t see either half</Text>
            <View style={styles.rect6}>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={styles.icon17}
              />
              <View style={styles.rect7}>
                <Center vertical>
                  <MaterialCommunityIconsIcon
                    name="reply"
                    style={styles.icon18}
                  />
                </Center>
                <Center vertical>
                  <Text style={styles.text19}>Reply</Text>
                </Center>
              </View>
              <View style={styles.rect8}>
                <EntypoIcon name="arrow-up" style={styles.icon19} />
                <Text style={styles.text20}>16</Text>
                <EntypoIcon name="arrow-down" style={styles.icon20} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.AddCommentSection}>
          <View style={styles.group2}>
            <Center vertical>
              <TextInput placeholder="Add a comment" style={styles.textInput} />
            </Center>
          </View>
          <View style={styles.group3}>
            <Center>
              <View style={styles.group4}>
                <SimpleLineIconsIcon name="arrow-down" style={styles.icon21} />
                <SimpleLineIconsIcon name="arrow-down" style={styles.icon22} />
              </View>
            </Center>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  HeaderSection: {
    top: 22,
    left: 0,
    height: 60.29,
    position: "absolute",
    right: 0
  },
  button3: {
    top: 13.14,
    left: 17.04,
    width: 30,
    height: 30,
    position: "absolute"
  },
  icon: {
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 24
  },
  icon2: {
    left: 275.09,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    top: "25.12%"
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    left: 318.63,
    position: "absolute",
    top: "25.12%"
  },
  divider: {
    left: 0,
    height: 1,
    position: "absolute",
    right: 0,
    bottom: "0%"
  },
  PostDetails: {
    top: 102.46,
    left: 19.39,
    height: 47.91,
    position: "absolute",
    right: 41.77
  },
  image: {
    top: "12.73%",
    left: 0,
    width: 34.92,
    height: 35.81,
    position: "absolute",
    borderRadius: 10
  },
  text: {
    top: 0,
    left: 47.18,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "ibm-plex-sans-regular"
  },
  text2: {
    top: 30.91,
    left: 47.18,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  text3: {
    top: 178.41,
    left: 19.19,
    height: 54,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 19.22,
    fontSize: 18,
    fontFamily: "ibm-plex-sans-regular"
  },
  text4: {
    top: 243.71,
    left: 18.6,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-regular"
  },
  ActionBar: {
    top: 290.67,
    width: 321.59,
    height: 17.74,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  PostVote: {
    width: 71.38,
    height: 16.54,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  icon4: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  text5: {
    color: "#828384",
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  icon5: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  button: {
    width: 43.26,
    height: 14.46,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon6: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  text6: {
    color: "#828384",
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  button2: {
    width: 57.22,
    height: 15.16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon7: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  text7: {
    color: "#828384",
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  CommentSelection: {
    top: 339.98,
    left: 17.04,
    width: 154.43,
    height: 20,
    position: "absolute"
  },
  icon8: {
    left: 144.43,
    position: "absolute",
    color: "grey",
    fontSize: 20,
    top: "0.02%"
  },
  text8: {
    top: "20.18%",
    left: 26.02,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1
  },
  icon9: {
    left: 0,
    position: "absolute",
    color: "grey",
    fontSize: 20,
    top: "0.02%"
  },
  CommentsWrapper: {
    top: 386.34,
    left: 19.39,
    height: "43.46%",
    position: "absolute",
    right: 12.71,
    justifyContent: "space-around"
  },
  Comment1: {
    width: 303.55,
    height: 63.66
  },
  text9: {
    top: 0,
    left: 0,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular"
  },
  text10: {
    top: 22.23,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  group: {
    top: "78.01%",
    left: 75.09,
    width: 228.46,
    height: 18,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  CommentOptions: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    alignSelf: "center",
    height: 16
  },
  ReplyAction: {
    width: 54.61,
    height: 16,
    alignSelf: "center"
  },
  icon12: {
    left: 0,
    position: "absolute",
    color: "grey",
    fontSize: 12
  },
  text16: {
    left: 24.42,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular"
  },
  CommentVote: {
    width: 61.56,
    height: 15.62,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around"
  },
  icon10: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  text15: {
    color: "#828384",
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  icon11: {
    color: "#828384",
    fontSize: 12,
    alignSelf: "center"
  },
  Comment11: {
    width: 284.23,
    height: 66.78,
    marginLeft: 30
  },
  text11: {
    top: 25.52,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  text12: {
    top: 0,
    left: 0,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular"
  },
  rect3: {
    top: 52.78,
    left: 55.77,
    width: 228.46,
    height: 19,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon13: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    alignSelf: "center",
    height: 16
  },
  rect4: {
    width: 54.61,
    height: 16,
    alignSelf: "center"
  },
  icon14: {
    left: 0,
    position: "absolute",
    color: "grey",
    fontSize: 12
  },
  text17: {
    left: 24.42,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular"
  },
  rect5: {
    width: 61.56,
    height: 15.62,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around"
  },
  icon15: {
    color: "#828384",
    fontSize: 12
  },
  text18: {
    color: "#828384",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  icon16: {
    color: "#828384",
    fontSize: 12
  },
  Comment111: {
    width: 254.74,
    height: 65.7,
    marginLeft: 60
  },
  text13: {
    top: 0,
    left: 0,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular"
  },
  text14: {
    top: 24.45,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  rect6: {
    top: 51.7,
    left: 26.28,
    width: 228.46,
    height: 18,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon17: {
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    alignSelf: "center",
    height: 16
  },
  rect7: {
    width: 54.61,
    height: 16,
    alignSelf: "center"
  },
  icon18: {
    left: 0,
    position: "absolute",
    color: "grey",
    fontSize: 12
  },
  text19: {
    left: 24.42,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular"
  },
  rect8: {
    width: 61.56,
    height: 15.62,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around"
  },
  icon19: {
    color: "#828384",
    fontSize: 12
  },
  text20: {
    color: "#828384",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-regular",
    letterSpacing: 1
  },
  icon20: {
    color: "#828384",
    fontSize: 12
  },
  AddCommentSection: {
    left: 20.08,
    height: 40,
    position: "absolute",
    right: 12.72,
    bottom: 16.66
  },
  group2: {
    top: 0,
    left: 0,
    width: "84.05%",
    backgroundColor: "#1a1a1c",
    position: "absolute",
    bottom: 0,
    borderRadius: 6
  },
  textInput: {
    left: 10.23,
    width: 264.78,
    height: 32.14,
    backgroundColor: "#1a1a1c",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 6,
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  group3: {
    top: "-0.01%",
    width: 40,
    height: 40,
    backgroundColor: "#1a1a1c",
    position: "absolute",
    right: -0.02,
    borderRadius: 100
  },
  group4: {
    width: 20,
    height: 28,
    position: "absolute"
  },
  icon21: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  icon22: {
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    top: "28.57%"
  }
});
