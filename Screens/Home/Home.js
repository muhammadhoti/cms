import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Home extends React.Component {
  
  constructor(){
    super()
  }

  render() {
    
    return (
      <View style={{flex: 1}}>
        <Text>This Is Home</Text>
      </View>
    );
  }
}
