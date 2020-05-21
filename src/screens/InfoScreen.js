import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';



function InfoScreen({navigation}) {

    const [isVisible1, setIsVisible1] = useState(0);

    const setVisible1 = () => {
      if (isVisible1 != 1){
        setIsVisible1(1);
      }
      else{
        setIsVisible1(0);
      }
    }

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

                <TouchableOpacity activeOpacity={1} style={(isVisible1 == 1) ? styles.ItemSelect : styles.Item} onPress={setVisible1}>
                    <Text style={(isVisible1 == 1) ? styles.TextSelect : styles.ItemText}>Q. 코스밍은 어떻게 활용하면 좋은가요?</Text>
                    {(isVisible1 == 1) ? <Text style={styles.TextSelect}>▲</Text> : <Text style={styles.ItemText}>▼</Text>}
                </TouchableOpacity>
                {(isVisible1 == 1) &&
                <Text style={styles.TextArticle}>인생의 황금시대다 우리는 이 황금시대의 가치를 충분히 발휘하기 위하여 이 황금시대를 영원히 붙잡아 두기 위하여 힘차게 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이 다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어라라.</Text>}

                <TouchableOpacity activeOpacity={1} style={(isVisible1 == 2) ? styles.ItemSelect : styles.Item} onPress={setVisible2}>
                    <Text style={(isVisible1 == 2) ? styles.TextSelect : styles.ItemText}>Q. 코스밍의 규제정보는 어디서 가져왔나요?</Text>
                    {(isVisible1 == 2) ? <Text style={styles.TextSelect}>▲</Text> : <Text style={styles.ItemText}>▼</Text>}
                </TouchableOpacity>
                {(isVisible1 == 2) &&
                <Text style={styles.TextArticle}>인생의 황금시대다 우리는 이 황금시대의 가치를 충분히 발휘하기 위하여 이 황금시대를 영원히 붙잡아 두기 위하여 힘차게 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이 다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어라라.</Text>}

                <TouchableOpacity activeOpacity={1} style={(isVisible1 == 3) ? styles.ItemSelect : styles.Item} onPress={setVisible3}>
                    <Text style={(isVisible1 == 3) ? styles.TextSelect : styles.ItemText}>Q. 내 서랍 기능에 화장품 카테고리에 대해 알려주세요.</Text>
                    {(isVisible1 == 3) ? <Text style={styles.TextSelect}>▲</Text> : <Text style={styles.ItemText}>▼</Text>}
                </TouchableOpacity>
                {(isVisible1 == 3) &&
                <Text style={styles.TextArticle}>인생의 황금시대다 우리는 이 황금시대의 가치를 충분히 발휘하기 위하여 이 황금시대를 영원히 붙잡아 두기 위하여 힘차게 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이 다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어라라.</Text>}

                <TouchableOpacity activeOpacity={1} style={(isVisible1 == 4) ? styles.ItemSelect : styles.Item} onPress={setVisible4}>
                    <Text style={(isVisible1 == 4) ? styles.TextSelect : styles.ItemText}>Q. 코스밍의 정보가 잘못됐어요! 고쳐주세요.</Text>
                    {(isVisible1 == 4) ? <Text style={styles.TextSelect}>▲</Text> : <Text style={styles.ItemText}>▼</Text>}
                </TouchableOpacity>
                {(isVisible1 == 4) &&
                <Text style={styles.TextArticle}>인생의 황금시대다 우리는 이 황금시대의 가치를 충분히 발휘하기 위하여 이 황금시대를 영원히 붙잡아 두기 위하여 힘차게 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이 다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어라라.</Text>}

                <TouchableOpacity activeOpacity={1} style={(isVisible1 == 5) ? styles.ItemSelect : styles.Item} onPress={setVisible5}>
                    <Text style={(isVisible1 == 5) ? styles.TextSelect : styles.ItemText}>Q. 오류가 발생했어요. 어떻게 해야 하나요?</Text>
                    {(isVisible1 == 5) ? <Text style={styles.TextSelect}>▲</Text> : <Text style={styles.ItemText}>▼</Text>}
                </TouchableOpacity>
                {(isVisible1 == 5) &&
                <Text style={styles.TextArticle}>인생의 황금시대다 우리는 이 황금시대의 가치를 충분히 발휘하기 위하여 이 황금시대를 영원히 붙잡아 두기 위하여 힘차게 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이 다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을 얼음 속에서 불러 내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어라라.</Text>}
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

    }


});



export default InfoScreen;