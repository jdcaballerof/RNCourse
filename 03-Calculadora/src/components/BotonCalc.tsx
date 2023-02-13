import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    label: string;
    textoClaro: boolean;
    bgColor?: string;
    ancho?: boolean;
    accion?: (() => void);
}

export const BotonCalc = ( {label, bgColor, ancho=false, textoClaro, accion}: Props ) => {

  const { btn, numero } = styles

  const txtColor:any = textoClaro ? {color: 'white'} : {color: 'black'} 


  return (
    <TouchableOpacity onPress={accion} >
        <View style={[btn, { 
            backgroundColor: bgColor,
            width: ancho ? 175 : 80
            },
            ]} >
            <Text style={[numero, txtColor]} >{label}</Text>
        </View>
    </TouchableOpacity>
  )
}
