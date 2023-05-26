import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens//


import Folder from '../../screens/UserScreens/Folder';
import Home from '../../screens/UserScreens/Home';

const {Navigator, Screen} = createNativeStackNavigator();

export default function Stack({navigation}) {
  return (
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Folder" component={Folder} />

    </Navigator>
  );
}
