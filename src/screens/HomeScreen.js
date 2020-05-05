import React, { useState } from 'react';
 import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import Modal from 'react-native-modal';
 import { Fonts } from '../Font'

 function HomeScreen({navigation}) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const setModalVisible = () => {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Image style={{height: '15%', width: '40%', resizeMode: 'contain'}} source={require('../images/hometext.png')} />
                <Image style={{height: '20%', width: '50%', resizeMode: 'contain'}} source={require('../images/homelogo.png')} />
            </View>
            <View style={{flex: 1, alignItems:'center'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', width: '60%'}}>
                    <TouchableOpacity style={{flex: 1, alignItems:'center'}} onPress={setModalVisible}>
                        <Image style={{width: '80%', resizeMode: 'contain'}} source={require('../images/search.png')} />
                        <Text style={{fontWeight: 'bold', color: '#558aff', fontSize: 10}}>찾아보기</Text>
                    </TouchableOpacity>
                    <Modal isVisible={isModalVisible} onRequestClose={setModalVisible} hasBackdrop={false} style={{alignItems:'center', elevation: 5}}>
                        <View
                        style={{alignItems:'center', justifyContent: 'center', backgroundColor: '#ffffff',
                        borderRadius: 20, paddingVertical: 25, paddingHorizontal: 20,
                        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5}}>
                            <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>검색할 화장품 사진 가져오기</Text>
                            <View style={{flexDirection: 'row', paddingTop: 10}}>
                                <TouchableOpacity style={{alignItems:'center', borderRadius: 10, borderColor: '#035eac', borderWidth: 1, padding: 15, margin: 10}}>
                                    <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>불러오기</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{alignItems:'center', backgroundColor: '#035eac', borderRadius: 10, padding: 15, margin: 10}}>
                                    <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>새로찍기</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
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