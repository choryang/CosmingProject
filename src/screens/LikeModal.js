import React, { useState } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native';

function LikeModal({navigation}) {

    const [value, onChangeText] = useState('test');
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
        <View style={{flex: 1}}>
            <View style={{flex: 0.2}}></View>
            <View
            style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ffffff',
            borderRadius: 7, padding: 20, margin: 30,
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.7, shadowRadius: 2, elevation: 5}}>
                <View>
                    <Text style={{color: '#035eac', fontSize: 11}}>이름</Text>
                    <TextInput
                    style={{width: '100%', borderColor: '#035eac', borderBottomWidth: 2, marginBottom: 15, paddingBottom: 1,
                       fontWeight: 'bold', fontSize: 13, color: '#035eac'}}
                       onChangeText={text => onChangeText(text)}
                       placeholder={'이름을 입력해주세요'}
                       textAlign={'left'}
                       maxLength={10}
                       placeholderTextColor={'#035eac50'}
                    />
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{color: '#035eac', fontSize: 11}}>화장품 유형</Text>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <TouchableOpacity activeOpacity={1} style={(isVisible1 == 1) ? styles.ItemSelect : styles.Item} onPress={setVisible1}>
                            <Text style={(isVisible1 == 1) ? styles.TextSelect : styles.ItemText}>Hair / Body care</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={(isVisible1 == 2) ? styles.ItemSelect : styles.Item} onPress={setVisible2}>
                            <Text style={(isVisible1 == 2) ? styles.TextSelect : styles.ItemText}>Skin care</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={(isVisible1 == 3) ? styles.ItemSelect : styles.Item} onPress={setVisible3}>
                            <Text style={(isVisible1 == 3) ? styles.TextSelect : styles.ItemText}>Sun care</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <TouchableOpacity activeOpacity={1} style={(isVisible1 == 4) ? styles.ItemSelect : styles.Item} onPress={setVisible4}>
                            <Text style={(isVisible1 == 4) ? styles.TextSelect : styles.ItemText}>Make up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={(isVisible1 == 5) ? styles.ItemSelect : styles.Item} onPress={setVisible5}>
                            <Text style={(isVisible1 == 5) ? styles.TextSelect : styles.ItemText}>Cleansing</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{color: '#035eac', fontSize: 11}}>개봉일</Text>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <TouchableOpacity style={styles.DateItem}>
                            <Text style={styles.ItemText}>▼</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.DateItem}>
                            <Text style={styles.ItemText}>▼</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.DateItem}>
                            <Text style={styles.ItemText}>▼</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{color: '#035eac', fontSize: 11}}>사용기한</Text>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                        <TouchableOpacity style={styles.DateItem}>
                            <Text style={styles.ItemText}>▼</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.DateItem}>
                            <Text style={styles.ItemText}>▼</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.DateItem}>
                            <Text style={styles.ItemText}>▼</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{color: '#035eac', fontSize: 11}}>메모</Text>
                    <TextInput
                    style={{width: '100%', borderColor: '#035eac', borderBottomWidth: 2, marginBottom: 15, paddingBottom: 1,
                    fontWeight: 'bold', fontSize: 13, color: '#035eac'}}
                    onChangeText={text => onChangeText(text)}
                    placeholder={'이름을 입력해주세요'}
                    textAlign={'left'}
                    maxLength={10}
                    placeholderTextColor={'#035eac50'}
                    />
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.goBack()}>
                        <Text style={{paddingTop: 10, color: '#236cb5', fontSize: 17, fontWeight: 'bold'}}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.goBack()}>
                        <Text style={{paddingTop: 10, color: '#236cb5', fontSize: 17, fontWeight: 'bold'}}>저장</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 0.2}}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    Item: {
        padding: 7,
        marginRight: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 2,
        borderColor: '#035eac',
        borderWidth: 1
    },

    ItemText: {
        color: '#035eac',
        fontSize: 12,
        fontWeight: 'bold'
    },

    ItemSelect: {
        padding: 7,
        marginRight: 5,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#035eac',
        borderRadius: 2,
        borderColor: '#035eac',
        borderWidth: 1
    },

    TextSelect: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold'
    },

    DateItem: {
        padding: 7,
        marginRight: 5,
        marginVertical: 5,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#ffffff',
        borderRadius: 2,
        borderColor: '#035eac',
        borderWidth: 1
    },

});

export default LikeModal;
