import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';


function InfoScreen() {

    return (
        <View style={{flex: 1}}>
            <Image style={{width: '100%', height: '100%', resizeMode: 'cover'}} source={require('../images/splash.gif')} />
        </View>


    );

}



export default InfoScreen;