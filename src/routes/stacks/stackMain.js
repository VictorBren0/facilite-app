import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens//


import Folder from '../../screens/UserScreens/Folder';
import Home from '../../screens/UserScreens/Home';
import { Splash } from '../../screens/UserScreens/Splash';

const {Navigator, Screen} = createNativeStackNavigator();

export default function Stack({navigation}) {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Folder" component={Folder} />

    </Navigator>
  );
}
