import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './HomeScreen';
import RecordScreen from './RecordScreen';
import MyCosmeticScreen from './MyCosmeticScreen';
import InfoScreen from './InfoScreen';
import ResultDetail from './ResultDetail';
import CropImage from './CropImage';
const Stack = createStackNavigator();


function App() {

  useEffect(() => {
        // 컴포넌트가 마운트 되고 setTimeout함수를실행합니다.
        setTimeout(() => {
           SplashScreen.hide();
        }, 3000);
      }, []);


return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Record" component={RecordScreen}/>
            <Stack.Screen name="MyCosmetic" component={MyCosmeticScreen}/>
            <Stack.Screen name="Info" component={InfoScreen}/>
            <Stack.Screen name="Detail" component={ResultDetail}/>
            <Stack.Screen name="Crop" component={CropImage}/>
        </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;