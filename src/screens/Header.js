import React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

function Header(props) {

    return (
        <View style={{height: 70, flexDirection: 'row', alignItems:'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 20}}>
            <TouchableOpacity onPress={props.goBack}>
                <Image style={{marginTop: -10, height: 30, width: 30, resizeMode: 'contain'}} source={require('../images/backbtn.png')} />
            </TouchableOpacity>
            <Image style={{height: '80%', width: '30%', resizeMode: 'contain'}} source={require('../images/homelogo.png')} />
            <TouchableOpacity onPress={props.goHome}>
                <Image style={{height: 40, width: 40, resizeMode: 'contain'}} source={require('../images/home.png')} />
            </TouchableOpacity>
        </View>
    );
}

export default Header;
