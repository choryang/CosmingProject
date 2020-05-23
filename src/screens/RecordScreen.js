import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import CommonModal from './CommonModal';
import { openDatabase } from 'react-native-sqlite-storage';
//Connection to access the pre-populated user_db.db
var db = openDatabase({ name: 'cosming.db', createFromLocation : 1});

function RecordScreen({navigation}) {

    var FItems = [];



    useEffect(() => {

            var sql = 'SELECT b_id, search_date, search_time, ing_ids FROM board where like = 0';

            db.transaction(tx => {
                tx.executeSql(
                    sql, [],
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



    const Item = ({b_id, sDate, sTime, ing_ids}) => {

        const ingData = () => {
            var ings = [];
            var temp = ing_ids.split(" ");
            for(i = 0; i < temp.length; i++){
                ings.push(temp[i]);
            }
            console.log(ings);
            navigation.navigate('Detail', {screenId: 1, dataUri: ".", Data: ings});
        }

        deleteBoard = () => {
            db.transaction(tx => {
              tx.executeSql(
                'DELETE FROM board where b_id=?',
                [b_id],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected) {
                    alert('검색기록이 삭제되었습니다.');
                  } else {
                    alert('삭제를 실패하였습니다. 다시 시도해주세요.');
                  }
                }
              );
            });
          };



        return (
            <View style={styles.item}>
                <TouchableOpacity style={{flex:1.5, alignItems: 'center'}} onPress={ingData}>
                <Image style={{height: 55, resizeMode: 'contain'}} source={require('../images/infoblank.png')} />
                </TouchableOpacity>
                <View style={{flex:2}}>
                    <View style={{flexDirection: 'row'}}><Text style={styles.title}>검색 날짜  </Text><Text style={styles.textcos}>{sDate}</Text></View>
                    <View style={{flexDirection: 'row'}}><Text style={styles.title}>검색 시간  </Text><Text style={styles.textcos}>{sTime}</Text></View>
                </View>
                <View style={{flex:1,  justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Like', {id: b_id})}>
                        <Image style={{height: 40, resizeMode: 'contain'}} source={require('../images/likelarge.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteBoard}>
                        <Image style={{height: 20, resizeMode: 'contain'}} source={require('../images/deleterecord.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={{flex: 1, backgroundColor: '#b0c1e821', paddingHorizontal: 20}}>
            <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 20}}>
                <Image style={{marginTop: 7, height: '80%', width: '30%', resizeMode: 'contain'}} source={require('../images/homelogo.png')} />
                <Image style={{marginTop: 20, height: '80%', width: '50%', resizeMode: 'contain'}} source={require('../images/hometext.png')} />
                <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Home')}>
                    <Image style={{marginTop: 5, height: '110%', width: '110%', resizeMode: 'contain'}} source={require('../images/homelarge.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 5}}>
                <Image style={{marginTop: 5, height: '50%', width: '15%', resizeMode: 'contain'}} source={require('../images/recordlarge.png')} />
                <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 15}}>검색 기록</Text>
            </View>
            <View style={{flex: 1}}>

                  <FlatList
                    data={FItems}
                    renderItem={({ item }) => <Item b_id={item.b_id} sDate={item.search_date} sTime={item.search_time} ing_ids={item.ing_ids}/>}
                    keyExtractor={(item, index) => index.toString()}
                  />

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

 item: {
   flex: 1,
   flexDirection: 'row',
   paddingVertical: 15,
//       paddingTop: 0,
   marginVertical: 10,
//       marginHorizontal: 16,
   shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5,
   backgroundColor: '#ffffff',
   alignItems: 'center',
   borderRadius: 2
 },
 title: {
   //borderColor: 'gray',
   //borderWidth: 1,
   //textAlign: 'center',
   color: '#035eac',
   fontWeight: 'bold',
   fontSize: 15,
 },
 text: {
    color: '#035eac',
    fontSize: 10,
 },
 textcos: {
     color: '#035eac',
     fontSize: 13,
  },
 textbold: {
         color: '#035eac',
         fontWeight: 'bold',
         fontSize: 10,
  }
});


export default RecordScreen;