import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import CommonModal from './CommonModal';

const DATA = [
  {
    id: '1',
    name: '핑크 어쩌구 세럼',
    costype: '제품유형',
    opendate: '20.02.02',
    duedate: '22.02.02',
    time: '17:00'
  },
  {
    id: '2',
    name: '핑크 어쩌구 세럼',
    costype: '제품유형',
    opendate: '20.02.02',
    duedate: '22.02.02',
    time: '17:00'
  },
  {
    id: '3',
    name: '핑크 어쩌구 세럼',
    costype: '제품유형',
    opendate: '20.02.02',
    duedate: '22.02.02',
    time: '17:00'
  },
  {
      id: '4',
      name: '핑크 어쩌구 세럼',
      costype: '제품유형',
      opendate: '20.02.02',
      duedate: '22.02.02',
      time: '17:00'
    },
    {
      id: '5',
      name: '핑크 어쩌구 세럼',
      costype: '제품유형',
      opendate: '20.02.02',
      duedate: '22.02.02',
      time: '17:00'
    },

];



function RecordScreen({navigation}) {

    const Item = ({name, costype, opendate, duedate, time}) => {

    const [isDeleteVisible, setIsDeleteVisible] = useState(false);


    const setDeleteVisible = () => {
      setIsDeleteVisible(!isDeleteVisible);
    }

    return (
        <View style={styles.item}>
            <TouchableOpacity style={{flex:1.5, alignItems: 'center'}} onPress={() => navigation.navigate('Detail', {screenId: 1, dataUri: "."})}>
            <Image style={{height: 55, resizeMode: 'contain'}} source={require('../images/infoblank.png')} />
            </TouchableOpacity>
            <View style={{flex:2}}>
                <View style={{flexDirection: 'row'}}><Text style={styles.title}>검색 날짜  </Text><Text style={styles.textcos}>{opendate}</Text></View>
                <View style={{flexDirection: 'row'}}><Text style={styles.title}>검색 시간  </Text><Text style={styles.textcos}>{time}</Text></View>
            </View>
            <View style={{flex:1,  justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Like')}>
                    <Image style={{height: 40, resizeMode: 'contain'}} source={require('../images/likelarge.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={setDeleteVisible}>
                    {{isDeleteVisible} && <CommonModal isDeleteVisible = {isDeleteVisible} onDeleteClose = {setDeleteVisible}/>}
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
                    data={DATA}
                    renderItem={({ item }) => <Item name={item.name} costype={item.costype} opendate={item.opendate} duedate={item.duedate} time={item.time}/>}
                    keyExtractor={item => item.id}
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