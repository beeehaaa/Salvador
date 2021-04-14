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

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import CreateAdScreen from './screens/CreateAdScreen';
import HomeScreen from './screens/ListItemScreen';



import {  DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#381f47',
    accent: 'blue',
  },
};

const App = () => {
  return (
    <>
    <PaperProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.container}>
        {/* <LoginScreen /> */}
        {/* <SignUpScreen/> */}
        {/* <CreateAdScreen/> */}
        <HomeScreen/>
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
