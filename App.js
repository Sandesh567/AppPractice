import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {

  signupPressed = ()=>{
    Alert.alert("Completed Sign Up")
  }

  loginPressed = ()=> {
    Alert.alert("Completed Login!")
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.background}
      >
        <View>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          <Text style={styles.text}>Travel with people. Make new friends.</Text>
          <TouchableOpacity 
            onPress={this.signupPressed}
          >
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.loginPressed}
          >
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    logo:{
      width: 280,
      height: 280,
      marginLeft: '15%',
      marginTop: '10%'
    },
    text: {
      color: 'white',
      marginTop: '-25%',
      marginLeft: '20%'
    },
    signup: {
      backgroundColor: 'white',
      color: '#3A59FF',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '70%'
    },
    login: {
      backgroundColor: '#3A59FF',
      color: 'white',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '10%'
    }
});
