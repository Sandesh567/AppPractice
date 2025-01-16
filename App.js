import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Gradient = () => {

  return (
    <View style={styles.container}>

      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(58, 131, 244, 0.4)', 'rgba(9,181,211,0.4)']}
        style={styles.container}
      >
        <Text style={styles.text}>
          Veggie's
        </Text>



      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 21,

  }
});

export default Gradient;
