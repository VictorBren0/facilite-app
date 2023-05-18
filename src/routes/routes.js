import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './stacks/stackMain';

export default function () {
  const auth = true
  return (
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
  );
}
