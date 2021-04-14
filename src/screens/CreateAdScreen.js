/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CreateAdScreen = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [type, setType] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    return (
       
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
                onPress={() => console.log('Sign In pressed')}
            >
                UPLOAD IMAGE
        </Button>
            <Button style={styles.btnStyle}
                mode="contained"
                onPress={() => console.log('Sign In pressed')}
            >
                SUBMIT POST
        </Button>
        </KeyboardAvoidingView>
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
        marginTop: 3,
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
        marginTop: 5,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sub: {
        fontSize: 15,
    },
});

export default CreateAdScreen;
