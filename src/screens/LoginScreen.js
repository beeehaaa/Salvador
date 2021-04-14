/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.imageContainer}>
        <Image style={styles.imgTag} source={require('../assets/mainLogo.png')} />
        <Text style={styles.textTag}>Please login to continue</Text>
      </View>
      <View >
        <TextInput
          style={styles.textInpStyle}
          underlineColor=""
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          mode="flat"
        />
        <TextInput
          style={styles.textInpStyle}
          secureTextEntry={true}
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          mode="flat"
        />
        <Button
          style={styles.btnStyle}
          mode="contained"
          onPress={() => console.log('Sign In pressed')}
        >
          SIGN IN
        </Button>
        <TouchableOpacity onPress={() => props.navigation.navigate('signup')}>
          <Text style={styles.subText}>I'm a new user</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}
//justify-content for column AND align-items for rows
const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: 70,
  },
  imgTag: {
    width: 200,
    height: 200,

  },
  textInpStyle: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 10,
    backgroundColor: 'white',
  },
  btnStyle: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 30,
    backgroundColor: '#381f47',
    textShadowColor: 'white',
    borderRadius: 35,
  },
  subText: {
    fontSize: 15,
    marginLeft: 18,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#381f47',
  },
  textTag: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
