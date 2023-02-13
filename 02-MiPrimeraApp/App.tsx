import React from 'react'
import { SafeAreaView } from 'react-native'
import { BoxModelScreen } from './src/screens/BoxModel'
import { ContadorScreen } from './src/screens/ContadorScreen'
import { DimensionesScreen } from './src/screens/Dimensiones'
import { FlexScreen } from './src/screens/Flex'
import { PosicionScreen } from './src/screens/Posicion'
import { SaludoScreen } from './src/screens/SaludoScreen'
import { TareaScreen } from './src/screens/Tarea'

export const App = () => {

  // Se le da un color al backgroundColor para el espacio del Notch

  return (
    // <SaludoScreen />
    // <ContadorScreen />
    <SafeAreaView style={{flex:1, backgroundColor: 'blue'}} >
      {/* <BoxModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PosicionScreen /> */}
      {/* <FlexScreen/> */}
      <TareaScreen />
    </SafeAreaView>
  )
}
