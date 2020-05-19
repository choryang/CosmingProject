import React, {useState} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
//import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import ImgToBase64 from 'react-native-image-base64';

function CropImage({route, navigation}) {

     const { dataUri } = route.params;
     const [croppedImage, setCroppedImage] = useState(dataUri);
     const [isModalVisible, setIsModalVisible] = useState(false);
     const [array, setArray] = useState([{inferConfidence: "1", inferText: " "}]);


     const URL = "https://b12841e405a34032b6a5fd63f068b23d.apigw.ntruss.com/custom/v1/1615/eada0214517a4a0bf4b65aaed4d9146974afa129efd07030d26e13f63bba3638/general"

     const KEY = "VklxeHJhUldVRWdUdE5SeWNDdVFzWmNyZ1NuYVRUWkg="

     let img = dataUri;
     let enc;
     ImgToBase64.getBase64String(img)
       .then(base64String => {enc = base64String})
       .catch(err => console.log(err));




        const setModalVisible = () => {
            setIsModalVisible(!isModalVisible);
        }

            const options = {
                title: 'Load Photo',
                storageOptions: {
                path: 'cosming',
                },
            };

        const cropImage = () => {
                ImagePicker.openCropper({
                  path: croppedImage,
                  cropperToolbarColor: '#ffffff',
                  freeStyleCropEnabled: true
                }).then(image => {
                   setCroppedImage(image.path);
                  console.log(image);
                }).catch((error) => {});
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
                        setArray(obj.images[0].fields);
                        navigation.navigate('Detail');

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
                    <Image style={{height: 200, width: '100%', resizeMode: 'contain'}} source={{uri: croppedImage}} />
                </View>
                <TouchableOpacity style={{flex: 0.3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', marginTop: 15, borderRadius: 2}}
                onPress={cropImage}
                >
                        <Image style={{height: '20%', resizeMode: 'contain'}} source={require('../images/cropicon.png')} />
                        <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 12}}>이미지를 편집하려면 여기를 클릭하세요</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 30, marginTop: 50}}>
                <TouchableOpacity style={{alignItems:'center', backgroundColor: '#ffffff',
                borderRadius: 10, borderColor: '#035eac', borderWidth: 1, padding: 8, margin: 10}}
                onPress={() => navigation.push('Search')}>
                    <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>다시 선택하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center', backgroundColor: '#035eac',
                borderRadius: 10, padding: 8, margin: 10}}
                onPress={() => navigation.navigate('Detail', {screenId: 0, dataUri: croppedImage})}>
                    <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>분석 하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

export default CropImage;