import React, { useState, useEffect, BackHandler } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native';
import Header from './Header';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'cosming.db', createFromLocation : 1});

function ResultDetail({route, navigation}) {

    const{ screenId } = route.params;
    const { dataUri } = route.params;
    const { Data } = route.params;
    const { cosname } = route.params;
    const { costype } = route.params;
    const { b_id } = route.params;

    var item_id = b_id;

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

        var sql = 'SELECT ing_id, ing_name, ing_purpose, ing_data, ing_ewg FROM ingEWG where ' + where + ' in (';
        for(let i = 0; i < Data.length - 1; i++){
            sql = sql + '?,';
        }
        sql = sql + '?)';

        db.transaction(tx => {
            tx.executeSql(
                sql, Data,
                (tx, results) => {
                    var len = results.rows.length;
                    var sDate;
                    var sTime;
                    if (len > 0) {
                        for (let i = 0; i < len; i++) {
                            FItems.push(results.rows.item(i));
                            ing_ids = ing_ids + results.rows.item(i).ing_id + " ";
                        }
                        if(screenId == 0){
                            var sRecord = new Date();
                            sDate = sRecord.getFullYear() + "-" + addZero(sRecord.getMonth() + 1) + "-" + addZero(sRecord.getDate());
                            sTime = addZero(sRecord.getHours()) + ":" + addZero(sRecord.getMinutes()) + ":" + addZero(sRecord.getSeconds());
                            tx.executeSql(
                               'INSERT INTO board (search_date, search_time, cosname, costype, memo, ing_ids, img) VALUES (?,?,?,?,?,?,?)',
                               [sDate,sTime,' ',' ',' ',ing_ids,dataUri],
                               (tx, results) => {
                                 console.log('insert result');
                                 if (results.rowsAffected > 0) {
                                   alert('검색기록이 저장되었습니다.');
                                 } else {
                                   alert('검색기록 저장에 실패하였습니다. 다시 시도해주세요.');
                                 }
                               }
                             );
                            /*tx.executeSql(
                                'SELECT b_id FROM board where search_time = ?',
                                [sTime],
                                (tx, results) => {
                                    if (results.rowsAffected > 0) {
                                       item_id = results.rows.item(0);
                                       console.log(item_id);
                                       alert('검색기록이 저장되었습니다.');
                                    } else {
                                       alert('검색기록 저장에 실패하였습니다. 다시 시도해주세요.');
                                    }
                                }
                            );*/
                         }
                    } else {
                        alert('No data found');
                    }

                }
            );



        });

   }, []);







    const Item = ({id, name, purpose, ewg, data}) => {
        var str = [];
        var purposeStr = "";
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

        return (
            <View style={styles.item}>
                <View style={{flex:0.5, alignItems:'center', marginRight: 10}}>
                    {(ewg == "1") && <Image style={styles.imgEWG} source={require("../images/ewg_1.png")}/>}
                    {(ewg == "2") && <Image style={styles.imgEWG} source={require("../images/ewg_2.png")}/>}
                    {(ewg == "3") && <Image style={styles.imgEWG} source={require("../images/ewg_3.png")}/>}
                    {(ewg == "4") && <Image style={styles.imgEWG} source={require("../images/ewg_4.png")}/>}
                    {(ewg == "5") && <Image style={styles.imgEWG} source={require("../images/ewg_5.png")}/>}
                    {(ewg == "6") && <Image style={styles.imgEWG} source={require("../images/ewg_6.png")}/>}
                    {(ewg == "7") && <Image style={styles.imgEWG} source={require("../images/ewg_7.png")}/>}
                    {(ewg == "8") && <Image style={styles.imgEWG} source={require("../images/ewg_8.png")}/>}
                    {(ewg == "9") && <Image style={styles.imgEWG} source={require("../images/ewg_9.png")}/>}
                    {(ewg == "10") && <Image style={styles.imgEWG} source={require("../images/ewg_10.png")}/>}
                    {(ewg == null) && <Image style={styles.imgEWG} source={require("../images/ewg_none.png")}/>}
                    {(data == null) ? <Text style={styles.title}>No data</Text> : <Text style={styles.title}>{data}</Text>}
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.name}>{name}</Text>
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
                    <Image style={{height: 200, width: '100%', resizeMode: 'contain'}} source={{uri: 'data:image/png;base64,'+dataUri}} />
                </View>
                {(screenId == 2) &&
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', marginHorizontal: 5, paddingVertical: 5}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 13}}>제품명</Text>
                        <Text style={{ color: '#035eac', fontSize: 13}}> {cosname}   </Text>
                        <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 13}}>제품유형</Text>
                        <Text style={{ color: '#035eac', fontSize: 13}}> {costype}   </Text>
                    </View>
                    <TouchableOpacity>
                        <Image style={{height: 20, width: 20, resizeMode: 'contain'}} source={require('../images/alreadylike.png')} />
                    </TouchableOpacity>
                </View>}
                {(screenId == 1) && <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'flex-end', width: '100%', height: 30}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Like', {id: b_id, screenId: 3})}>
                        <Image style={{height: 40, width: 40, resizeMode: 'contain'}} source={require('../images/likelarge.png')} />
                    </TouchableOpacity>
                </View>
                }
                {(screenId == 0) && <View style={{height: 30}}></View>}
                <View style={styles.itemContainer}>
                   <FlatList
                        data={FItems}
                        renderItem={({ item }) => <Item id={item.ing_id} name={item.ing_name} purpose={item.ing_purpose} ewg={item.ing_ewg} data={item.ing_data}/>}
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
        padding: 5,
        backgroundColor: '#b0c1e821'
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