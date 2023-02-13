import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


interface Props {
  children: JSX.Element | JSX.Element[]
}
export const MyKeyboardAvoid = ( {children}: Props ) => {

  /*
  * Supuestamente con este componente se realiza de manera efectiva el desplazamiento de los inptus 
  cuando aparece el teclado pero no es asi, no funciona correctamente.
  ^ Solo se tiene que aplicar un <ScrollView> para solvertar ese problema y no usar este componente
   */

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // style={styles.container}
      >
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
            { children }
            {/* <View style={{height: 50}} /> */}
          </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})