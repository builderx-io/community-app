import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Explore from "./src/screens/Explore";
import Home from "./src/screens/Home";
import Notifications from "./src/screens/Notifications";
import Popular from "./src/screens/Popular";
import Post from "./src/screens/Post";

const DrawerNavigation = DrawerNavigator({
  Home: {
    screen: Home
  },
  Explore: {
    screen: Explore
  },
  Notifications: {
    screen: Notifications
  },
  Popular: {
    screen: Popular
  },
  Post: {
    screen: Post
  }
});

const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Home: {
      screen: Home
    },
    Explore: {
      screen: Explore
    },
    Notifications: {
      screen: Notifications
    },
    Popular: {
      screen: Popular
    },
    Post: {
      screen: Post
    }
  },
  {
    headerMode: "none"
  }
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "ibm-plex-sans-regular": require("./src/assets/fonts/ibm-plex-sans-regular.ttf"),
      "ibm-plex-sans-500": require("./src/assets/fonts/ibm-plex-sans-500.ttf"),
      "ibm-plex-sans-700": require("./src/assets/fonts/ibm-plex-sans-700.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <AppLoading />;
  }
}
