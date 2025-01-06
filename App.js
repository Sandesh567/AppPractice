import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default function Flex() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <TextInput
        placeholder='Enter Name' />
      <TextInput
        placeholder='Enter Email' />
      <TextInput
        placeholder='Enter Number' />

      <Button title='Click Here!' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 80,
    flex: 1,
    padding: 20,
  },
  text: {
    textAlign: 'center'
  }
});
