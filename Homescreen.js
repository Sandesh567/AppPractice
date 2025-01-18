import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {

  signupPressed = () => {
    Alert.alert("Completed Sign Up")
  }

  loginPressed = () => {
    Alert.alert("Completed Login!")
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/img/bg3.jpg')}
        style={styles.background}
      >
        <View>
          <Image
            source={require('./assets/img/logo.png')}
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
    height: '100%',
    flex: 1
  },
  logo: {
    width: 280,
    height: 240,
    marginLeft: '15%',
    marginTop: '5%'
  },
  text: {
    color: 'white',
    marginTop: '-20%',
    marginLeft: '30%'
  },
  signup: {
    backgroundColor: 'rgba(144, 7, 7, 0.6)',
    color: 'white',
    width: "55%",
    borderRadius: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '22%',
    padding: "1%",
    fontSize: 27,
    marginTop: '100%'
  },
  login: {
    backgroundColor: 'rgba(144, 7, 7, 0.6)',
    color: 'white',
    width: "55%",
    borderRadius: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '22%',
    padding: "1%",
    fontSize: 27,
    marginTop: '10%'
  }
});
