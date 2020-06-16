import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import Header from './Header';
import { openDatabase } from 'react-native-sqlite-storage';
//Connection to access the pre-populated user_db.db
var db = openDatabase({ name: 'cosming.db', createFromLocation : 1});

function RecordScreen({route, navigation}) {

    const [FlatListItems, setFlatListItems] = useState([]); //렌더링할 배열



    useEffect(() =>
    {
        var len = 0;
        var FItems = []; // 임시 배열

        var sql = 'SELECT b_id, search_date, search_time, ing_ids, img FROM board where like = 0';
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
                    }
                    setFlatListItems(FItems);
                }
            );
        });


    }, [route.params?.refresh]);

    const Item = ({b_id, sDate, sTime, ing_ids, img}) => {

        const ingData = () => {
            var ings = [];
            var temp = ing_ids.split(" ");
            for(i = 0; i < temp.length; i++){
                ings.push(temp[i]);
            }
            console.log(ings);
            navigation.navigate('Detail', {screenId: 1, dataUri: img, Data: ings, cosname: " ", costype: " ", b_id: b_id});
        }


        return (
            <TouchableOpacity style={styles.item} onPress={ingData}>
                <View style={{flex:1.5, alignItems: 'center'}}>
                <Image style={{height: 55, width: 55, resizeMode: 'contain'}} source={{uri: 'data:image/png;base64,'+img}}/>
                </View>
                <View style={{flex:2}}>
                    <View style={{flexDirection: 'row'}}><Text style={styles.title}>검색 날짜  </Text><Text style={styles.textcos}>{sDate}</Text></View>
                    <View style={{flexDirection: 'row'}}><Text style={styles.title}>검색 시간  </Text><Text style={styles.textcos}>{sTime}</Text></View>
                </View>
                <View style={{flex:1,  justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Like', {id: b_id})}>
                        <Image style={{height: 40, resizeMode: 'contain'}} source={require('../images/likelarge.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Delete', {id: b_id})}>
                        <Image style={{height: 20, resizeMode: 'contain'}} source={require('../images/deleterecord.png')} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{flex: 1, backgroundColor: '#b0c1e821', paddingHorizontal: 20}}>
            <Header goHome={() => navigation.navigate('Home')} goBack={() => navigation.goBack()}/>
            <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 5}}>
                <Image style={{marginTop: 5, height: 20, width: 30, resizeMode: 'contain'}} source={require('../images/recordlarge.png')} />
                <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 15, paddingTop: 3, paddingLeft: 5}}>검색 기록</Text>
            </View>
            <View style={{flex: 1}}>

                  {(FlatListItems.length == 0) ?
                    <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 15, paddingLeft: 10}}>데이터가 없습니다.</Text>
                  :
                  <FlatList
                    data={FlatListItems}
                    renderItem={({ item }) => <Item b_id={item.b_id} sDate={item.search_date} sTime={item.search_time} ing_ids={item.ing_ids} img={item.img}/>}
                    keyExtractor={(item, index) => index.toString()}
                  />}
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