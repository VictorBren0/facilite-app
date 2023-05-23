import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens//

import InitialScreen from '../../screens/UserScreens/InitialScreen'
import Login from '../../screens/UserScreens/Login';
import Register from '../../screens/UserScreens/Register';
import Folder from '../../screens/UserScreens/Folder';


import Home from '../../screens/UserScreens/Home';

const {Navigator, Screen} = createNativeStackNavigator();

export default function Stack({navigation}) {
  return (
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name="InitialScreen" component={InitialScreen} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Home" component={Home} />
      <Screen name="Folder" component={Folder} />

    </Navigator>
  );
}
