import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './HomeScreen';
import RecordScreen from './RecordScreen';
import MyCosmeticScreen from './MyCosmeticScreen';
import InfoScreen from './InfoScreen';
import LoginScreen from './LoginScreen';
import ResultDetail from './ResultDetail';
import CropImage from './CropImage';
import SearchModal from './SearchModal';
import LikeModal from './LikeModal';
import CosWebView from './CosWebView';
import DeleteModal from './DeleteModal';
import EwgModal from './EwgModal';

const Stack = createStackNavigator();

function App() {

  useEffect(() => {
        // 컴포넌트가 마운트 되고 setTimeout함수를실행합니다.
        setTimeout(() => {
           SplashScreen.hide();
        }, 2000);
      }, []);


return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"  headerMode="none" backBehavior="initialRoute">
            <Stack.Screen name="Search" component={SearchModal} options={{cardOverlayEnabled: false,/*안드로이드*/ cardStyle: {backgroundColor: 'transparent'}}}/>
            <Stack.Screen name="Like" component={LikeModal} initialParams={{ id: 0, cosname: "제품이름", costype: "제품유형", cosmemo: "메모", screenId: 1 }} options={{cardOverlayEnabled: false,/*안드로이드*/ cardStyle: {backgroundColor: 'transparent'}}}/>
            <Stack.Screen name="Delete" component={DeleteModal} initialParams={{ id: 0, screenId: 1 }} options={{cardOverlayEnabled: false,/*안드로이드*/ cardStyle: {backgroundColor: 'transparent'}}}/>
            <Stack.Screen name="Ewg" component={EwgModal} options={{cardOverlayEnabled: false,/*안드로이드*/ cardStyle: {backgroundColor: 'transparent'}}}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Record" component={RecordScreen}/>
            <Stack.Screen name="MyCosmetic" component={MyCosmeticScreen}/>
            <Stack.Screen name="Info" component={InfoScreen}/>
            <Stack.Screen name="Detail" component={ResultDetail}/>
            <Stack.Screen name="Crop" component={CropImage}/>
            <Stack.Screen name="CosWebView" component={CosWebView}/>
        </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;