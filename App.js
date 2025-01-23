import { StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback, TouchableHighlight, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (

    // Representation of touchable without feedback
    <SafeAreaView style={styles.container}>
      <Text>Click the image!</Text>
      <TouchableHighlight
        onPress={() => console.log("Image is clicked")}
      >

        <Image source={{
          width: 300,
          height: 400,
          uri: "https://picsum.photos/300/300"
        }}
        />

      </TouchableHighlight>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
