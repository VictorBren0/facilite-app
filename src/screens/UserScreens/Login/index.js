import React, { useState, createRef, useEffect } from 'react';
import {
    TouchableOpacity,
    SafeAreaView,
    View,
} from 'react-native';

import styles from './styles';
import CustomButton from '../../../components/CustomButton';
import Logo from '../../../components/Logo';
import Input from '../../../components/Input';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Login({ navigation }) {

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    const loginInput = createRef();
    const passwordInput = createRef();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentBack}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Icon name={'arrow-back'} size={30} color={'#FFFFFF'} />
                </TouchableOpacity>
            </View>
            <View style={styles.contentLogo}>
                <Logo
                    fontSize={50}
                />
            </View>
            <Input
                ref={loginInput}
                text={'Digite seu login'}
                autoCapitalize='none'
                value={login}
                iconName={''}
                autoCorrect={false}
                onChangeText={setLogin}
            />
            <Input
                ref={passwordInput}
                text={'Digite sua senha'}
                autoCapitalize='none'
                value={password}
                iconName={''}
                secureTextEntry
                autoCorrect={false}
                onChangeText={setPassword}
            />
            <CustomButton
                text="Entrar"
                backgroundColor="#5079F2"
                textColor="#FFFFFF"
                onPress={() => {
                    navigation.navigate('Home');
                }}
                style={{ marginTop: 50 }}
            />
        </SafeAreaView>
    );
}
