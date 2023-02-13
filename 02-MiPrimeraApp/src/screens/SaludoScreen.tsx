import React from 'react'
import { Text, View } from 'react-native'

export const SaludoScreen = () => {
  return (
    <View style={ { 
        flex: 1, 
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'cyan' } } >
        <Text style={ {
          fontSize: 45,
          textAlign: 'center'
        } } >Hola perrooooo!!!</Text>
      </View>
  )
}
