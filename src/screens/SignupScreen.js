/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView,Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function SignUpScreen(props) {
    const [email, setEmail] = useState('');
    const [userName, setName] = useState('');
    const [password, setPassword] = useState('');
    var result;
    const userSignup = async ()=>{
        if(!email  || !password){
             Alert.alert('Please add all fields!');
             return
        }
        try{
            result = await auth().createUserWithEmailAndPassword(email,password)
            console.log(result.user);
        }
        catch(err){
            Alert.alert('Something went wrong! Please try different password');
        }
       
    }
    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.imageContainer}>
                <Image style={styles.imgTag} source={require('../assets/mainLogo.png')} />
                <Text style={styles.textTag}>Create Account.</Text>
                <Text style={styles.sub}>Sign up to get started!</Text>
            </View>
            <View style={styles.cant}>
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
                    onPress={() => userSignup()}
                >
                    SIGN UP
        </Button>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Text style={styles.subText}>
                        I already have an account</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}
//justify-content for column AND align-items for rows
const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 20,
    },
    imgTag: {
        width: 200,
        height: 200,

    },
    cant :{
        backgroundColor: 'white',
    },
    textInpStyle: {
        marginLeft: 18,
        marginRight: 18,
        marginTop: 2,
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
