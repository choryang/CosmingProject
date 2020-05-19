import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

function CommonModal(props) {

    return (
    <>
        <Modal isVisible={props.isLikeVisible} onRequestClose={props.onLikeClose} hasBackdrop={false} style={{alignItems: 'center'}}>
            <View
            style={{alignItems:'center', justifyContent: 'center', backgroundColor: '#ffffff',
            borderRadius: 7, paddingVertical: 25, paddingHorizontal: 20,
            shadowColor: '#550', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 5}}>
                <Text style={{fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>내 서랍에 저장</Text>
            </View>
        </Modal>
        <Modal isVisible={props.isDeleteVisible} onRequestClose={props.onDeleteClose} hasBackdrop={false} style={{alignItems: 'center'}}>
            <View
            style={{justifyContent: 'center', backgroundColor: '#ffffff',
            borderRadius: 7, padding: 20,
            shadowColor: '#550', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 2, elevation: 5}}>
                <Text style={{textAlign:'center', fontWeight: 'bold', color: '#236cb5', fontSize: 20}}>검색 기록이 삭제되었습니다.</Text>
                <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={props.onDeleteClose}>
                    <Text style={{paddingTop: 10, color: '#236cb5', fontSize: 15, fontWeight: 'bold'}}>닫기</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    </>
    );
}

export default CommonModal;
