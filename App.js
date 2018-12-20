import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Navigator from './Navigation/Navigation'

export default class App extends React.Component {
  
  constructor(){
    super()
  }

  render() {
    
    return (
      <View style={{flex: 1}}>
        <Navigator />
      </View>
    );
  }
}
