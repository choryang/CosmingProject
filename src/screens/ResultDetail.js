import React, { useState, useEffect, BackHandler } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native';
import Header from './Header';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'BoIng.db', createFromLocation : 1});

function ResultDetail({route, navigation}) {

    const{ screenId } = route.params;
    const { imageUri } = route.params;
    const { Data } = route.params;
    const { cosname } = route.params;
    const { costype } = route.params;

    var FItems = [];
    var where;
    var ing_ids = "";

    function addZero(date) {

        date = date >= 10 ? date : "0" + date;
        return date;
    }



    useEffect(() => {

        if(screenId == 0) {
            where = 'ing_name';
        }
        else {
            where = 'ing_id';
        }

        var sql = 'SELECT ing_id, ing_name, ing_purpose FROM ing where ' + where + ' in (';
        for(let i = 0; i < Data.length - 1; i++){
            sql = sql + '?,';
        }
        sql = sql + '?)';

        db.transaction(tx => {
            tx.executeSql(
                sql, Data,
                (tx, results) => {
                    var len = results.rows.length;
                    if (len > 0) {
                        if(screenId == 0){
                            for (let i = 0; i < Data.length; i++){
                                for (let j = 0; j < len; j++) {
                                    if(Data[i] == results.rows.item(j).ing_name) {
                                        FItems.push(results.rows.item(j));
                                        ing_ids = ing_ids + results.rows.item(j).ing_id + " ";
                                        break;
                                    }
                                }
                            }
                            var sRecord = new Date();
                            var sDate = sRecord.getFullYear() + "-" + addZero(sRecord.getMonth() + 1) + "-" + addZero(sRecord.getDate());
                            var sTime = addZero(sRecord.getHours()) + ":" + addZero(sRecord.getMinutes()) + ":" + addZero(sRecord.getSeconds());
                            tx.executeSql(
                               'INSERT INTO board (search_date, search_time, name, costype, ing_ids, img) VALUES (?,?,?,?,?,?)',
                               [sDate,sTime,' ',' ',ing_ids,imageUri],
                               (tx, results) => {
                                 if (results.rowsAffected > 0) {
                                   alert('검색기록이 저장되었습니다.');
                                 } else {
                                   alert('검색기록 저장에 실패하였습니다. 다시 시도해주세요.');
                                 }
                               }
                             );
                         }
                        else {//검색기록이나 내 서랍에서 결과화면으로 이동했을 때
                             for (let i = 0; i < Data.length; i++){
                                 for (let j = 0; j < len; j++) {
                                     if(Data[i] == results.rows.item(j).ing_id) {
                                         FItems.push(results.rows.item(j));
                                         break;
                                     }
                                 }
                             }
                        }
                    } else {
                        alert('No data found');
                    }

                }
            );



        });

   }, []);







    const Item = ({id, name, purpose}) => {
        var str = [];
        var purposeStr = "";
        if(purpose != null) {//배합목적이 존재하면
            str = purpose.split(" ");
            for(let i = 0; i < str.length; i++){
                switch(str[i]){
                    case "1":
                        purposeStr = purposeStr + "보습효과  ";
                        break;
                    case "2":
                        purposeStr = purposeStr + "유화제  ";
                        break;
                    case "3":
                        purposeStr = purposeStr + "세정효과  ";
                        break;
                    case "4":
                        purposeStr = purposeStr + "사용감개선  ";
                        break;
                    case "5":
                        purposeStr = purposeStr + "보존제  ";
                        break;
                    case "6":
                        purposeStr = purposeStr + "색소  ";
                        break;
                    case "7":
                        purposeStr = purposeStr + "기능성원료  ";
                        break;
                    case "8":
                        purposeStr = purposeStr + "향료  ";
                        break;
                    case "9":
                        purposeStr = purposeStr + "기타  ";
                        break;
                    default :
                        purposeStr = purposeStr + "";
                }

            }
        }
        else {
            purposeStr = "No data";
        }
        return (
            <View style={styles.item}>
                <View style={{flex:0.5, alignItems:'center', marginRight: 10}}>
                    <Text style={styles.text}>성분코드</Text>
                    <Text style={styles.title}>{id}</Text>
                </View>
                <View style={{flex:2}}>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems:'center', padding:5, backgroundColor: '#b0c1e821'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('CosWebView', {code: id})}>
                            <Text style={styles.name}>{name}</Text>
                        </TouchableOpacity>
                        <Text style={{color: '#E43D30', fontSize: 10, paddingLeft: 5}}>알러지유발물질</Text>
                        <Text style={{color: '#E43D30', fontSize: 10, paddingLeft: 5}}>알러지유발물질</Text>
                    </View>
                    <Text style={styles.text}>{purposeStr}</Text>
                </View>
            </View>
        );
    }


    return (
        <View style={{flex: 1, backgroundColor: '#b0c1e821', paddingHorizontal: 20}}>
            <Header goHome={() => navigation.navigate('Home')} goBack={() => navigation.goBack()}/>
            <View style={{alignItems: 'center', marginVertical: 15, backgroundColor: '#035eac'}}>
                <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 15, paddingVertical: 5}}>분석 결과</Text>
            </View>
            <View style={{flex: 1}}>
                <View style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#236cb5'}}>
                    <Image style={{height: 200, width: '100%', resizeMode: 'contain'}} source={{uri: imageUri}} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    {(screenId == 2) &&
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 13}}>제품명</Text>
                        <Text style={{ color: '#035eac', fontSize: 13}}> {cosname}   </Text>
                        <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 13}}>제품유형</Text>
                        <Text style={{ color: '#035eac', fontSize: 13}}> {costype}   </Text>
                    </View>}
                    <View style={{height: 30}}></View>
                </View>
                <View style={styles.itemContainer}>
                   <FlatList
                        data={FItems}
                        renderItem={({ item }) => <Item id={item.ing_id} name={item.ing_name} purpose={item.ing_purpose}/>}
                        keyExtractor={(item, index) => index.toString()}
                   />
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
   baseText: {
     fontFamily: "Cochin"
   },

   titleText: {
     fontSize: 20,
     color: "gray",
     paddingTop: 30
   },

    itemContainer: {
        flex: 1.5,
        paddingBottom: 20,
        marginBottom: 10,
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5,
        backgroundColor: '#ffffff',
        borderRadius: 2
    },

    itemList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        marginHorizontal: 5,
    },

    itemPurpose: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        marginHorizontal: 5,
        //backgroundColor: '#b0c1e821'
    },

    imgEWG: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },


    item: {
       flex: 1,
       flexDirection: 'row',
       paddingVertical: 10,
       marginHorizontal: 10,
       borderColor: '#236cb5',
       borderBottomWidth: 1
     },

    title: {
        color: '#236cb5',
        fontWeight: 'bold',
        fontSize: 15,
    },

    name: {
        color: '#236cb5',
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: 5,
        paddingLeft: 5,
        textDecorationLine: 'underline'
        //backgroundColor: '#b0c1e821'
    },

    text: {
        color: '#236cb5',
        fontSize: 13,
        paddingVertical: 3,
        paddingTop: 10,
        marginHorizontal: 5
    },


 });




export default ResultDetail;