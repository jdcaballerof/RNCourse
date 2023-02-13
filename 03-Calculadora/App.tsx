import React from 'react'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';
import { SafeAreaView, StatusBar } from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={ styles.fondo } >
      <StatusBar backgroundColor='#1D3042' barStyle='light-content' />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}


export default App;
