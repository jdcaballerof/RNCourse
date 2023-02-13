import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1';
import { Pagina2Screen } from '../screens/Pagina2';
import { Pagina3Screen } from '../screens/Pagina3';
import { PersonaScreen } from '../screens/Persona';

// Se definen las rutas que tendrá el Stack
export type StackProps = {
  Pagina1Screen: undefined,   // Si no ocupa props definirlo como undefined
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: {id: number, nombre: string },
}

const Stack = createStackNavigator<StackProps>();

export const StackMain = () => {
  return (
    <Stack.Navigator 
    // initialRouteName='Pagina2Sreen' 
    screenOptions={{
      // headerShown: false,
      headerStyle:{
        elevation: 0,               // Para quitar una linea en android
        shadowColor: 'transparent'  // Para quitar la misma linea de android pero para iphone
      },
      cardStyle: {
        backgroundColor: 'white'
      }
      }}>
      <Stack.Screen name="Pagina1Screen" options={{ title:"Pagna 1" }} component={ Pagina1Screen } />
      <Stack.Screen name="Pagina2Screen" options={{ title:"Pagna 2" }} component={ Pagina2Screen } />
      <Stack.Screen name="Pagina3Screen" options={{ title:"Pagna 3" }} component={ Pagina3Screen } />
      <Stack.Screen name="PersonaScreen" options={{ title:"Person" }} component={ PersonaScreen } />
    </Stack.Navigator>
  );
}