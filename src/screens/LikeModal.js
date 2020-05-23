import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
//Connection to access the pre-populated user_db.db
var db = openDatabase({ name: 'cosming.db', createFromLocation : 1});

function LikeModal({route, navigation}) {

    const [name, onChangeName] = useState('제품이름');
    const [type, onChangeType] = useState('제품유형');
    const { id } = route.params;

    LikeCos = () => {
        db.transaction((tx)=> {
            console.log(id);
            tx.executeSql(
                'UPDATE board set name=?, costype=?, like=1 where b_id=?',
                [name, type, id],
                (tx, results) => {
                    console.log('Results',results.rowsAffected);
                    if(results.rowsAffected){
                        alert('내 서랍에 저장되었습니다.');
                       navigation.goBack();
                    }else{
                    alert('저장에 실패하였습니다. 다시 시도해주세요.');
                    }
                }
                );
            });
    }


    return (
        <View style={{flex: 1}}>
            <View style={{flex: 0.2}}></View>
            <View
            style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ffffff',
            borderRadius: 7, padding: 20, margin: 30,
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5}}>
                <View>
                    <Text style={{color: '#035eac', fontSize: 11}}>이름</Text>
                    <TextInput
                    style={{width: '100%', borderColor: '#035eac', borderBottomWidth: 2, marginBottom: 15, paddingBottom: 1,
                       fontWeight: 'bold', fontSize: 13, color: '#035eac'}}
                       onChangeText={text => onChangeName(text)}
                       placeholder={'이름을 입력해주세요'}
                       textAlign={'left'}
                       maxLength={10}
                       placeholderTextColor={'#035eac50'}
                    />
                </View>
                <View>
                    <Text style={{color: '#035eac', fontSize: 11}}>제품유형</Text>
                    <TextInput
                    style={{width: '100%', borderColor: '#035eac', borderBottomWidth: 2, marginBottom: 15, paddingBottom: 1,
                       fontWeight: 'bold', fontSize: 13, color: '#035eac'}}
                       onChangeText={text => onChangeType(text)}
                       placeholder={'제품유형을 입력해주세요'}
                       textAlign={'left'}
                       maxLength={10}
                       placeholderTextColor={'#035eac50'}
                    />
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.goBack()}>
                        <Text style={{paddingTop: 10, color: '#236cb5', fontSize: 17, fontWeight: 'bold'}}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight: 10}} onPress={LikeCos}>
                        <Text style={{paddingTop: 10, color: '#236cb5', fontSize: 17, fontWeight: 'bold'}}>저장</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 0.2}}></View>
        </View>
    );
}


const styles = StyleSheet.create({
    Item: {
        padding: 7,
        marginRight: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 2,
        borderColor: '#035eac',
        borderWidth: 1
    },

    ItemText: {
        color: '#035eac',
        fontSize: 12,
        fontWeight: 'bold'
    },

    ItemSelect: {
        padding: 7,
        marginRight: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#035eac',
        borderRadius: 2,
        borderColor: '#035eac',
        borderWidth: 1
    },

    TextSelect: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold'
    },

    DateItem: {
        padding: 7,
        marginRight: 5,
        marginVertical: 5,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#ffffff',
        borderRadius: 2,
        borderColor: '#035eac',
        borderWidth: 1
    },

});

export default LikeModal;
