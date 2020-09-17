import React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

function CosWebView({route, navigation}) {

    const{ code } = route.params;

    var cosWebUri = 'http://kcia.or.kr/cid/search/ingd_view.php?no=' + code;

    return (

        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <WebView
              source={{uri: cosWebUri}}
              style={{ marginTop: 20}}
            />
        </View>


    );

}

export default CosWebView;