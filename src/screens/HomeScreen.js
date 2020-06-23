import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, BackHandler, ToastAndroid } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
//Connection to access the pre-populated user_db.db
var db = openDatabase({ name: 'cosming.db', createFromLocation : 1});

 function HomeScreen({navigation}) {

     var exitApp = false;
     var timeout;

     const handleBackButton = () => {
        // 2000(2초) 안에 back 버튼을 한번 더 클릭 할 경우 앱 종료
        if (!exitApp) {
            ToastAndroid.show('뒤로 버튼을 한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
            exitApp = true;
            timeout = setTimeout(
                () => {
                    exitApp = false;
                },
                2000    // 2초
            );
        } else {
            clearTimeout(timeout);
            BackHandler.exitApp();  // 앱 종료
        }
        return true;
    }

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
            'CREATE TABLE IF NOT EXISTS board (b_id INTEGER PRIMARY KEY AUTOINCREMENT, search_date VARCHAR(20), search_time VARCHAR(20), cosname VARCHAR(20), costype VARCHAR(20), memo VARCHAR(20), like INTEGER DEFAULT 0, ing_ids VARCHAR(255), img TEXT)',
            [],
            );
        });

        BackHandler.addEventListener("hardwareBackPress", handleBackButton);
        return () => BackHandler.removeEventListener("hardwareBackPress", handleBackButton);

    }, []);


    return (
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
                <Image style={{height: '15%', width: '40%', resizeMode: 'contain'}} source={require('../images/hometext.png')} />
                <Image style={{height: '20%', width: '50%', resizeMode: 'contain'}} source={require('../images/homelogo.png')} />
            </View>
            <View style={{flex: 1, alignItems:'center'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', width: '60%'}}>
                    <TouchableOpacity style={{flex: 1, alignItems:'center'}} onPress={() => navigation.navigate('Search')}>
                        <Image style={{width: '80%', resizeMode: 'contain'}} source={require('../images/search.png')} />
                        <Text style={{fontWeight: 'bold', color: '#558aff', fontSize: 10}}>찾아보기</Text>
                    </TouchableOpacity>
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