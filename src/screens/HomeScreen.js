import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

 function HomeScreen({navigation}) {


    return (
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Image style={{height: '15%', width: '40%', resizeMode: 'contain'}} source={require('../images/hometext.png')} />
                <Image style={{height: '20%', width: '50%', resizeMode: 'contain'}} source={require('../images/homelogo.png')} />
            </View>
            <View style={{flex: 1, alignItems:'center'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', width: '60%'}}>
                    <TouchableOpacity style={{flex: 1, alignItems:'center'}} onPress={() => navigation.navigate('Search')}>
                        <Image style={{width: '80%', resizeMode: 'contain'}} source={require('../images/search.png')} />
                        <Text style={{fontWeight: 'bold', color: '#558aff', fontSize: 10}}>찾아보기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, alignItems:'center'}} onPress={() => navigation.navigate('Record')}>
                        <Image style={{width: '80%', resizeMode: 'contain'}} source={require('../images/record.png')} />
                        <Text style={{fontWeight: 'bold', color: '#558aff', fontSize: 10}}>검색 기록</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1.5, flexDirection: 'row', justifyContent: 'center', width: '60%'}}>
                    <TouchableOpacity style={{flex: 1, alignItems:'center'}} onPress={() => navigation.navigate('MyCosmetic')}>
                        <Image style={{height: '50%', width: '80%', resizeMode: 'contain'}} source={require('../images/like.png')} />
                        <Text style={{fontWeight: 'bold', color: '#558aff', fontSize: 10}}>내 서랍</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1, alignItems:'center'}} onPress={() => navigation.navigate('Info')}>
                        <Image style={{height: '50%', width: '100%', resizeMode: 'contain'}} source={require('../images/help.png')} />
                        <Text style={{fontWeight: 'bold', color: '#558aff', fontSize: 10}}>도움말</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

 }

 export default HomeScreen;