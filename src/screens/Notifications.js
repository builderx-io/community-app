import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Center } from "@builderx/utils";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Divider from "../components/Divider";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import NotificationComponent from "../components/NotificationComponent";
import Footer from "../components/Footer";

export default class Notifications extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.TabSection}>
          <View style={styles.NotifsTab}>
            <Center>
              <Text style={styles.text}>Notifications</Text>
            </Center>
          </View>
          <View style={styles.MessagesTab}>
            <Center>
              <Text style={styles.text2}>Messages</Text>
            </Center>
          </View>
          <View style={styles.ModMailTab}>
            <Center vertical>
              <Text style={styles.text3}>Mod mail</Text>
            </Center>
          </View>
        </View>
        <View style={styles.Header}>
          <Center vertical>
            <Image
              source={require("../assets/images/bat.jpg")}
              resizeMode="contain"
              style={styles.image}
            />
          </Center>
          <Center vertical>
            <Text style={styles.text4}>Inbox</Text>
          </Center>
          <Center vertical>
            <MaterialCommunityIconsIcon
              name="dots-vertical"
              style={styles.icon}
            />
          </Center>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.AllActivity}>
          <Center vertical>
            <MaterialCommunityIconsIcon name="flash" style={styles.icon2} />
          </Center>
          <Text style={styles.text5}>ALL ACTIVITY</Text>
          <Center vertical>
            <IoniconsIcon name="md-arrow-dropdown" style={styles.icon3} />
          </Center>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.TrendingNotif}>
              <MaterialCommunityIconsIcon
                name="trending-up"
                style={styles.icon4}
              />
              <View style={styles.Content}>
                <Text style={styles.text6}>Trending on r/FlutterDev</Text>
                <Text style={styles.text7}>Flutter web image picker</Text>
                <Text style={styles.text8}>Trending • 1h</Text>
              </View>
            </View>
            <Divider style={styles.divider2} />
            <NotificationComponent style={styles.notificationComponent} />
            <Divider style={styles.divider3} />
            <NotificationComponent
              Time={"Comment reply • 2mo"}
              NotificationHeading={
                "u/bcd replied to your comment in r/bangalore"
              }
              notificationContent={"Right. "}
              style={styles.notificationComponent2}
            />
            <Divider style={styles.divider4} />
            <NotificationComponent
              NotificationHeading={
                "u/moderator replied to you comment in r/AMA"
              }
              notificationContent={"Please read this message"}
              style={styles.notificationComponent3}
            />
            <Divider style={styles.divider5} />
            <NotificationComponent
              NotificationHeading={
                "u/moderator replied to you comment in r/AMA"
              }
              notificationContent={"Please read this message"}
              style={styles.notificationComponent4}
            />
            <Divider style={styles.divider6} />
            <NotificationComponent
              NotificationHeading={
                "u/moderator replied to you comment in r/AMA"
              }
              notificationContent={"Please read this message"}
              style={styles.notificationComponent5}
            />
            <Divider style={styles.divider7} />
          </ScrollView>
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
  TabSection: {
    top: "12.36%",
    left: 0,
    height: 57.57,
    position: "absolute",
    flexDirection: "row",
    right: 0,
    justifyContent: "space-around",
    borderColor: "rgba(128,128,128,1)",
    borderWidth: 0,
    borderBottomWidth: 1
  },
  NotifsTab: {
    width: 126.69,
    height: 59,
    alignSelf: "center",
    marginRight: 0,
    marginLeft: 0,
    borderColor: "#036bbd",
    borderWidth: 0,
    borderBottomWidth: 3
  },
  text: {
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  MessagesTab: {
    width: 100.61,
    height: 59,
    alignSelf: "center",
    marginRight: 0,
    marginLeft: 0
  },
  text2: {
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  ModMailTab: {
    width: 94.55,
    height: 59,
    alignSelf: "center",
    marginRight: 0,
    marginLeft: 0
  },
  text3: {
    left: "10.81%",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  Header: {
    top: 22.17,
    left: 0,
    height: 60.31,
    position: "absolute",
    right: 0
  },
  image: {
    left: 17.8,
    width: 34.92,
    height: 35.81,
    position: "absolute",
    borderRadius: 10
  },
  text4: {
    left: 72.1,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 20,
    fontFamily: "ibm-plex-sans-regular"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    left: 315.4,
    position: "absolute"
  },
  divider: {
    top: "27.59%",
    left: 0,
    height: 1,
    position: "absolute",
    right: 0
  },
  AllActivity: {
    top: 162.66,
    left: 15.36,
    width: 186.87,
    height: 26,
    position: "absolute"
  },
  icon2: {
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 20
  },
  text5: {
    top: "23.08%",
    left: "16.07%",
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-700"
  },
  icon3: {
    left: 158.52,
    position: "absolute",
    color: "grey",
    fontSize: 20
  },
  scrollArea: {
    top: 188.66,
    left: 0,
    backgroundColor: "rgba(0,0,0,1)",
    position: "absolute",
    right: 0,
    bottom: 49.69,
    justifyContent: "flex-start"
  },
  scrollArea_contentContainerStyle: {},
  TrendingNotif: {
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-around"
  },
  icon4: {
    color: "rgba(2,107,189,1)",
    fontSize: 20,
    width: 20,
    marginTop: 20,
    alignSelf: "flex-start"
  },
  Content: {
    width: 293.76,
    height: 80.45,
    alignSelf: "center",
    marginTop: 10
  },
  text6: {
    top: 0,
    left: 0,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    fontFamily: "ibm-plex-sans-regular"
  },
  text7: {
    top: 28.65,
    left: 0,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  text8: {
    top: 56.39,
    left: 0,
    color: "rgba(128,128,128,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "ibm-plex-sans-regular"
  },
  divider2: {
    height: 1,
    alignSelf: "stretch"
  },
  notificationComponent: {
    height: 110,
    alignSelf: "stretch"
  },
  divider3: {
    height: 1,
    alignSelf: "stretch"
  },
  notificationComponent2: {
    height: 110,
    alignSelf: "stretch"
  },
  divider4: {
    height: 1,
    alignSelf: "stretch"
  },
  notificationComponent3: {
    height: 110,
    alignSelf: "stretch"
  },
  divider5: {
    height: 1,
    alignSelf: "stretch"
  },
  notificationComponent4: {
    height: 110,
    alignSelf: "stretch"
  },
  divider6: {
    height: 1,
    alignSelf: "stretch"
  },
  notificationComponent5: {
    height: 120,
    alignSelf: "stretch"
  },
  divider7: {
    height: 1,
    alignSelf: "stretch"
  },
  footer: {
    left: 0,
    height: 49.68,
    position: "absolute",
    right: 0,
    bottom: 0
  }
});
