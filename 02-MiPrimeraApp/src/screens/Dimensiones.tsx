import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

// const { height, width } = Dimensions.get('window');

export const DimensionesScreen = () => {

    const { height, width:widthCel } = useWindowDimensions();

    const { tamaño1, cajaAzul, cajaRed } = styles


  return (
    <View>
        <View>
            <Text>DimensionesScreen</Text>
            <View style={[{...tamaño1, width: widthCel*.75 }, cajaAzul]} ></View>
            <View style={[tamaño1, cajaRed]} ></View>
        </View>
        <Text>W: {widthCel} H: {height} </Text>
    </View>
        
  )
}

const styles = StyleSheet.create({
    tamaño1:{
        width: '25%',       // Porcentaje relativo al padre
        height:100,
    },
    cajaAzul:{
        backgroundColor: 'blue',

    },
    cajaRed:{
        backgroundColor: 'red'
    },
})