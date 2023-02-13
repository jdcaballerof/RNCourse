import React, { useRef } from 'react'
import { Animated, Easing, Text, View } from 'react-native';

export const useAnimation = () => { 

    const opacity  = useRef( new Animated.Value(0) ).current
    const position = useRef( new Animated.Value(-250) ).current

    const fadeIn = (duration: number = 300) => {
        Animated.timing(
        opacity,      // Que se va a alterar
        {
            toValue: 1, // Hasta que valor tiene que llegar y en cuanto tiempo
            duration,
            useNativeDriver: true,    //Valor que siempre tiene que ir
        }
        ).start()
    }

    const fadeOut = ( func?: any ) => {
        Animated.timing(
        opacity,      // Que se va a alterar
        {
            toValue: 0, // Hasta que valor tiene que llegar y en cuanto tiempo
            duration: 500,
            useNativeDriver: true,    //Valor que siempre tiene que ir
        }
        ).start( () => !!func ? func() : null )
    }

    const startMovingFrom = (initPos: number, duration: number = 500) => {
        position.setValue(initPos)
        Animated.timing(
            position,      // Que se va a alterar
            {
                toValue: 0, // Hasta que valor tiene que llegar y en cuanto tiempo
                duration,
                easing: Easing.bounce,
                useNativeDriver: true,    //Valor que siempre tiene que ir
            }
            ).start( )
        
    }

    const finishMovingIn = (finishPos: number, duration: number = 500) => {
        // position.setValue(0)
        Animated.timing(
            position,      // Que se va a alterar
            {
                toValue: finishPos, // Hasta que valor tiene que llegar y en cuanto tiempo
                duration,
                // easing: Easing.bounce,
                useNativeDriver: true,    //Valor que siempre tiene que ir
            }
            ).start( )
        
    }


return {
    position,
    opacity,
    fadeIn,
    fadeOut,
    startMovingFrom,
    finishMovingIn
}
}
