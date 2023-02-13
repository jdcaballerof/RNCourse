import React, {useEffect} from 'react'
import { Animated, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useFadeMine } from '../hooks/useFadeMine';
import { Colors } from '../screens/Home';

interface Props {
    children: JSX.Element | JSX.Element[];
    colores: Colors;
    prevColores: Colors;
}

export const GradienteBg = ( {children, colores, prevColores}: Props ) => {

  const { fadeIn, fadeOut, opacity } = useFadeMine();

  useEffect(() => {

    // setTimeout(() => {
    //   fadeIn()
    // }, 100);

    setTimeout(() => {
      fadeOut();
    }, 1100);


  }, [colores])
  

  return (
    <View style={{flex: 1}} >
       

     <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity: opacity }} >

      <LinearGradient
        colors={[ prevColores.c1, prevColores.c2]}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{x: 0.1, y: 0}}    // por coordenadas; esquina sup-izq es (0,0) ; esquina inf-der es (1,1)
        end={{x: 0.6, y: 0.75}}
        />

     </Animated.View>

        {children}
    </View>
  )
}
