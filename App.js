import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, StyleSheet } from "react-native";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [toy, setToy] = useState('');



  function confirmPasswordMatch(props) {
    const { nativeEvent: { text } } = props;

    if (text !== password) {
      alert('Password do not match, Try again');
    }
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#ecf0f1",
      }}>
      <InputWithLabel
        label="Email"
        placeholder="Type your email here!"
        value={email}
        onChangeText={setEmail}
      />
      <InputWithLabel
        label="Password"
        placeholder="Type your Password here!"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <InputWithLabel
        label="Confirm Password"
        placeholder="Confirm Password here!"
        value={confirmationPassword}
        onChangeText={setConfirmationPassword}
        secureTextEntry
        onSubmitEditing={confirmPasswordMatch}
      />
      <InputWithLabel
        label="Pet Name"
        placeholder="Type your pet's name here!"
        value={name}
        onChangeText={setName}
      />
      <InputWithLabel
        label="Pet Date of Birth"
        placeholder="Type your Pet's Date of Birth here!"
        value={birthday}
        onChangeText={setBirthday}
      />
      <InputWithLabel
        label="Breed"
        placeholder="Type your pet's breed here!"
        value={breed}
        onChangeText={setBreed}
      />
      <InputWithLabel
        label="Toy"
        placeholder="Type your pet's favorite toy"
        value={toy}
        onChangeText={setToy}
      />

    </ScrollView>
  );
}

function InputWithLabel(props) {
  const { label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        style={styles.input}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 18
  },
  text: {
    padding: 8,
    fontSize: 18,
    color: 'blue',
  },
  input: {
    padding: 8,
    fontSize: 18,
    borderColor: 'red',

  }
});

export default App;
