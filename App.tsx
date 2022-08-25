/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { IconComponentProvider } from '@react-native-material/core';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, type PropsWithChildren } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { AuthProvider } from './src/context/AuthContext';
import DataProvider from './src/context/DataContext';
import RootStack from './src/routes/RootStack';
import agent from './src/services/agent';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AuthProvider>
      <DataProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </DataProvider>
    </AuthProvider>
  );
};


export default App;
