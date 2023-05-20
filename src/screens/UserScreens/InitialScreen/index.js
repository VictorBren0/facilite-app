import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
} from 'react-native';

import styles from './styles';
import CustomButton from '../../../components/CustomButton';
import Logo from '../../../components/Logo';

export default function InitialScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentLogo}>
        <Logo
          fontSize={50}
        />
      </View>
      <CustomButton
        text="Login"
        backgroundColor="transparent"
        textColor="#FFFFFF"
        borderColor={'#FFFFFF'}
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={{ marginBottom: 20 }}
      />
      <CustomButton
        text="Cadastrar"
        backgroundColor="#5079F2"
        textColor="#FFFFFF"
        onPress={() => {
          navigation.navigate('Register');
        }}
        style={{ marginBottom: 20 }}
      />
    </SafeAreaView>
  );
}
