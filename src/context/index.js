import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import Toast from 'react-native-toast-message';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [userParams, setUserParams] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const showErrorToast = (error) => {
        let message = "An error occurred";
        if (error.response) {
            if (error.response.data.error) {
                message = error.response.data.error;
            } else if (error.response.data.errors) {
                message = error.response.data.errors.join("\n");
            }
        }
        Toast.show({
            topOffset: 50,
            type: "error",
            text1: 'Error',
            text2: message,
            props: {
                text2NumberOfLines: 6,
                style1: {
                    height: 230,
                }
            }
        });
    };
    const register = async (email, password) => {
        try {
            const response = await axios.post(`https://backend-ged.vercel.app/api/ged/signup`, {
                email,
                password
            });
            console.log(response.data);
        } catch (error) {
            showErrorToast(error.message);
        }
    };

    const login = async (email, password ) => {
        try {
            const response = await axios.post(`https://backend-ged.vercel.app/api/ged/login`, {
                email,
                password,
            });
            console.log(response.data);

            const userInfo = response.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.token);
            setUserParams(userInfo.userId);

            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.token);
            AsyncStorage.setItem('userParams', userInfo.userId);


            console.log('User Token: ' + userInfo.token);
            console.log('ID: ' + userInfo.userId);

        } catch (error) {
            showErrorToast(error);
            console.log(`Login error: ${error}`)
        }
    };

    const logout = async () => {
        setUserToken(null);
        try {
            await AsyncStorage.removeItem('userInfo');
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('userParams');

        } catch (error) {
            setIsLoading(false);
            console.log(`Logout error: ${error}`);
        }
    };

    const isLoggedIn = async () => {
        try {
            const userInfoJson = await AsyncStorage.getItem('userInfo');
            const userToken = await AsyncStorage.getItem('userToken');
            const userParams = await AsyncStorage.getItem('userParams');


            if (userInfoJson) {
                const userInfo = JSON.parse(userInfoJson);
                setUserInfo(userInfo);
                setUserToken(userToken);
                setUserParams(userParams);
            }
        } catch (error) {
            console.log(`isLoggedIn error: ${error}`);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{ register, login, logout, userToken, userInfo, userParams }}>
            {children}
        </AuthContext.Provider>
    )
}