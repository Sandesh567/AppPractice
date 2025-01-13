// Installing Tab Navigation
/**
 * npm install @react-navigation/bottom-tabs
 */


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const OverviewScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>About Sandesh</Text>
  </View>
);

const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Overview' component={OverviewScreen} />
  </Stack.Navigator>
)


const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Sandesh Raj Bhatta</Text>
    <Text style={styles.subTitle}>
      Hi, I'm sandesh a frontend developer. I'm Passionate about programming,
      playing with fonts, integrating sophisticated styling, and fooling around
      with my code to produce visually captivating and responsive web designs.
      Let's build something amazing together!
    </Text>
  </View>
);

const CatalogScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Catalog</Text>
  </View>
)

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 22,
    marginBottom: 18,
    textAlign: 'justify'
  }
});
