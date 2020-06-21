import React, {useState, useEffect} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Header from './Header';
import Modal from 'react-native-modal';
//import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import ImgToBase64 from 'react-native-image-base64';
//import { openDatabase } from 'react-native-sqlite-storage';
//Connection to access the pre-populated user_db.db
//var db = openDatabase({ name: 'BoIng.db', createFromLocation : 1});


function CropImage({route, navigation}) {

    const { dataUri } = route.params;
    const [croppedImage, setCroppedImage] = useState(dataUri);
    const [array, setArray] = useState([]);
    const [enc, setEnc] = useState(".");

    const URL = "https://b12841e405a34032b6a5fd63f068b23d.apigw.ntruss.com/custom/v1/1615/eada0214517a4a0bf4b65aaed4d9146974afa129efd07030d26e13f63bba3638/general"

    const KEY = "VklxeHJhUldVRWdUdE5SeWNDdVFzWmNyZ1NuYVRUWkg="

    useEffect(() => {

        let img = croppedImage;
        ImgToBase64.getBase64String(img)
        .then(base64String => {setEnc(base64String);})
        .catch(err => console.log(err));

    },[croppedImage]);


    const options = {
        title: 'Load Photo',
        storageOptions: {
        path: 'cosming',
        },
    };

    const cropImage = () => {
        ImagePicker.openCropper({
            path: croppedImage,
            cropperToolbarColor: '#ffffff', // 안드로이드
            freeStyleCropEnabled: true // 안드로이드
        }).then(image => {
            setCroppedImage(image.path);
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
                var tempArray = [];//DB에 검색할 성분명들의 배열
                var splitText = [];
                var initText;
                var nextText=".";
                var previousText = ".";
                var nextX = 0;
                var prevX = 0;
                var comma = 0;
                for(var i = 0; i < obj.images[0].fields.length; i++){
                    initText = obj.images[0].fields[i].inferText.trim();
                    splitText = obj.images[0].fields[i].inferText.split(/(?:,|\.)+/);//,가 .으로 인식되는 경우 발생
                    nextX = obj.images[0].fields[i].boundingPoly.vertices[2].x;
                    if(splitText.length > 2){// 성분명 중간에 ,가 있는 경우(ex. 1,2-헥산다이올)
                        splitText.pop();
                        nextText = splitText.join();
                    }
                    else{
                        nextText = splitText[0];//끝에만 ,가 있는 완전한 성분명
                    }

                    if(prevX > nextX && comma == 0 && tempArray.length > 1){ // 줄바뀜이 있을 때
                    // 줄바꿈을 기준으로 하나의 성분인 경우 >> 줄바뀜이 일어났고 ,로 구분되지 않았기 때문에 하나의 성분으로 판단
                        nextText = previousText + nextText;
                    }
                    nextText.trim();
                    tempArray.push(nextText);//
                    prevX = nextX;
                    previousText = nextText;
                    if(initText.charAt(initText.length - 1) == "," || initText.charAt(initText.length - 1) == ".") {
                        comma = 1 //문자열의 끝자리가 ,(또는 .)로 끝남
                    }
                    else {
                        comma = 0 //,로 끝나지 않음 > 하나의 성분
                    }
                }
            navigation.navigate('Detail', {screenId: 0, image: croppedImage, Data: tempArray, b_id: 0});

        }).catch((error) =>
        {
            alert('이미지를 분석할 수 없습니다.');
        });

    }


    return (
        <View style={{flex: 1, backgroundColor: '#b0c1e821', paddingHorizontal: 20}}>
            <Header goHome={() => navigation.navigate('Home')} goBack={() => navigation.goBack()}/>
            <View style={{flex: 1, justifyContent: 'center', paddingTop: 100}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#236cb5'}}>
                    <Image style={{height: 200, width: '100%', resizeMode: 'contain'}} source={{uri: croppedImage}} />
                </View>
                <TouchableOpacity style={{flex: 0.2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff', marginTop: 15, borderRadius: 2}}
                onPress={cropImage}
                >
                        <Image style={{height: '20%', resizeMode: 'contain'}} source={require('../images/cropicon.png')} />
                        <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 12}}>이미지를 편집하려면 여기를 클릭하세요</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 30, marginTop: 50}}>
                <TouchableOpacity style={{alignItems:'center', backgroundColor: '#ffffff', width: (Dimensions.get('window').width - 70)/2,
                borderRadius: 10, borderColor: '#035eac', borderWidth: 1, padding: 5}}
                onPress={() => navigation.navigate('Search')}>
                    <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>다시 선택하기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center', backgroundColor: '#035eac', width: (Dimensions.get('window').width - 70)/2,
                borderRadius: 10, padding: 5}}
                onPress={search_OCR}>
                    <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>분석 하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

export default CropImage;

