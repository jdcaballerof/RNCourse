import React, { useState } from 'react'
import { Button, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [cont, setCont] = useState(0);
    const { container, titulo, boton, botonText, bottomR, bottomL } = styles


  return (
    <View style={ container } >

        <Text style={ titulo } >Contador: {cont} </Text>

        {/* <TouchableOpacity style={ bottomR } onPress={() => setCont(cont+1)} >
            <View style={ boton }>
                <Text style={ botonText } >+</Text>
            </View>
        </TouchableOpacity> */}
        <Fab label='+' onPress={ () => setCont(cont+1) } />

        <TouchableHighlight activeOpacity={0.7}  style={  bottomL } onPress={() => setCont(cont-1)} >
            <View style={ boton }>
                <Text style={ botonText } >-</Text>
            </View>
        </TouchableHighlight>


    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#d6ecdf'
    },
    titulo: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        top: -25
    },
    boton: {
        backgroundColor:'#F05E05',
        fonhtSize: 45,
        width: 60,
        height: 60,
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    botonText:{
        color: 'black',
        fontSize: 25,
        // fontWeight: 'bold',
    },
    bottomR: {
        borderRadius:100,
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    bottomL: {
        borderRadius:100,
        position: 'absolute',
        bottom: 25,
        left: 25
    }

    
})