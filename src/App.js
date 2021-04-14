/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import CreateAdScreen from './screens/CreateAdScreen';
import HomeScreen from './screens/ListItemScreen';
import SplashScreen from './screens/Splash';


import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#381f47',
    accent: 'blue',
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="logn" component={LoginScreen} />
      <Stack.Screen name="signup" component={SignUpScreen} />
      <Stack.Screen name="splash" component={SplashScreen} />
    </Stack.Navigator>
  )
};

const TabNavigator = () => {
  return (

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="create" component={CreateAdScreen} />
      </Tab.Navigator>
  )
}
const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
};
const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <View style={styles.container}>
            <Navigation />
        </View>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
