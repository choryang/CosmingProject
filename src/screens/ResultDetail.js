import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'cosData.db', createFromLocation : 1});

function ResultDetail({route, navigation}) {

    const{ screenId } = route.params;
    const { dataUri } = route.params;
    const { Data } = route.params;
    var FItems = [];
    var where;


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
        var ing_ids = "";

        db.transaction(tx => {
            tx.executeSql(
                sql, Data,
                (tx, results) => {
                    var len = results.rows.length;
                    console.log('len', len);
                    if (len > 0) {
                        for (let i = 0; i < len; ++i) {
                            FItems.push(results.rows.item(i));
                        }
                    } else {
                        alert('No data found');
                    }

                }
            );

        });
   }, []);


   /*insertResult = () => {
        db.transaction(tx => {
             tx.executeSql(
               'INSERT INTO board (search_date, search_time, ing_ids, like) VALUES (?,?,?,?)',
               [date('now','localtime'),time('now','localtime'),ing_ids,0],
               (tx, results) => {
                 if (results.rowsAffected > 0) {
                   alert('You are Registered Successfully');
                 } else {
                   alert('Registration Failed');
                 }
               }
             );
           });
    }*/




    const Item = ({id, name, purpose}) => {
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
        console.log(purposeStr);
        return (
            <View>
                <View style={styles.itemList}>
                    <View style={{flex: 1, alignItems:'center'}}>
                        <Text style={styles.title}>{id}</Text>
                    </View>
                    <View style={{flex: 3.5, alignItems:'center'}}>
                        <Text style={styles.text}>{name}</Text>
                    </View>
                </View>
                <View style={styles.itemPurpose}>
                    <View style={{flex: 1, alignItems:'center'}}>
                        <Text style={styles.title}>효능/효과 : </Text>
                    </View>
                    <View style={{flex: 3.5, alignItems:'center'}}>
                        <Text style={styles.text}>{purposeStr}</Text>
                    </View>
                </View>
            </View>
        );
    }

    const ListHeader = () => {

        return(
            <View style={styles.listHeader}>
                <View style={{flex: 1, alignItems:'center'}}>
                    <Text style={styles.title}>성분코드</Text>
                </View>
                <View style={{flex: 3.5, alignItems:'center'}}>
                    <Text style={styles.title}>성분명</Text>
                </View>
            </View>
        );

    };

    return (
        <View style={{flex: 1, backgroundColor: '#b0c1e821', paddingHorizontal: 20}}>
            <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 20}}>
                <Image style={{marginTop: 7, height: '80%', width: '30%', resizeMode: 'contain'}} source={require('../images/homelogo.png')} />
                <Image style={{marginTop: 20, height: '80%', width: '50%', resizeMode: 'contain'}} source={require('../images/hometext.png')} />
                <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Home')}>
                    <Image style={{marginTop: 5, height: '110%', width: '110%', resizeMode: 'contain'}} source={require('../images/homelarge.png')} />
                </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginVertical: 15, backgroundColor: '#035eac'}}>
                <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 15, paddingVertical: 5}}>분석 결과</Text>
            </View>
            <View style={{flex: 1}}>
                <View style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#236cb5'}}>
                    <Image style={{height: 200, width: '100%', resizeMode: 'contain'}} source={{uri: dataUri}} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: (screenId == 2) ? 'space-between' : 'flex-end'}}>
                    {(screenId == 2) &&
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 13}}>제품명</Text>
                        <Text style={{ color: '#035eac', fontSize: 13}}> 어쩌구 크림   </Text>
                        <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 13}}>제품유형</Text>
                        <Text style={{ color: '#035eac', fontSize: 13}}> 00000   </Text>
                    </View>}
                     {(screenId == 2) ?
                    <TouchableOpacity>
                        <Image style={{width: 20, resizeMode: 'contain'}} source={require('../images/likeselect.png')}/>
                    </TouchableOpacity> :
                    <TouchableOpacity  onPress={() => navigation.push('Like')}>
                        <Image style={{width: 20, resizeMode: 'contain'}} source={require('../images/likeIcon.png')} />
                    </TouchableOpacity>}
                </View>
                <View style={styles.itemContainer}>
                   <ListHeader />
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        marginHorizontal: 5,

    },

    itemPurpose: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        marginHorizontal: 5,
        borderColor: '#00000029',
        borderBottomWidth: 1,
        backgroundColor: '#b0c1e821'
    },

    listHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 5,
            marginHorizontal: 5,
            borderColor: '#00000029',
            borderBottomWidth: 1
        },

    item: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        color: '#236cb5',
        fontWeight: 'bold',
        fontSize: 15,
    },

    text: {
        color: '#236cb5',
        fontSize: 13,
    },


 });



export default ResultDetail;