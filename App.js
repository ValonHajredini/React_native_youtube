import React from 'react';
import cssStyle from './App.style';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Body from './Components/Body/Body';
import VideoItem from "./Components/VideoItem/VideoItem";
import NavBar from "./Components/Navbar/Navbar";
import TabsBottom from "./Components/TabsBottom/TabsBottom";
export default class App extends React.Component {
  render() {
    return (
      <View style={cssStyle.container}>
        <NavBar />
        <Body />
        <TabsBottom />
      </View>
    );
  }
}

