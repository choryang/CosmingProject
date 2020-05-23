import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
//Connection to access the pre-populated user_db.db
var db = openDatabase({ name: 'cosData.db', createFromLocation : 1});

function MyCosmeticScreen({navigation}) {

    var FItems = [];


    useEffect(() => {

            var sql = 'SELECT name, ing_ids FROM board where like = 1';

            db.transaction(tx => {
                tx.executeSql(
                    sql, [],
                    (tx, results) => {
                        var len = results.rows.length;
                        console.log('len', len);
                        if (len) {
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

    const Item = ({name, ing_ids}) => {


     const ingData = () => {
         var ings = [];
        var temp = ing_ids.split(" ");
        for(i = 0; i < temp.length; i++){
            ings.push(temp[i]);
        }

        navigation.navigate('Detail', {screenId: 2, dataUri: ".", Data: ings});
     }
      return (
        <View style={styles.item}>
          <TouchableOpacity style={{flex:1, alignItems: 'center'}} onPress={ingData}>
            <Image style={{height: 55, resizeMode: 'contain'}} source={require('../images/infoblank.png')} />
          </TouchableOpacity>
          <View style={{flex:1.5}}>
           <Text style={styles.title}>{name}</Text>
           <Text style={styles.textcos}>제품유형</Text>
          </View>
          <View style={{flex:1.3}}>
            <View style={{flexDirection: 'row'}}><Text style={styles.textbold}>개봉일  </Text><Text style={styles.text}>2020-02-02</Text></View>
            <View style={{flexDirection: 'row'}}><Text style={styles.textbold}>사용기한  </Text><Text style={styles.text}>2020-02-02</Text></View>
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
                <Image style={{marginTop: 5, height: '60%', width: '10%', resizeMode: 'contain'}} source={require('../images/likelarge.png')} />
                <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 15}}>내 서랍</Text>
            </View>
            <View style={{flex: 1}}>

                  <FlatList
                    data={FItems}
                    renderItem={({ item }) => <Item name={item.name} ing_ids={item.ing_ids}/>}
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



export default MyCosmeticScreen;