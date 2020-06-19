import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
//Connection to access the pre-populated user_db.db
var db = openDatabase({ name: 'cosming.db', createFromLocation : 1});

function DeleteModal({route, navigation}) {

    const { id } = route.params;
    const { screenId } = route.params;
    var rand = Math.random();

    deleteBoard = () => {
        db.transaction(tx => {
            tx.executeSql(
            'DELETE FROM board WHERE b_id=?',
            [id],
            (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected) {
                    alert('삭제되었습니다.');
                    if(screenId == 1){
                        navigation.navigate('Record', {refresh: rand});
                    }
                    else {
                        navigation.navigate('MyCosmetic', {refresh: rand});
                    }
                } else {
                    alert('삭제에 실패하였습니다. 다시 시도해주세요.');
                    navigation.goBack();
                }
            }
            );
        });
    };


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View
            style={{ width: (Dimensions.get('window').width - 70), justifyContent: 'center', backgroundColor: '#ffffff',
            borderRadius: 7, padding: 20, margin: 30,
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5}}>
                <Text style={{color: '#035eac', fontSize: 17, fontWeight: 'bold', paddingBottom: 20}}>삭제하시겠습니까?</Text>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.goBack()}>
                        <Text style={{paddingTop: 10, color: '#236cb5', fontSize: 17, fontWeight: 'bold'}}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight: 10}} onPress={deleteBoard}>
                        <Text style={{paddingTop: 10, color: '#236cb5', fontSize: 17, fontWeight: 'bold'}}>확인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


export default DeleteModal;
