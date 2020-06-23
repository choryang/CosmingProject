import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Header from './Header';

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

    const setVisible3 = () => {
      if (isVisible1 != 3){
         setIsVisible1(3);
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
            <Header goHome={() => navigation.navigate('Home')} goBack={() => navigation.goBack()}/>
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
                    <Text style={styles.TextArticle} >코스밍은 이용자분들께 정확하고 신뢰도 높은 정보를 제공하기 위해 노력하고 있습니다.</Text>
                    <Text style={styles.TextArticlePadding} >배합목적은 대한화장품협회 성분사전을 바탕으로 이해하기 쉽도록 재구성했습니다.</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CosWebView')}>
                        <Text style={styles.TextWebView}>대한화장품협회 - 성분사전 페이지로 이동하기(클릭)</Text>
                    </TouchableOpacity>
                    <Text style={styles.TextArticlePadding} >스킨딥 등급은 스킨딥 홈페이지에서 확인하실 수 있습니다</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('EWGWebView')}>
                        <Text style={styles.TextWebView}>스킨딥 홈페이지로 이동하기(클릭)</Text>
                    </TouchableOpacity>
                    <Text style={styles.TextArticlePadding}>알러지 유발물질을 비롯한 각종 정보들은 식품의약품 안전처 홈페이지에서 모두 확인하실 수 있습니다.</Text>
                    <Text style={styles.TextArticlePadding}>앞으로 이용자분들께 더욱 정확하고 유용한 정보를 드릴 수 있는 코스밍이 되겠습니다!</Text>
                </View>}

                <TouchableOpacity activeOpacity={1} style={(isVisible1 == 3) ? styles.ItemSelect : styles.Item} onPress={setVisible3}>
                    <Text style={(isVisible1 == 3) ? styles.TextSelect : styles.ItemText}>Q. 성분이 인식되지 않아요.</Text>
                    {(isVisible1 == 3) ? <Text style={styles.TextSelect}>▲</Text> : <Text style={styles.ItemText}>▼</Text>}
                </TouchableOpacity>
                {(isVisible1 == 3) &&
                <>
                <Text style={styles.TextArticle}>코스밍의 성분 인식은 네이버의 이미지-문자 인식 서비스를 사용하고 있습니다. 따라서 몇가지 주의사항을 지켜주시면 더욱 빠르고 정확한 정보를 드릴 수 있습니다.</Text>
                <Text style={styles.TextArticle}>1. 가능한 그림자가 없는 이미지를 사용해주세요.</Text>
                <Text style={styles.TextArticle}>2. 해상도가 너무 낮은 이미지의 사용은 가급적 피해주세요.</Text>
                <Text style={styles.TextArticle}>3. 최대한 성분표만 보이도록 이미지를 편집해주세요.</Text>
                <Text style={styles.TextArticle}>4. 성분표 양옆으로 다른 텍스트가 보이지 않게 편집해주세요.</Text>
                <Text style={styles.TextArticlePadding}>앞으로 더 발전하는 코스밍이 되겠습니다. 감사합니다.</Text>
                </>}

                <TouchableOpacity activeOpacity={1} style={(isVisible1 == 4) ? styles.ItemSelect : styles.Item} onPress={setVisible4}>
                    <Text style={(isVisible1 == 4) ? styles.TextSelect : styles.ItemText}>Q. 코스밍의 정보가 잘못됐어요! 고쳐주세요.</Text>
                    {(isVisible1 == 4) ? <Text style={styles.TextSelect}>▲</Text> : <Text style={styles.ItemText}>▼</Text>}
                </TouchableOpacity>
                {(isVisible1 == 4) &&
                <Text style={styles.TextArticle}>코스밍의 정보가 잘못되었다면 개발자 이메일(okee0815@gmail.com)로 연락주시면 빠른시일내에 수정하도록 하겠습니다. 불편을 드려 죄송합니다.</Text>}

                <TouchableOpacity activeOpacity={1} style={(isVisible1 == 5) ? styles.ItemSelect : styles.Item} onPress={setVisible5}>
                    <Text style={(isVisible1 == 5) ? styles.TextSelect : styles.ItemText}>Q. 오류가 발생했어요. 어떻게 해야 하나요?</Text>
                    {(isVisible1 == 5) ? <Text style={styles.TextSelect}>▲</Text> : <Text style={styles.ItemText}>▼</Text>}
                </TouchableOpacity>
                {(isVisible1 == 5) &&
                <>
                    <Text style={styles.TextArticle}>앱 사용중 오류 발생 시 하기사항을 적어 개발자 이메일(okee0815@gmail.com)로 연락주시면 빠른 시일 내에 수정하도록 하겠습니다. 앞으로 더 발전하는 코스밍이 되겠습니다. 불편을 드려 죄송합니다.</Text>
                    <Text style={styles.TextArticle}>1. 오류가 발생한 화면</Text>
                    <Text style={styles.TextArticle}>2. 오류가 발생한 상황 설명</Text>
                    <Text style={styles.TextArticle}>(예시: 내 서랍에서 분석결과를 보고 뒤로가기를 눌렀는데 앱이 꺼졌어요.)</Text>
                </>}
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

    TextArticlePadding: {
        color: '#236cb5',
        fontSize: 12,
        marginTop: -5,
        paddingBottom: 10,
        paddingTop: 20,
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