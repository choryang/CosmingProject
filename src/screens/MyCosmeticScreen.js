import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

function MyCosmeticScreen({navigation}) {

    return (
        <View style={{flex: 1, backgroundColor: '#b0c1e890', paddingHorizontal: 20}}>
            <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 20}}>
                <Image style={{marginTop: 7, height: '80%', width: '30%', resizeMode: 'contain'}} source={require('../images/homelogo.png')} />
                <Image style={{marginTop: 20, height: '80%', width: '50%', resizeMode: 'contain'}} source={require('../images/hometext.png')} />
                <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Home')}>
                    <Image style={{marginTop: 5, height: '110%', width: '110%', resizeMode: 'contain'}} source={require('../images/homelarge.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 5}}>
                <Image style={{marginTop: 5, height: '60%', width: '10%', resizeMode: 'contain'}} source={require('../images/likelarge.png')} />
                <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 15}}>내 서랍</Text>
            </View>
            <View style={{flex: 1/*backgroundColor: 'yellow'*/}}>

            </View>
        </View>



    );

}



export default MyCosmeticScreen;