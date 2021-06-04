/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, KeyboardAvoidingView, Linking, Platform } from 'react-native';
import { TextInput, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const ListItemScreen = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const getDetails = async () => {
        const querySnap = await firestore().collection('ads').get()
        const result = querySnap.docs.map(docSnap => docSnap.data())
        console.log(result)
        setItems(result)
    }
    const openDial = (phone) => {
        if (Platform.OS === 'android') {
            Linking.openURL(`tel:${phone}`)
        }
        else {
            Linking.openURL(`telprompt:${phone}`)
        }
    }
    useEffect(() => {
        getDetails()
        return () => {
            console.log('Clean Up');
        }
    }, [])
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

        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.contactNumber}
                renderItem={({ item }) => renderIntem(item)}
                inverted={false}
                onRefresh={() => {
                    setLoading(true)
                    getDetails()
                    setLoading(false)
                }}
                refreshing={loading}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        margin: 10,
        elevation: 2,
    },

});

export default ListItemScreen;
