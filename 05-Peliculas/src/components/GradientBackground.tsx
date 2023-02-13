import React, { useEffect } from 'react'
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useFade } from '../hooks/useFade';
import { Colors } from '../screens/Home';

interface Props {
    children: JSX.Element | JSX.Element[];
    colores: Colors;
    prevColores: Colors;
    setPrevColores: any;
}

export const GradientBackground = ({ children, colores, prevColores, setPrevColores }: Props) => {

    // const { colores, prevColores, setPrevMainColors } = useContext( GradientContext );

    const { opacity, fadeIn, fadeOut } = useFade()

    useEffect(() => {
        fadeIn( () => {
            setPrevColores( colores );
            fadeOut(0);
        })

    }, [ colores ])



    return (
        <View style={{ flex: 1 }}>
           
            <LinearGradient 
                colors={[ prevColores.c1, prevColores.c2 , 'white' ]}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />

            <Animated.View
                style={{ 
                    ...StyleSheet.absoluteFillObject,
                    opacity
                }}
            >
                <LinearGradient 
                    colors={[ colores.c1, colores.c2 , 'white' ]}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.7 }}
                />
            </Animated.View>


            { children }
        </View>
    )
}
