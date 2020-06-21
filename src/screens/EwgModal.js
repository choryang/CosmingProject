import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

function EwgModal({navigation}) {



    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View
            style={{ width: (Dimensions.get('window').width - 70), justifyContent: 'center', backgroundColor: '#ffffff',
            borderRadius: 7, padding: 20, margin: 30,
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5}}>
                <Text style={{color: '#035eac', fontSize: 17, fontWeight: 'bold', paddingBottom: 20}}>검색기록이 저장되었습니다.</Text>
                <Text style={{color: '#035eac', fontSize: 17, fontWeight: 'bold', paddingBottom: 10}}>* 스킨딥 등급이란?</Text>
                <Text style={{color: '#035eac', fontSize: 15, paddingBottom: 20}}>- 미국의 비영리 환경단체 EWG(Environmental Working Group)에서 생활화학원료의 유해성을 분석하여 부여한 등급입니다.</Text>
                <View>
                    <Text style={{color: '#035eac', fontSize: 15, fontWeight: 'bold', paddingBottom: 10}}>1) 유해성 등급(Hazard Score)</Text>
                    <Text style={{color: '#035eac', fontSize: 15, paddingBottom: 10}}>- 숫자가 작을수록 유해성이 낮습니다.</Text>
                    <Image style={{width: '100%', height: 30, resizeMode: 'contain'}} source={require("../images/ewg_total.png")} />
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingTop: 5, paddingBottom: 20}}>
                     <Text style={{color: '#035eac', fontSize: 13}}>낮음</Text>
                     <Text style={{color: '#035eac', fontSize: 13}}>높음</Text>
                </View>
                <View>
                    <Text style={{color: '#035eac', fontSize: 15, fontWeight: 'bold', paddingBottom: 10}}>2) 데이터 등급(Data Score)</Text>
                    <Text style={{color: '#035eac', fontSize: 15, paddingBottom: 10}}>: 유해성 등급 결정 시 사용된 근거 자료의 수</Text>
                    <Text style={{color: '#035eac', fontSize: 15, paddingBottom: 10}}>- 데이터 등급이 높을수록 유해성 등급의 신뢰도가 높습니다.</Text>
                    <Image style={{width: '100%', height: 30, resizeMode: 'contain'}} source={require("../images/data_grade.png")} />
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingBottom: 20}}>
                     <Text style={{color: '#035eac', fontSize: 13}}>근거 없음</Text>
                     <Text style={{color: '#035eac', fontSize: 13}}>근거 풍부</Text>
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
                    <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.goBack()}>
                        <Text style={{paddingTop: 10, color: '#236cb5', fontSize: 17, fontWeight: 'bold'}}>확인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default EwgModal;
