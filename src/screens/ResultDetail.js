import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native';

const Data = [

    {
        id: "1",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "2",
        name: "세테아릴알코올",
        purpose: "3, 4, 5",
        ewg: "2",
        data: "none"
    },
    {
        id: "3",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "4",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "5",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "6",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "7",
        name: "세테아릴알코올",
        purpose: "3, 4, 5",
        ewg: "2",
        data: "none"
    },
    {
        id: "8",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "9",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "10",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "11",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "12",
        name: "세테아릴알코올",
        purpose: "3, 4, 5",
        ewg: "2",
        data: "none"
    },
    {
        id: "13",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "14",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "15",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "16",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "17",
        name: "세테아릴알코올",
        purpose: "3, 4, 5",
        ewg: "2",
        data: "none"
    },
    {
        id: "18",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "19",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
    {
        id: "20",
        name: "세테아릴알코올",
        purpose: "1, 2",
        ewg: "2",
        data: "limit"
    },
];


function ResultDetail({route, navigation}) {

    const{ screenId } = route.params;
    const { dataUri } = route.params;

    const Item = ({id, name, ewg}) => {
        return (
            <View style={styles.itemList}>
                <View style={{flex: 1, alignItems:'center'}}>
                    <Text style={styles.title}>{id}</Text>
                </View>
                <TouchableOpacity style={{flex: 3.5, alignItems:'center'}}>
                    <Text style={styles.text}>{name}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1.5, alignItems:'center'}}>
                    <Text style={styles.text}>{ewg}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const ListHeader = () => {

        return(
            <View style={styles.listHeader}>
                <View style={{flex: 1, alignItems:'center'}}>
                    <Text style={styles.title}>No.</Text>
                </View>
                <View style={{flex: 3.5, alignItems:'center'}}>
                    <Text style={styles.title}>name</Text>
                </View>
                <View style={{flex: 1.5, alignItems:'center'}}>
                    <Text style={styles.title}>value</Text>
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
                        data={Data}
                        renderItem={({ item }) => <Item id={item.id} name={item.name} ewg={item.ewg}/>}
                        keyExtractor={item => item.id}
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
        paddingVertical: 20,
        marginBottom: 10,
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5,
        backgroundColor: '#ffffff',
        borderRadius: 2
    },

    itemList: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        marginHorizontal: 15,
        borderColor: '#00000029',
        borderBottomWidth: 1
    },

    listHeader: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 15,
            marginHorizontal: 15,
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