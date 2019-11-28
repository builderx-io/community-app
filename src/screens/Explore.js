import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import HeaderSection from "../components/HeaderSection";
import { Center } from "@builderx/utils";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ZocialIcon from "react-native-vector-icons/Zocial";
import Footer from "../components/Footer";

export default class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderSection style={styles.headerSection} />
        <View style={styles.ExploreTabs}>
          <View style={styles.rect2}>
            <Center>
              <Text style={styles.text}>Subscriptions</Text>
            </Center>
          </View>
          <View style={styles.rect3}>
            <Center horizontal>
              <Text style={styles.text2}>Custom Feed</Text>
            </Center>
          </View>
        </View>
        <Text style={styles.RecentlyVisited}>Recently visited subs</Text>
        <Center horizontal>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.rect6}>
                <View style={styles.rect5} />
                <Image
                  source={require("../assets/images/gita.jpg")}
                  resizeMode="cover"
                  style={styles.image}
                />
                <Center horizontal>
                  <Text style={styles.text7}>27.2k members</Text>
                </Center>
                <Text style={styles.text4}>r/Art</Text>
              </View>
              <View style={styles.rect7}>
                <View style={styles.rect5} />
                <Image
                  source={require("../assets/images/gita.jpg")}
                  resizeMode="cover"
                  style={styles.image}
                />
                <Center horizontal>
                  <Text style={styles.text7}>27.2k members</Text>
                </Center>
                <Center horizontal>
                  <Text style={styles.text4}>r/AMA</Text>
                </Center>
              </View>
              <View style={styles.rect8}>
                <View style={styles.rect5} />
                <Image
                  source={require("../assets/images/gita.jpg")}
                  resizeMode="cover"
                  style={styles.image}
                />
                <Center horizontal>
                  <Text style={styles.text7}>27.2k members</Text>
                </Center>
                <Text style={styles.text4}>r/Jokes</Text>
              </View>
            </ScrollView>
          </View>
        </Center>
        <View style={styles.CommunitiesWrapper}>
          <View style={styles.All}>
            <View style={styles.AllIcon}>
              <Center>
                <EntypoIcon name="bar-graph" style={styles.icon} />
              </Center>
            </View>
            <Text style={styles.AllText}>All</Text>
          </View>
          <Text style={styles.Communities}>COMMUNITIES</Text>
          <View style={styles.OtherCommunities}>
            <View style={styles.rect14}>
              <View style={styles.rect15}>
                <Center>
                  <MaterialCommunityIconsIcon
                    name="reddit"
                    style={styles.icon3}
                  />
                </Center>
              </View>
              <Text style={styles.text11}>r/announcements</Text>
            </View>
            <View style={styles.rect16}>
              <View style={styles.rect17}>
                <Center>
                  <MaterialCommunityIconsIcon
                    name="reddit"
                    style={styles.icon4}
                  />
                </Center>
              </View>
              <Text style={styles.text12}>r/AMA</Text>
            </View>
            <View style={styles.rect18}>
              <View style={styles.rect19}>
                <Center>
                  <MaterialCommunityIconsIcon
                    name="reddit"
                    style={styles.icon5}
                  />
                </Center>
              </View>
              <Text style={styles.text13}>r/Batman</Text>
            </View>
            <View style={styles.rect20}>
              <View style={styles.rect21}>
                <Center>
                  <MaterialCommunityIconsIcon
                    name="reddit"
                    style={styles.icon6}
                  />
                </Center>
              </View>
              <Text style={styles.text14}>r/Bandersnatch</Text>
            </View>
            <View style={styles.rect22}>
              <View style={styles.rect23}>
                <Center>
                  <ZocialIcon name="android" style={styles.icon7} />
                </Center>
              </View>
              <Text style={styles.text15}>r/Android</Text>
            </View>
          </View>
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
  headerSection: {
    top: 16.21,
    left: 0,
    height: 59.92,
    position: "absolute",
    right: 0
  },
  ExploreTabs: {
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
  rect2: {
    width: 158.38,
    alignSelf: "stretch",
    borderColor: "#026bbd",
    borderWidth: 0,
    borderBottomWidth: 3
  },
  text: {
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  rect3: {
    width: 163,
    alignSelf: "stretch"
  },
  text2: {
    top: "29.56%",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  RecentlyVisited: {
    top: 154.16,
    left: 22.23,
    color: "#808080",
    position: "absolute",
    fontSize: 16
  },
  scrollArea: {
    top: 187.98,
    width: 360,
    height: 143.03,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center"
  },
  scrollArea_contentContainerStyle: {},
  rect6: {
    width: 155.93,
    height: 127.65,
    marginLeft: 16
  },
  rect5: {
    top: 0.01,
    left: "0%",
    backgroundColor: "rgba(100,85,85,1)",
    position: "absolute",
    right: 0,
    bottom: -0.01,
    opacity: 0.14,
    borderRadius: 10
  },
  image: {
    top: 0,
    left: 0,
    width: 155.93,
    height: 63.83,
    position: "absolute",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  text7: {
    top: 90.71,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 10
  },
  text4: {
    top: 65.62,
    left: 58.2,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "ibm-plex-sans-500",
    letterSpacing: 1
  },
  rect7: {
    width: 155.93,
    height: 127.65,
    marginLeft: 16
  },
  rect8: {
    width: 155.93,
    height: 127.65,
    marginLeft: 16
  },
  CommunitiesWrapper: {
    top: 326.81,
    left: 22.23,
    width: "80.48%",
    height: "46.93%",
    position: "absolute",
    justifyContent: "space-around"
  },
  All: {
    width: 61.69,
    height: 26.54
  },
  AllIcon: {
    top: 0,
    left: 0,
    width: 25.9,
    height: 26.54,
    backgroundColor: "#ff4500",
    position: "absolute",
    borderRadius: 100
  },
  icon: {
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  AllText: {
    top: 3.27,
    left: 38.08,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "ibm-plex-sans-regular"
  },
  Communities: {
    color: "#7f8182",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-700"
  },
  OtherCommunities: {
    width: 217.77,
    height: 238.49,
    justifyContent: "space-around"
  },
  rect14: {
    height: 30,
    alignSelf: "stretch"
  },
  rect15: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    backgroundColor: "#ff4500",
    position: "absolute",
    borderRadius: 100
  },
  icon3: {
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  text11: {
    top: 7,
    left: 45.71,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-regular"
  },
  rect16: {
    height: 30,
    alignSelf: "stretch"
  },
  rect17: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    backgroundColor: "#ff4500",
    position: "absolute",
    borderRadius: 100
  },
  icon4: {
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  text12: {
    top: 7,
    left: 45.71,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-regular"
  },
  rect18: {
    height: 30,
    alignSelf: "stretch"
  },
  rect19: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    backgroundColor: "rgba(236,27,12,1)",
    position: "absolute",
    borderRadius: 100
  },
  icon5: {
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  text13: {
    top: 7,
    left: 45.71,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-regular"
  },
  rect20: {
    height: 30,
    alignSelf: "stretch"
  },
  rect21: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    backgroundColor: "rgba(74,144,226,1)",
    position: "absolute",
    borderRadius: 100
  },
  icon6: {
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  text14: {
    top: 7,
    left: 45.71,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-regular"
  },
  rect22: {
    height: 30,
    alignSelf: "stretch"
  },
  rect23: {
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    backgroundColor: "rgba(169,203,8,1)",
    position: "absolute",
    borderRadius: 100
  },
  icon7: {
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  text15: {
    top: 7,
    left: 45.71,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-regular"
  },
  footer: {
    left: 0,
    height: 49.68,
    position: "absolute",
    right: 0,
    bottom: 0
  }
});
