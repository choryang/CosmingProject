import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';


function InfoScreen({navigation}) {

    const [isVisible1, setIsVisible1] = useState(0);


    const setVisible2 = () => {
      if (isVisible1 != 2){
        setIsVisible1(2);
      }
      else{
        setIsVisible1(0);
      }
    }


    const setVisible4 = () => {
      if (isVisible1 != 4){
         setIsVisible1(4);
       }
      else{
         setIsVisible1(0);
      }
    }

    const setVisible5 = () => {
      if (isVisible1 != 5){
        setIsVisible1(5);
      }
      else{
        setIsVisible1(0);
      }
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
                <Text style={{ color: '#035eac', fontWeight: 'bold', fontSize: 15}}>?  도움말</Text>
            </View>
            <View style={{flex: 1}}>

                <TouchableOpacity activeOpacity={1} style={(isVisible1 == 2) ? styles.ItemSelect : styles.Item} onPress={setVisible2}>
                    <Text style={(isVisible1 == 2) ? styles.TextSelect : styles.ItemText}>Q. 코스밍의 성분정보는 어디서 가져왔나요?</Text>
                    {(isVisible1 == 2) ? <Text style={styles.TextSelect}>▲</Text> : <Text style={styles.ItemText}>▼</Text>}
                </TouchableOpacity>
                {(isVisible1 == 2) &&
                <View>
                    <Text style={styles.TextArticle} >대한화장품협회에서 제공하는 성분사전을 기반으로 하고 있습니다.</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CosWebView')}>
                    <Text style={styles.TextWebView}>대한화장품협회 - 성분사전 페이지로 이동하기(클릭)</Text>
                    </TouchableOpacity>
                </View>}

                <TouchableOpacity activeOpacity={1} style={(isVisible1 == 4) ? styles.ItemSelect : styles.Item} onPress={setVisible4}>
                    <Text style={(isVisible1 == 4) ? styles.TextSelect : styles.ItemText}>Q. 코스밍의 정보가 잘못됐어요! 고쳐주세요.</Text>
                    {(isVisible1 == 4) ? <Text style={styles.TextSelect}>▲</Text> : <Text style={styles.ItemText}>▼</Text>}
                </TouchableOpacity>
                {(isVisible1 == 4) &&
                <Text style={styles.TextArticle}>개발자 이메일로 잘못된 정보를 알려주세요! (okee0815@gmail.com)</Text>}

                <TouchableOpacity activeOpacity={1} style={(isVisible1 == 5) ? styles.ItemSelect : styles.Item} onPress={setVisible5}>
                    <Text style={(isVisible1 == 5) ? styles.TextSelect : styles.ItemText}>Q. 오류가 발생했어요. 어떻게 해야 하나요?</Text>
                    {(isVisible1 == 5) ? <Text style={styles.TextSelect}>▲</Text> : <Text style={styles.ItemText}>▼</Text>}
                </TouchableOpacity>
                {(isVisible1 == 5) &&
                <Text style={styles.TextArticle}>개발자 이메일로 오류사항을 알려주세요! (okee0815@gmail.com)</Text>}
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    Item: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5,
        borderRadius: 2
    },

    ItemText: {
        color: '#236cb5',
        fontSize: 12,
        fontWeight: 'bold'
    },

    ItemSelect: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        justifyContent: 'space-between',
        backgroundColor: '#236cb5',
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5,
        borderRadius: 2
    },

    TextSelect: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold'
    },

    TextArticle: {
        color: '#236cb5',
        fontSize: 12,
        marginTop: -5,
        paddingBottom: 10,
        paddingHorizontal: 10

    },

    TextWebView: {
        color: '#236cb5',
        fontSize: 13,
        marginTop: -5,
        paddingBottom: 10,
        paddingHorizontal: 10,
        fontWeight: 'bold'

    }


});



export default InfoScreen;