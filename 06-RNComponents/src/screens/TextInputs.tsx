import React, { useState, useContext } from 'react'
import { Text, TextInput, ScrollView, StyleSheet, View } from 'react-native';
import { SwitchMine } from '../components/SwitchMine';
import { ThemeContext } from '../context/ThemeContext';
import { useForm } from '../hooks/useForm';


export const TextInputsScreen = () => { 

  const { themeState: {colors} } = useContext(ThemeContext)

  // const [form, setForm] = useState({
  //   i1: '',
  //   i2: '',
  //   i3: '',
  //   i4: '',
  // })

  // const myTextChange = (newTxt: string, id: keyof typeof form) => {
  //   setForm( f => ({
  //     ...f,
  //     [id]: newTxt 
  //   }))
  // }

  const { form, onChange: myTextChange } = useForm({
    i1: '',
    i2: '',
    i3: '',
    sw1: false,
    telefon: '',
  });


return (
  // <MyKeyboardAvoid>
  <ScrollView style={{backgroundColor: colors.background }}>

   <View style={{...stl.container, backgroundColor: colors.background}} >
     <Text>textInputsScreen</Text>

     <TextInput
      style={{...stl.input, borderColor: colors.secondary, color: colors.primary}}
      placeholder='campo 1 - Name'
      placeholderTextColor={colors.primaryTenue}
      autoCorrect={false}     // Auto corregir por el teclado
      autoCapitalize='words'  // Elegir el tipo
      onChangeText={ (valor) => myTextChange(valor, 'i1') }
      />

     <TextInput
      style={[{...stl.input, borderColor: colors.secondary, color: colors.primary}, {}]}
      placeholder='campo 2 - edad'
      placeholderTextColor={colors.primaryTenue}
      keyboardType='numeric'
      onChangeText={ (valor) => myTextChange(valor, 'i2') }
      />

     <TextInput
      style={[{...stl.input, borderColor: colors.secondary, color: colors.primary}, {}]}
      placeholder='campo 3 - email'
      placeholderTextColor={colors.primaryTenue}
      keyboardType='email-address'
      onChangeText={ (valor) => myTextChange(valor, 'i3') }
      />

      <SwitchMine isOn={form.sw1} onChange={ val => myTextChange( val, 'sw1' ) } />


      <Text style={{color: colors.primary}} > { JSON.stringify( form, null, 5 ) } </Text>
      <Text style={{color: colors.primary}} > { JSON.stringify( form, null, 5 ) } </Text>
      <Text style={{color: colors.primary}} > { JSON.stringify( form, null, 5 ) } </Text>
      <Text style={{color: colors.primary}} > { JSON.stringify( form, null, 5 ) } </Text>
      <Text style={{color: colors.primary}} > { JSON.stringify( form, null, 5 ) } </Text>
      <Text> aaaa </Text>

     <TextInput
      style={{...stl.input, borderColor: colors.secondary, color: colors.primary}}
      placeholder='campo 4 - Cel'
      placeholderTextColor={colors.primaryTenue}
      keyboardType='phone-pad'
      onChangeText={ (valor) => myTextChange(valor, 'telefon') }
      />


   </View>
  </ScrollView>
   //</MyKeyboardAvoid>
)
}


const stl = StyleSheet.create({
    input: {
      color: 'black',
      marginVertical: 15,
      paddingHorizontal: 10,
      borderColor: 'gray',
      borderWidth: 2,
      borderRadius: 10,
    }, 
    container: {
      paddingHorizontal: 10
    }
})