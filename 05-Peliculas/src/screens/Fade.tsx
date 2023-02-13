import React, { useRef } from 'react'
import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import { useFadeMine } from '../hooks/useFadeMine';

export const FadeScreen = () => {

   const { opacity, fadeIn, fadeOut } = useFadeMine();

return (
   <View style={estilos.contenedor} >
     <Animated.View style={[estilos.cuadro, { opacity: opacity }]} />
     <Button title='fadeIn' onPress={fadeIn} />
     <Button title='fadeOut' onPress={fadeOut} />
   </View>
)
}


const estilos = StyleSheet.create({
    contenedor: {
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cuadro: {
        backgroundColor: 'navy',
        borderColor: 'white',
        borderWidth: 10,
        width: 150,
        height: 150,
    }
})