import React, { useState } from 'react';
 import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import Modal from 'react-native-modal';

 function HomeScreen({navigation}) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const setModalVisible = () => {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <View>
            <Text>홈홈</Text>
            <TouchableOpacity onPress={setModalVisible}><Text>찾아보기</Text></TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View>
                    <Text>Hello!</Text>
                    <Button title="Hide modal" onPress={setModalVisible} />
                </View>
            </Modal>
            <TouchableOpacity onPress={() => navigation.navigate('Record')}><Text>기록</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MyCosmetic')}><Text>내화장품</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Info')}><Text>부가정보</Text></TouchableOpacity>
        </View>
    );

 }



 export default HomeScreen;