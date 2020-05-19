import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';

function LoginScreen({navigation}) {

    const [value, onChangeText] = useState('test');

    return (

        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Image style={{height: '15%', width: '40%', resizeMode: 'contain', marginTop: 30}} source={require('../images/hometext.png')} />
                <Image style={{height: '20%', width: '50%',resizeMode: 'contain', marginBottom: 30}} source={require('../images/homelogo.png')} />
                <Text style={{color: '#035eac', fontWeight: 'bold'}}>지금 바로 시작해 볼까요?</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems:'center', paddingHorizontal: 60}}>
                <TextInput
                style={{width: '100%', borderColor: '#035eac', borderBottomWidth: 2, marginBottom: 15, paddingBottom: 5,
                fontWeight: 'bold', fontSize: 15, color: '#035eac'}}
                onChangeText={text => onChangeText(text)}
                placeholder={'이름을 입력해주세요'}
                textAlign={'center'}
                maxLength={10}
                placeholderTextColor={'#035eac50'}
                />
                <TouchableOpacity
                style={{backgroundColor: '#558aff', borderRadius: 50, paddingVertical: 5, paddingHorizontal: 40, marginBottom: 90}}
                onPress={() => navigation.navigate('Home')}>
                    <Text style={{color: '#ffffff', fontWeight: 'bold'}}>시작하기</Text>
                </TouchableOpacity>
            </View>
        </View>


    );

}

export default LoginScreen;