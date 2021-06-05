/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
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
import AccountScreen from './screens/AccountScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';


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
const navTheme = DefaultTheme;
navTheme.colors.background = '#fff'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
};

const TabNavigator = () => {
  return (

    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({  color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home'
        } 
        else if (route.name === 'create'){
          iconName = 'plus';
        }
        else if (route.name === 'account'){
          iconName = 'user';
        }
        // You can return any component that you like here!
        return <View style={styles.botBar}><Entypo name={iconName} color={color} size={33} /></View>
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: {backgroundColor: '#fff',},
    }} 
    
    
     >
      <Tab.Screen name="Home" component={HomeScreen} options={{title: ''}}/>
      <Tab.Screen name="create" component={CreateAdScreen} options={{title: ''}} />
      <Tab.Screen name="account" component={AccountScreen} options={{title: ''}} />

    </Tab.Navigator>
  )
}
const Navigation = () => {
  const [user,setUser] = useState('');
  useEffect(()=>{
    const unsubscribe = auth().onAuthStateChanged((userExist)=>{
      if (userExist){
        setUser(userExist)
      }
      else {
        setUser('')
      }
    })
    return unsubscribe
  },[])
  return (
    <NavigationContainer  theme={navTheme}>
      {user ? <TabNavigator /> : <AuthNavigator />}


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
