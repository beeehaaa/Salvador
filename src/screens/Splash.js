/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet } from "react-native";
var bg = require('../assets/bg.jpg');
var logo = require('../assets/LogoB.png');

export default class Splash extends Component {
    render() {
        return (
            <ImageBackground
                source={bg}
                style={styles.mainCompo}>
                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={logo}
                        style={{ height: 100, width: 100 }}
                    ></Image>
                    <Text>
                        HELLO USER
                </Text>
                </View>

            </ImageBackground>

        );
    }
}
const styles = StyleSheet.create({
    mainCompo: {
        height: '100%',
        width: '100%',
    },

});
