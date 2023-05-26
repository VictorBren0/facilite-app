import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';

import Stack from '../stacks/stackMain';
import AuthStack from "../stacks/stackAuth";
import {AuthContext} from "../../context";
import Toast from 'react-native-toast-message';

export default function AppNav() {
    const { userToken } = useContext(AuthContext);

    return (
        <>
        <NavigationContainer>
            {userToken !== null ? <Stack /> : <AuthStack />}
        </NavigationContainer>
        <Toast />
        </>
    )
}   