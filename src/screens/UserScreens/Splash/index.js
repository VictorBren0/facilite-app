import React, { useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LottieView from 'lottie-react-native';


export function Splash({ navigation }) {


  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'InitialScreen' }],
      });
    }, 4000); // tempo em milissegundos
  }, []);


  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/splash.json')}
        autoPlay
        hardwareAccelerationAndroid={false}
        speed={0.6}
        style={styles.animacao}
      />
      <LottieView
        source={require('../../../assets/loading.json')}
        autoPlay
        hardwareAccelerationAndroid={false}
        speed={0.5}
        style={styles.animacao2}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
    backgroundColor: '#1D1D2E',
  },
  animacao2: {
    top: 200
  },
});