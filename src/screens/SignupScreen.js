/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.imageContainer}>
        <Image style={styles.imgTag} source={require('../assets/mainLogo.png')} />
        <Text style={styles.textTag}>Create Account.</Text>
        <Text style={styles.sub}>Sign up to get started!</Text>
      </View>
      <View >
      <TextInput
        style={styles.textInpStyle}
        underlineColor=""
        label="Name"
        value={userName}
        onChangeText={text => setName(text)}
        mode="flat"
      />
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
        SIGN UP
        </Button>
      <TouchableOpacity>
        <Text
          onPress={() => console.log('Presesed')}
          style={styles.subText}
        >
          I already have an account</Text>
      </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}
//justify-content for column AND align-items for rows
const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  imgTag: {
    width: 200,
    height: 200,

  },
  textInpStyle: {
    marginLeft: 18,
    marginRight: 18,
    marginTop: 5,
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
  sub: {
    fontSize: 15,
  },
});
