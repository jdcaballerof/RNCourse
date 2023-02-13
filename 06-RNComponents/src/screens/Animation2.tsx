import React, { useRef, useContext } from 'react'
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export const Animation2Screen = () => { 

  const { themeState: {colors} } = useContext(ThemeContext);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ],
    //*2 Esto no viene en la documentación, es necesario añadirlo en False para quitar el warning y que no de error 
      {
        useNativeDriver: false
      }
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0},   // Back to zero
        useNativeDriver: !true     //*1
        }, 
      ).start();
    },
  });

  // console.log(pan.getLayout())


return (
   <View style={{...stl.container, backgroundColor: colors.background}} >
     <Animated.View style={[ 
      stl.caja1, 
      pan.getLayout()
      /*
      *1 Esto se hace para usar useNativeDriver: true, 
      si se pone en false no es necesario añadir este objeto pero se debe mantener pan.getLayout() 
      El problema de usar esto es que la primer interacción no es como deberia de ser*/
      // {
      //   translateX: pan.getLayout().left,
      //   translateY: pan.getLayout().top,
      // }
     ]} 
     {...panResponder.panHandlers} />
   </View>
)
}


const stl = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caja1: {
    backgroundColor: 'darkviolet',
    height: 150,
    width: 150,
    margin: 10,
    // borderRadius: 100
    // bottom: 500
  }    
})