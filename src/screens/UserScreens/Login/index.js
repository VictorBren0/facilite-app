import React, { useState, createRef, useEffect, useContext } from 'react';
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
import { AuthContext } from '../../../context';
import toastConfig from '../../../components/Toast';
import Toast, {ErrorToast} from 'react-native-toast-message';

export default function Login({ navigation }) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const emailInput = createRef();
    const passwordInput = createRef();

    const { login } = useContext(AuthContext);

    useEffect(() => emailInput.current.resetError(), [email]);
    useEffect(() => passwordInput.current.resetError(), [password]);

    function validate() {
        if (!email) {
          Toast.show({
            type: 'error',
            text1: 'Email Inválido',
            text2: 'Por favor, insira um email válido.',
            icon: 'account-outline',
          });
          emailInput.current.focusOnError();
          return false;
        }
        if (!password) {
          Toast.show({
            type: 'error',
            text1: 'Senha Inválida',
            text2: 'Por favor, insira uma senha válida.',
            icon: 'lock-outline',
          });
          passwordInput.current.focusOnError();
          return false;
        }
        return true;
      }
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
                ref={emailInput}
                text={'Digite seu login'}
                autoCapitalize='none'
                value={email}
                iconName={''}
                autoCorrect={false}
                onChangeText={text => setEmail(text)}
            />
            <Input
                ref={passwordInput}
                text={'Digite sua senha'}
                autoCapitalize='none'
                value={password}
                iconName={''}
                secureTextEntry
                autoCorrect={false}
                onChangeText={text => setPassword(text)}
            />
            <CustomButton
                text="Entrar"
                backgroundColor="#5079F2"
                textColor="#FFFFFF"
                onPress={() => {
                    if (validate()) {
                      login(email, password);
                    }
                  }}
                style={{ marginTop: 50 }}
            />
        </SafeAreaView>
    );
}
