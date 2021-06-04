/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Alert, SafeAreaView, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const CreateAdScreen = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [image,setImage] = useState('');
    const postData = async () => {
        try {
            await firestore().collection('ads')
                .add({
                    name,
                    desc,
                    type,
                    breed,
                    age,
                    contactName,
                    contactNumber,
                    image,
                    uid: auth().currentUser.uid,
                })
            Alert.alert('posted your Ad!')

        }
        catch (err) {
            Alert.alert('Something went wrong. Try again!')
        }
    }
    const accessCamera = () => {
        launchCamera({ quality: 0.5 }, (fileobj) => {
            // console.log(fileobj)
            const uploadTask = storage().ref().child(`/items/${Date.now()}`).putFile(fileobj.uri)
            uploadTask.on('state_changed',
                (snapshot) => {
                
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if(progress === 100){
                        alert('uploaded')
                    }
                   
                },
                (error) => {
                    alert('Somthing went wrong')
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        setImage(downloadURL)
                    });
                }
            );
        })
    }
    return (
        <SafeAreaView>
            <ScrollView >

                <KeyboardAvoidingView behavior="position" style={styles.container}>

                    <Text style={styles.textTag}>Create a Post</Text>
                    <TextInput
                        style={styles.textInpStyle}
                        underlineColor=""
                        label="Title"
                        value={name}
                        onChangeText={text => setName(text)}
                        mode="flat"
                    />
                    <TextInput
                        style={styles.textInpStyle}
                        underlineColor=""
                        label="Type"
                        value={type}
                        onChangeText={text => setType(text)}
                        mode="flat"
                    />
                    <TextInput
                        style={styles.textInpStyle}
                        underlineColor=""
                        label="Breed"
                        value={breed}
                        onChangeText={text => setBreed(text)}
                        mode="flat"
                    />
                    <TextInput
                        style={styles.textInpStyle}
                        underlineColor=""
                        label="Age"
                        value={age}
                        keyboardType="numeric"
                        onChangeText={text => setAge(text)}
                        mode="flat"
                    />
                    <TextInput
                        style={styles.textInpStyle}
                        underlineColor=""
                        label="Description"
                        numberOfLines={1}
                        multiline={true}
                        value={desc}
                        onChangeText={text => setDesc(text)}
                        mode="flat"
                    />
                    <TextInput
                        style={styles.textInpStyle}
                        underlineColor=""
                        label="Contact Name"
                        value={contactName}
                        onChangeText={text => setContactName(text)}
                        mode="flat"
                    />
                    <TextInput
                        style={styles.textInpStyle}
                        underlineColor=""
                        label="Contact Number"
                        value={contactNumber}
                        keyboardType="numeric"
                        onChangeText={text => setContactNumber(text)}
                        mode="flat"
                    />
                    <Button icon="camera"
                        style={styles.btnStyle}
                        mode="contained"
                        onPress={() => accessCamera()}
                    >
                        UPLOAD IMAGE
        </Button>
                    <Button disabled={image ? false : true} style={styles.btnStyle}
                        mode="contained"
                        onPress={() => postData()}
                    >
                        SUBMIT POST
        </Button>

                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    imgTag: {
        width: 200,
        height: 200,
    },
    textInpStyle: {
        marginLeft: 10,
        marginRight: 18,
        marginTop: 5,
        backgroundColor: 'white',
    },
    btnStyle: {
        marginLeft: 18,
        marginRight: 18,
        marginTop: 15,
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
        marginTop: 25,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sub: {
        fontSize: 15,
    },
});

export default CreateAdScreen;
