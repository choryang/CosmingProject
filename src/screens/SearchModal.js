import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';

function SearchModal(props) {

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
                        props.setCrop;
                    }
                    else {
                        props.setCrop;
                    }
                    props.setVisible;
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
                        props.setCrop;
                    }
                    else {
                        props.setCrop;
                    }
                    props.setVisible;
                }
            });
        };

    return (
/*    <>
        <Modal isVisible={props.isVisible} onRequestClose={props.setVisible}  hasBackdrop={false} style={{alignItems:'center', elevation: 5}}>*/
            <View
            style={{justifyContent: 'center', backgroundColor: '#ffffff',
            borderRadius: 7, padding: 20,
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>검색할 화장품 사진 가져오기</Text>
                <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <TouchableOpacity style={{alignItems:'center', borderRadius: 10, borderColor: '#035eac', borderWidth: 1, padding: 15, margin: 10}}
                    onPress={showCameraRoll}>
                        <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>불러오기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'center', backgroundColor: '#035eac', borderRadius: 10, padding: 15, margin: 10}}
                    onPress={showCamera}
                    >
                        <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>새로찍기</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{alignItems: 'flex-end', marginRight: 10}} onPress={props.setVisible}>
                    <Text style={{paddingTop: 10, color: '#236cb5', fontSize: 17, fontWeight: 'bold'}}>취소</Text>
                </TouchableOpacity>
            </View>
/*        </Modal>
    </>*/
    );
}

export default SearchModal;
