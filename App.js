import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Button, ScrollView } from 'react-native';
export default function Down() {
  return (
    <ScrollView>
      <Image style={styles.image}
        source={require('./assets/me.jpg')} />


      <Text style={styles.aboutme}>
        Hi, I'm sandesh a developer. I'm Passionate about programming,
        playing with fonts, integrating sophisticated styling, and fooling around
        with my code to produce visually captivating and responsive web designs.
        Let's build something amazing together!
      </Text>

      <Text style={styles.education}>Education</Text>
      <Text style={styles.aboutme}>
        The ScrollView is a generic scrolling container that can contain
        multiple components and views. The scrollable items can be heterogeneous,
        and you can scroll both vertically and horizontally by setting the
        horizontal property.
      </Text>
      <Text style={styles.aboutme}>
        The ScrollView is a generic scrolling container that can contain
        multiple components and views. The scrollable items can be heterogeneous,
        and you can scroll both vertically and horizontally by setting the
        horizontal property.
      </Text>
      <Text style={styles.aboutme}>
        The ScrollView is a generic scrolling container that can contain
        multiple components and views. The scrollable items can be heterogeneous,
        and you can scroll both vertically and horizontally by setting the
        horizontal property.
      </Text>


    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
  },
  image: {
    width: '100%',
    height: 300,
    marginTop: 60,
    borderRadius: 30
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  aboutme: {
    textAlign: 'justify',
    fontSize: 20,
    margin: 20,
    color: 'black',

  },
  education: {
    textAlign: 'justify',
    fontSize: 20,
    margin: 20,
    color: 'black',

  },
});
