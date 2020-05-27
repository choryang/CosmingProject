import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import CommonModal from './CommonModal';
import { openDatabase } from 'react-native-sqlite-storage';
//Connection to access the pre-populated user_db.db
var db = openDatabase({ name: 'IngBo.db', createFromLocation : 1});

function RecordScreen({navigation}) {

    const [FlatListItems, setFlatListItems] = useState([]); //렌더링할 배열
    const [refresh, setRefresh] = useState(false);

    const enc = 'data:image/png;base64,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';


    useEffect(() =>
    {
        var len = 0;
        var FItems = []; // 임시 배열

        var sql = 'SELECT b_id, search_date, search_time, ing_ids FROM board where like = 0';
        db.transaction(tx => {
            tx.executeSql(
                sql, [],
                (tx, results) => {
                    len = results.rows.length;
                    console.log('len', len)
                    if (len > 0) {
                        for (var i = 0; i < len; i++) {
                            FItems.push(results.rows.item(i));
                        }
                        setFlatListItems(FItems);
                    } else {
                        alert('데이터가 없습니다.');
                    }

                }
            );
        })
    }, []);

    const Item = ({b_id, sDate, sTime, ing_ids}) => {

        const ingData = () => {
            var ings = [];
            var temp = ing_ids.split(" ");
            for(i = 0; i < temp.length; i++){
                ings.push(temp[i]);
            }
            console.log(ings);
            navigation.navigate('Detail', {screenId: 1, dataUri: ".", Data: ings, cosname: " ", costype: " "});
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
                    alert('삭제에 실패하였습니다. 다시 시도해주세요.');
                  }
                }
              );
            });

      };





        return (
            <View style={styles.item}>
                <TouchableOpacity style={{flex:1.5, alignItems: 'center'}} onPress={ingData}>
                <Image style={{height: 55, width: 55, resizeMode: 'contain'}} source={{uri: enc}}/>
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
                <Image style={{marginTop: 5, height: '35%', width: '15%', resizeMode: 'contain'}} source={require('../images/recordlarge.png')} />
                <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 15, paddingTop: 3}}>검색 기록</Text>
            </View>
            <View style={{flex: 1}}>
                  <FlatList
                    data={FlatListItems}
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
   marginVertical: 10,
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
     fontSize: 15,
  },
 textbold: {
         color: '#035eac',
         fontWeight: 'bold',
         fontSize: 10,
  }
});


export default RecordScreen;