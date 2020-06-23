import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function CosWebView({navigation}) {

    return (

        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <WebView
              source={{uri: 'http://kcia.or.kr/cid/main/'}}
              style={{ marginTop: 20}}
            />
        </View>


    );

}

export default CosWebView;