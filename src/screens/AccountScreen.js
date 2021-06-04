/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, KeyboardAvoidingView, Linking, Platform } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export default function AccountScreen(props) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const getDetails = async () => {
        const querySnap = await firestore().collection('ads')
            .where('uid', '==', auth().currentUser.uid)
            .get()
        const result = querySnap.docs.map(docSnap => docSnap.data())
        setItems(result)
    }
    useEffect(() => {
        getDetails()
        return () => {
            console.log('Clean Up');
        }
    }, [])
    const openDial = (phone) => {
        if (Platform.OS === 'android') {
            Linking.openURL(`tel:${phone}`)
        }
        else {
            Linking.openURL(`telprompt:${phone}`)
        }
    }
    const renderIntem = (item) => {
        return (
            <Card style={styles.card}>
                <Card.Title title={item.name} />
                <Card.Content>
                    <Paragraph>{item.desc}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: item.image }} />
                <Card.Actions>
                    <Button>Adopt Me </Button>
                    <Button onPress={() => openDial()}>Call Seller</Button>
                </Card.Actions>
            </Card>
        )
    }
    return (
        <View style={styles.viewMain}>
            <View style={styles.imageContainer}>
                <Text style={styles.textTag}> {auth().currentUser.email} </Text>


                <Button
                    style={styles.btnStyle}
                    mode="contained"
                    onPress={() => auth().signOut()}
                >
                    LOG OUT
                </Button>
                <Text style={styles.textTag}> Your Posted Ads!</Text>
            </View>
            <View>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.contactNumber}
                    renderItem={({ item }) => renderIntem(item)}
                   
                    onRefresh={() => {
                        setLoading(true)
                        getDetails()
                        setLoading(false)
                    }}
                    refreshing={loading}
                />
            </View>


        </View>
    );
}
//justify-content for column AND align-items for rows
const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',

        justifyContent: 'space-evenly',
    },
    imgTag: {
        width: 200,
        height: 200,

    },
    viewMain: {
        flex: 1,
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
        marginTop: 10,
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
