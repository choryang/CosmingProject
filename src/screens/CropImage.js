import React, {useState} from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
//import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import ImgToBase64 from 'react-native-image-base64';
import { openDatabase } from 'react-native-sqlite-storage';
//Connection to access the pre-populated user_db.db
var db = openDatabase({ name: 'IngBo.db', createFromLocation : 1});


function CropImage({route, navigation}) {

     const { dataUri } = route.params;
     const [croppedImage, setCroppedImage] = useState(dataUri);
     const [array, setArray] = useState([]);


     const URL = "https://b12841e405a34032b6a5fd63f068b23d.apigw.ntruss.com/custom/v1/1615/eada0214517a4a0bf4b65aaed4d9146974afa129efd07030d26e13f63bba3638/general"

     const KEY = "VklxeHJhUldVRWdUdE5SeWNDdVFzWmNyZ1NuYVRUWkg="

     let img = croppedImage;
     let enc;
     ImgToBase64.getBase64String(img)
       .then(base64String => {enc = base64String})
       .catch(err => console.log(err));

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
                var tempArray = [];
                var text = [];
                var nextText;
                var previousText = ".";
                var nextX = 0;
                var prevX = 0;
                for(var i = 0; i < obj.images[0].fields.length; i++){
                    text = obj.images[0].fields[i].inferText.split(",");
                    nextX = obj.images[0].fields[i].boundingPoly.vertices[2].x;
                    if(text.length > 2){// 성분명 중간에 ,가 있는 경우(ex. 1,2-헥산다이올)
                        text.pop();//마지막은 빈칸이라서
                        nextText = text.join();
                        tempArray.push(nextText);
                    }
                    else{
                        nextText = text[0].trim();
                        tempArray.push(nextText);//끝에만 ,가 있는 완전한 성분명
                    }

                    if(prevX > nextX){ // 줄바뀜이 있을 때
                        var sql = 'SELECT ing_id FROM ing where ing_name=?'
                            db.executeSql(
                                sql, [nextText],
                                (tx, results) => {
                                    console.log('실행1');
                                    var len = results.rows.length;
                                        tempArray.pop();
                                        nextText = previousText + nextText;
                                        tempArray.push(nextText);
                                        console.log('실행2');
                                }
                            );
                    }
                    prevX = nextX;
                    previousText = nextText;
                }
                console.log(tempArray);

            navigation.navigate('Detail', {screenId: 0, dataUri: croppedImage, Data: tempArray});

        }).catch((error) =>
        {
            alert('이미지를 분석할 수 없습니다.');
        });

    }


    return (
        <View style={{flex: 1, backgroundColor: '#b0c1e821', paddingHorizontal: 20}}>
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