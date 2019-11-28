import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import { Center } from "@builderx/utils";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Divider from "../components/Divider";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PostComponent from "../components/PostComponent";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      fetching: true
    };
  }
  componentDidMount() {
    fetch("https://www.reddit.com/r/popular.json")
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
        <View style={styles.HeaderTabs}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={styles.button}
          >
            <Center>
              <Text style={styles.HomeText}>Home</Text>
            </Center>
          </TouchableOpacity>
          <View style={styles.PopularTab}>
            <Center>
              <Text style={styles.PopularText}>Popular</Text>
            </Center>
          </View>
        </View>
        <View style={styles.LayoutOptions}>
          <Center vertical>
            <MaterialIconsIcon name="view-agenda" style={styles.LayoutIcon} />
          </Center>
          <Center vertical>
            <Text style={styles.BestPosts}>HOT POSTS</Text>
          </Center>
          <Center vertical>
            <SimpleLineIconsIcon name="fire" style={styles.BestPostIcon} />
          </Center>
          <Center vertical>
            <IoniconsIcon
              name="md-arrow-dropdown"
              style={styles.DropdownIcon}
            />
          </Center>
        </View>
        <Divider style={styles.divider} />
        <MaterialCommunityIconsIcon
          name="trending-up"
          style={styles.TrendingIcon}
        />
        <Text style={styles.TrendingToday}>Trending today</Text>
        <View style={styles.TrendingSection}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.TrendingSection_contentContainerStyle}
          >
            <View style={styles.Cover1}>
              <Image
                source={require("../assets/images/gita.jpg")}
                resizeMode="cover"
                style={styles.image}
              />
              <ImageBackground
                style={styles.rect}
                source={require("../assets/images/Gradient_wLDqew1.png")}
              />
              <Text style={styles.text2}>Gita</Text>
            </View>
            <View style={styles.Cover2}>
              <Image
                source={require("../assets/images/lights.jpg")}
                resizeMode="cover"
                style={styles.image}
              />
              <ImageBackground
                style={styles.rect}
                source={require("../assets/images/Gradient_wLDqew1.png")}
              />
              <Center horizontal>
                <Text style={styles.text2}>Northern Lights</Text>
              </Center>
            </View>
            <View style={styles.rect2}>
              <Image
                source={require("../assets/images/lights.jpg")}
                resizeMode="cover"
                style={styles.image}
              />
              <ImageBackground
                style={styles.rect}
                source={require("../assets/images/Gradient_wLDqew1.png")}
              />
              <Center horizontal>
                <Text style={styles.text2}>Northern Lights</Text>
              </Center>
            </View>
          </ScrollView>
        </View>
        <View style={styles.scrollArea}>
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
        <HeaderSection style={styles.headerSection} />
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
  HeaderTabs: {
    top: 87.95,
    left: 0,
    height: 48.07,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    right: 0,
    justifyContent: "center"
  },
  button: {
    width: 124.38,
    alignSelf: "stretch"
  },
  HomeText: {
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  PopularTab: {
    width: 142.36,
    alignSelf: "stretch",
    borderColor: "#036bbd",
    borderWidth: 0,
    borderBottomWidth: 3
  },
  PopularText: {
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  LayoutOptions: {
    top: 137.02,
    left: 0,
    height: 47.17,
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
    top: 184.18,
    left: 0,
    height: 1,
    position: "absolute",
    right: 0
  },
  TrendingIcon: {
    top: 198.21,
    left: 13.49,
    position: "absolute",
    color: "#036bbd",
    fontSize: 20
  },
  TrendingToday: {
    top: 198.21,
    left: 53.49,
    color: "#036bbd",
    position: "absolute",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-500",
    letterSpacing: 1
  },
  TrendingSection: {
    top: 230.09,
    left: 0,
    width: 360,
    height: 143.03,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  TrendingSection_contentContainerStyle: {
    width: 1800,
    height: 143.03
  },
  Cover1: {
    width: 155.93,
    height: 127.65,
    marginLeft: 16,
    borderRadius: 10
  },
  image: {
    top: 0,
    left: 0,
    width: 155.93,
    height: 127.65,
    position: "absolute",
    borderRadius: 10
  },
  rect: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0,
    opacity: 0.14,
    borderRadius: 10
  },
  text2: {
    color: "rgba(255,255,255,1)",
    position: "absolute",
    bottom: 5.08,
    fontSize: 18,
    fontFamily: "ibm-plex-sans-500",
    letterSpacing: 1
  },
  Cover2: {
    width: 155.93,
    height: 127.65,
    marginLeft: 16,
    borderRadius: 10
  },
  rect2: {
    width: 155.93,
    height: 127.65,
    marginLeft: 16,
    borderRadius: 10
  },
  scrollArea: {
    top: 373.1,
    left: 0,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    right: 0,
    bottom: 60.77
  },
  scrollArea_contentContainerStyle: {},
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
  footer: {
    left: 0,
    height: 50.48,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  headerSection: {
    top: 21.65,
    left: 0,
    width: 360,
    height: 59.92,
    position: "absolute"
  }
});
