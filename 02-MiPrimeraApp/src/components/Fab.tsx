import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native'

interface Props {
    label: string;
    color?: string;
    posicion?: 'br'|'bl';   // Con ? decimos que es opcional bottom left o right
    onPress: () => void; 
}

export const Fab = ( {label, color='#F05E05', posicion='br', onPress}:Props ) => {

    const { boton, botonText, posicionBase, bottomR, bottomL } = styles
    boton.backgroundColor = color;

    const android = () => {
      return (
        <View style={ [ posicionBase, (posicion=='br') ? bottomR :  bottomL ] } >
            <TouchableNativeFeedback background={ TouchableNativeFeedback.Ripple('#D93807', false, 30) } onPress={() => onPress()} >
                    <View style={ boton }>
                        <Text style={ botonText } >{label}</Text>
                    </View>
            </TouchableNativeFeedback>
        </View>
      )
    }

    const ios = () => {
      return(
        <TouchableOpacity 
            style={ [ posicionBase, (posicion=='br') ? bottomR :  bottomL ] } 
            onPress={() => onPress()}
            activeOpacity={ 0.7 } >
                <View style={ boton }>
                    <Text style={ botonText } >{label}</Text>
                </View>
        </TouchableOpacity>
      )
    }


  return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor:'blue',
        fonhtSize: 45,
        width: 60,
        height: 60,
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 8,
        
    },
    botonText:{
        color: 'black',
        fontSize: 25,
        // fontWeight: 'bold',
    },
    posicionBase: {
        borderRadius:100,
        position: 'absolute',
        bottom: 25,
    },
    bottomR: {
        right: 25
    },
    bottomL: {
        left: 25
    }
})