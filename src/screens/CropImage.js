import React, {useState} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';

function CropImage({route, navigation}) {

     const [isModalVisible, setIsModalVisible] = useState(false);
     const { dataUri } = route.params;

     const URL = "https://b12841e405a34032b6a5fd63f068b23d.apigw.ntruss.com/custom/v1/1615/eada0214517a4a0bf4b65aaed4d9146974afa129efd07030d26e13f63bba3638/general"

     const KEY = "VklxeHJhUldVRWdUdE5SeWNDdVFzWmNyZ1NuYVRUWkg="

     let img = dataUri;
     let enc;
     ImgToBase64.getBase64String(img)
       .then(base64String => {enc = base64String})
       .catch(err => console.log(err));
     console.log(enc);


        const setModalVisible = () => {
            setIsModalVisible(!isModalVisible);
        }

//        const [imageSource, setImageSource] = useState('.');
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
//                        setImageSource(response.uri);
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
//                        setImageSource(response.uri);
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

            const search_OCR = () => {

                fetch(URL,
                    {
                        method: 'POST',
                        headers:
                        {
                            "Content-Type": "application/json",
                            "X-OCR-SECRET": KEY
                        },
                        body: JSON.stringify(
                        {
                            "version": "V1",
                            "requestId": "sample_id",
                            "timestamp": 0,
                            "images": [
                                {
                                    "name": "sample_image",
                                    "format": "jpg",
                                    "data": enc
                                }
                            ]

                        })

                    })
                    .then((response) => response.text())
                    .then((res) =>
                    {
                        obj = JSON.parse(res);
                        var i;
                        for(i = 1; i < obj.images[0].fields.length; i++){
                            inputText = obj.images[0].fields[i].inferText;
                            console.log(inputText);
                            /*const nextNames = names.concat({
                              id: nextID,
                              text: inputText
                            });
                            setNames(nextNames);
                            console.log(inputText);
                            inputText = '';
                            setNextID(nextID + 1);*/
                        }

                    }).catch((error) =>
                    {
                        console.error(error);

                    });

                }


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
                    <Image style={{height: 200, width: '100%', resizeMode: 'contain'}} source={{uri: dataUri}} />
                </View>
                <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', marginTop: 15}}>
                    <Image style={{height: '20%', resizeMode: 'contain'}} source={require('../images/cropicon.png')} />
                    <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 12}}>인식할 부분을 찾아 이미지를 잘라 주세요</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 30, marginTop: 50}}>
                <TouchableOpacity style={{alignItems:'center', backgroundColor: '#ffffff', borderRadius: 10, borderColor: '#035eac', borderWidth: 1, padding: 8, margin: 10}} onPress={setModalVisible}>
                    <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>다시 선택하기</Text>
                </TouchableOpacity>
                <Modal isVisible={isModalVisible} onRequestClose={setModalVisible} hasBackdrop={false} style={{alignItems:'center', elevation: 5}}>
                    <View
                    style={{alignItems:'center', justifyContent: 'center', backgroundColor: '#ffffff',
                    borderRadius: 20, paddingVertical: 25, paddingHorizontal: 20,
                    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5}}>
                        <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>검색할 화장품 사진 가져오기</Text>
                        <View style={{flexDirection: 'row', paddingTop: 10}}>
                            <TouchableOpacity style={{alignItems:'center', borderRadius: 10, borderColor: '#035eac', borderWidth: 1, padding: 15, margin: 10}} onPress={showCameraRoll}>
                                <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>불러오기</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{alignItems:'center', backgroundColor: '#035eac', borderRadius: 10, padding: 15, margin: 10}} onPress={showCamera}>
                                <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>새로찍기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity style={{alignItems:'center', backgroundColor: '#035eac', borderRadius: 10, padding: 8, margin: 10}} onPress={search_OCR}>
                    <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>분석 하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

export default CropImage;