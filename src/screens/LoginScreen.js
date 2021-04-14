/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native';

export default function LoginScreen() {
  return (
    <View>
        <View style={styles.imageContainer}>
        <Image style={styles.imgTag} source={require('../assets/mainLogo.png')}/>
        <Text style={styles.textTag}>Please login to continue</Text>
        </View>

        <View />
    </View>
  );
}
//justify-content for column AND align-items for rows
const styles = StyleSheet.create({
  imageContainer: {
    alignItems:'center',
    marginTop: 70,
  },
  imgTag:{
    width: 200,
    height:200,

  },
  textTag:{
    fontSize:22,
    fontWeight: 'bold',
  },
});
