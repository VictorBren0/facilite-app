import React from 'react';
import {AuthProvider} from '../context';
import AppNav from './AppNav';


export default function () {
  return (
    <AuthProvider>
        <AppNav />
        </AuthProvider>
  );
}
