import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadoraB } from '../hooks/useCalculadoraBasic'
import { styles } from '../theme/appTheme'

type Botones = Boton[]

interface Boton {
  label: string;
  color?: string;
  ancho?: boolean;
  textoClaro?: boolean;
  accion: () => void;
}

export const CalculadoraScreen = () => {

  const { num, numAnt, simbol, insertNumber, insertDot, igual, borrar1num, borrarTodo, invertirSigno, operadores:{dividir, multiplicar, restar, sumar} } = useCalculadoraB();

  const { resultado, resultadoSmall, simbolStyle, calcContainer, teclado } = styles

  const cClaro = "#E6EEF5"; 
  const cObscuro = "#9B9B9B"; 
  const cNar1 = "#FFB53D"; 
  const cNAr2 = "#FF9427"; 

  const botones: Botones = [
    {
      "label": "C",
      "color": cObscuro,
      "accion": borrarTodo,
    },
    {
      "label": "+/-",
      "color":cObscuro,
      "accion": invertirSigno,
    },
    {
      "label": '<<',
      "color":cObscuro,
      "accion": borrar1num,
    },
    {
      "label": '/',
      "color": cNar1,
      "accion": dividir,
    },
    {
      "label": '7',
      "accion": () => { insertNumber('7') },
    },
    {
      "label": '8',
      "accion": () => { insertNumber('8') },
    },
    {
      "label": '9',
      "accion": () => { insertNumber('9') },
    },
    {
      "label": 'X',
      "color": cNar1,
      "accion": multiplicar,
    },
    
    {
      "label": '4',
      "accion": () => { insertNumber('4') },
    },
    {
      "label": '5',
      "accion": () => { insertNumber('5') },
    },
    {
      "label": '6',
      "accion": () => { insertNumber('6') },
    },
    {
      "label": '-',
      "color": cNar1,
      "accion": restar,
    },
    
    {
      "label": '1',
      "accion": () => { insertNumber('1') },
    },
    {
      "label": '2',
      "accion": () => { insertNumber('2') },
    },
    {
      "label": '3',
      "accion": () => { insertNumber('3') },
    },
    {
      "label": '+',
      "color": cNar1,
      "accion": sumar,
    },
    
    {
      "label": '0',
      "ancho": true,
      "accion": () => { insertNumber('0') },
    },
    {
      "label": '.',
      accion: insertDot,
    },
    {
      "label": '=',
      "color": cNAr2,
      "accion": igual
    },
  ]


  return (
    <View style={calcContainer} >
      <Text style={resultadoSmall} >{numAnt}</Text>
      <Text style={simbolStyle} >{simbol}</Text>
      <Text style={resultado} numberOfLines={1} adjustsFontSizeToFit >{num}</Text>

      <View style={teclado} >

        {
          botones.map( (boton,i) => {
            if(!boton.color) boton.color = cClaro; 
            (boton.color === cObscuro  ) ? boton.textoClaro = true : boton.textoClaro = false

            return <BotonCalc 
            key={`${i}-${boton.label}`} 
            label={`${boton.label}`} 
            bgColor={`${boton.color}`} 
            ancho={boton.ancho}
            accion={boton.accion}
            textoClaro={boton.textoClaro}
             />
          } )
        }
        
      </View>

    </View>
  )
}
