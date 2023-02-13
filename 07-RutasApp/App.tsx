import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { PermissionsContext, PermissionsProvider } from './src/context/PermissionsContext';
{/* <Icon name="mustache" size={30} color="#900" /> */}
import { StackNav } from './src/navigation/StackNav';

import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      
      <PermissionsProvider>
        <StackNav />
      </PermissionsProvider>

    </NavigationContainer>
    </GestureHandlerRootView>
)
}

export default App;
