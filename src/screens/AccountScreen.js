/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
export default function AccountScreen(props) {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.imgTag} source={require('../assets/mainLogo.png')} />
            <Text style={styles.textTag}> {auth().currentUser.email} </Text>

            <Button
          style={styles.btnStyle}
          mode="contained"
          onPress={() => auth().signOut()}
        >
          LOG OUT
        </Button>
        </View>
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
