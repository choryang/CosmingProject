import React, {useState} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';


function CropImage({navigation}) {


    return (
        <View style={{flex: 1, backgroundColor: '#b0c1e821', paddingHorizontal: 20}}>
            <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 20}}>
                <Image style={{marginTop: 7, height: '80%', width: '30%', resizeMode: 'contain'}} source={require('../images/homelogo.png')} />
                <Image style={{marginTop: 20, height: '80%', width: '50%', resizeMode: 'contain'}} source={require('../images/hometext.png')} />
                <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Home')}>
                    <Image style={{marginTop: 5, height: '110%', width: '110%', resizeMode: 'contain'}} source={require('../images/homelarge.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center', paddingTop: 100}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#236cb5'}}>
                    <Image style={{width: '30%', resizeMode: 'contain'}} source={require('../images/infoblank.png')} />
                    <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 15}}>이미지를 준비중입니다.</Text>
                </View>
                <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', marginTop: 15}}>
                    <Image style={{height: '20%', resizeMode: 'contain'}} source={require('../images/cropicon.png')} />
                    <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 12}}>인식할 부분을 찾아 이미지를 잘라 주세요</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 30, marginTop: 50}}>
                <TouchableOpacity style={{alignItems:'center', backgroundColor: '#ffffff', borderRadius: 10, borderColor: '#035eac', borderWidth: 1, padding: 8, margin: 10}}>
                    <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>다시 선택하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center', backgroundColor: '#035eac', borderRadius: 10, padding: 8, margin: 10}} onPress={() => navigation.navigate('Detail')}>
                    <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>분석 하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

export default CropImage;