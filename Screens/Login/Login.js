import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from '../../firebase';

export default class Login extends React.Component {
  
    constructor(props){
        super(props)
        this.state = {
            props : this.props
        }
        this.logIn = this.logIn.bind(this);
      }

      navigate(){
        this.props.navigation.navigate("Home")
      }
    
      async logIn() {
        
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Expo.Facebook.logInWithReadPermissionsAsync('273719676673816', {
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            const user = await response.json();
            const uid = await user.id;
            const database = await firebase.database();
            const ref = await database.ref(`users/`).push();
            await ref.set(
              {
                name : user.name,
                uid : user.id
              }
            )
            const newRef = await database.ref(`usersList/`).push();
            await newRef.set(
              {
                uid
              }
            )
            
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
    
      render() {
        console.log(this)
        return (
          <View style={styles.container}>
            <Text>Welcome To Customer Management System</Text>
            <Button
            title = "Login With Facebook"
            onPress={this.logIn}
            />
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });