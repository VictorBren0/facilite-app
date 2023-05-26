import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens//

import InitialScreen from '../../screens/UserScreens/InitialScreen'
import Login from '../../screens/UserScreens/Login';
import Register from '../../screens/UserScreens/Register';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
export default AuthStack;
