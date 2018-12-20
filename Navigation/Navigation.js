import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../Screens/Login/Login'
import Home from '../Screens/Home/Home'

class Navigator extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <Navigation />
        </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Home:{
    screen : Home
  }
});

const Navigation =  createAppContainer(AppNavigator);

export default Navigator;