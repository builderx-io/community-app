import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";
import HeaderSection from "../components/HeaderSection";
import { Center } from "@builderx/utils";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Divider from "../components/Divider";
import PostComponent from "../components/PostComponent";
import Footer from "../components/Footer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      fetching: true
    };
  }
  componentDidMount() {
    fetch("https://www.reddit.com/r/random.json")
      .then(response => response.json())
      .then(response => {
        this.setState({ postList: response.data.children, fetching: false });
      })
      .catch(err => {
        this.setState({ fetching: false });
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={true}
          style={styles.statusBar}
        />
        <HeaderSection style={styles.headerSection} />
        <View style={styles.HeaderTabs}>
          <View style={styles.HomeTab}>
            <Center>
              <Text style={styles.HomeText}>Home</Text>
            </Center>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Popular")}
            style={styles.button}
          >
            <Center>
              <Text style={styles.PopularText}>Popular</Text>
            </Center>
          </TouchableOpacity>
        </View>
        <View style={styles.LayoutOptions}>
          <Center vertical>
            <MaterialIconsIcon name="view-agenda" style={styles.LayoutIcon} />
          </Center>
          <Center vertical>
            <Text style={styles.BestPosts}>BEST POSTS</Text>
          </Center>
          <Center vertical>
            <MaterialCommunityIconsIcon
              name="rocket"
              style={styles.BestPostIcon}
            />
          </Center>
          <Center vertical>
            <IoniconsIcon
              name="md-arrow-dropdown"
              style={styles.DropdownIcon}
            />
          </Center>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.PostSection}>
          {this.state.fetching ? (
            <Center horizontal>
              <ActivityIndicator
                color="#ff4500"
                size="large"
                style={styles.activityIndicator}
              />
            </Center>
          ) : (
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.PostSection_contentContainerStyle}
            >
              {this.state.postList.map(post => (
                <PostComponent
                  key={post.data.name}
                  ContentText={post.data.title}
                  Subreddit={post.data.subreddit_name_prefixed}
                  UpvotesText={post.data.score}
                  CommentText={post.data.num_comments}
                  PostDetails={post.data.author}
                  style={styles.postComponent2}
                  navigation={this.props.navigation}
                />
              ))}
            </ScrollView>
          )}
        </View>
        <Footer style={styles.footer} navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  statusBar: {},
  headerSection: {
    top: 21.65,
    left: 0,
    width: 360,
    height: 59.92,
    position: "absolute"
  },
  HeaderTabs: {
    top: 87.95,
    left: 0,
    height: 47.72,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    right: 0,
    justifyContent: "center"
  },
  HomeTab: {
    width: 124.38,
    height: 48,
    borderColor: "#026bbd",
    borderWidth: 0,
    borderBottomWidth: 3
  },
  HomeText: {
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  button: {
    width: 142.36,
    alignSelf: "stretch"
  },
  PopularText: {
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  LayoutOptions: {
    top: 136.67,
    left: 0,
    height: 47.52,
    position: "absolute",
    right: 0
  },
  LayoutIcon: {
    left: 308.15,
    position: "absolute",
    color: "grey",
    fontSize: 20
  },
  BestPosts: {
    left: 39.91,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-700",
    letterSpacing: 1
  },
  BestPostIcon: {
    left: 15,
    position: "absolute",
    color: "grey",
    fontSize: 20
  },
  DropdownIcon: {
    left: 152.54,
    position: "absolute",
    color: "grey",
    fontSize: 20
  },
  activityIndicator: {
    marginTop: 200
  },
  divider: {
    top: 184.19,
    left: 0,
    width: 360,
    height: 1,
    position: "absolute"
  },
  PostSection: {
    top: 185.22,
    left: 0,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    right: 0,
    bottom: 49.53,
    justifyContent: "flex-start"
  },
  PostSection_contentContainerStyle: {},
  postComponent: {
    height: 120,
    alignSelf: "stretch"
  },
  postComponent2: {
    height: 120,
    alignSelf: "stretch"
  },
  postComponent3: {
    height: 120,
    alignSelf: "stretch"
  },
  postComponent4: {
    height: 120,
    alignSelf: "stretch"
  },
  postComponent5: {
    height: 120,
    alignSelf: "stretch"
  },
  footer: {
    left: 0,
    height: 49.55,
    position: "absolute",
    right: 0,
    bottom: 0
  }
});
