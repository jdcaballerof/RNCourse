import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PosicionScreen = () => {

    const { bg, container, titulo, big, b, b1, b2 } = styles

  return (
    <View style={bg} >
        <View style={container} >
            <View style={[b, b1]} ><Text style={big} >A</Text></View>
            <View style={[b, b2]} ><Text style={big} >B</Text></View>
        <Text style={titulo} >Posiciones Relativas y absolutas</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'purple',
        // position: 'absolute',
        // top: 0,
        // right: 0,
        // left: 0,
        // bottom: 0,
        ...StyleSheet.absoluteFillObject,
    },
    container:{
        backgroundColor:'#28C4D9',
        margin:20,
        flex: 1,
        alignItems: 'center',
    },
    titulo:{
        backgroundColor: 'white',
        fontSize: 22,
        position: 'absolute',
        top: '45%',
    },
    big: {
        fontSize: 44,
        textAlign: 'center',
        top: 8,

    },
    b:{
        width: 100,
        height: 100,
        borderWidth: 10,
        position: 'absolute',
    },
    b1:{
        backgroundColor: 'orange',
        borderColor: 'red',
        bottom: 0,
        right: 0,
    },
    b2:{
        backgroundColor: 'lightgreen',
        borderColor: 'darkgreen',
        top: 0,
        right: 0,
        // left: 0,
    },
})
