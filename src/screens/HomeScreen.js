import React, { useState } from 'react';
 import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
 import Modal from 'react-native-modal';
 import ImagePicker from 'react-native-image-picker';

 function HomeScreen({navigation}) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const setModalVisible = () => {
        setIsModalVisible(!isModalVisible);
    }


        const options = {
            title: 'Load Photo',
            storageOptions: {
            path: 'cosming',
            },
        };

    const showCamera = () => {
            ImagePicker.launchCamera(options, (response) => {
                if (response.error) {
                    console.log('LaunchCamera Error: ', response.error);

                }
                else {
                    if(response.uri){
                        navigation.navigate('Crop', {dataUri: response.uri});
                    }
                    else {
                        navigation.navigate('Home');
                    }
                    setModalVisible();
                }
            });
        };

        const showCameraRoll = () => {
            ImagePicker.launchImageLibrary(options, (response) => {
                if (response.error) {
                    console.log('LaunchImageLibrary Error: ', response.error);

                }
                else {
                    if(response.uri){
                        navigation.navigate('Crop', {dataUri: response.uri});
                    }
                    else {
                        navigation.navigate('Home');
                    }
                    setModalVisible();
                }
            });
        };

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
                        style={{justifyContent: 'center', backgroundColor: '#ffffff',
                        borderRadius: 7, padding: 20,
                        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5}}>
                            <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>검색할 화장품 사진 가져오기</Text>
                            <View style={{flexDirection: 'row', paddingTop: 10}}>
                                <TouchableOpacity style={{alignItems:'center', borderRadius: 10, borderColor: '#035eac', borderWidth: 1, padding: 15, margin: 10}} onPress={showCameraRoll}>
                                    <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>불러오기</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{alignItems:'center', backgroundColor: '#035eac', borderRadius: 10, padding: 15, margin: 10}} onPress={showCamera}>
                                    <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>새로찍기</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={setModalVisible}>
                                <Text style={{paddingTop: 10, color: '#236cb5', fontSize: 17, fontWeight: 'bold'}}>취소</Text>
                            </TouchableOpacity>
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