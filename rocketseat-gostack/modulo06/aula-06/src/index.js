import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import { StatusBar } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

console.tron.warn('Testes');

export default function App() {
  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </>
    </NavigationContainer>
  );
}
