import React, { useEffect, useRef } from 'react';
import { View, Animated, Text, StyleSheet } from 'react-native';

const CircleProgress = ({ percentage: spaceUsed, letter }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fillAnimation = Animated.timing(animatedValue, {
      toValue: spaceUsed,
      duration: 1000,
      useNativeDriver: false,
    });

    fillAnimation.start();
    return () => fillAnimation.stop();
  }, [spaceUsed]);

  const circleFillAnimation = animatedValue.interpolate({
    inputRange: [0, 1000],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Animated.View style={[styles.circleFill, { height: circleFillAnimation }]} />
        <Text style={styles.spaceUsedText}>{spaceUsed}{letter}/1GB</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  circle: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  circleFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ff6b6b',
  },
  spaceUsedText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
  },
});

export default CircleProgress;
