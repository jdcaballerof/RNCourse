import React, { useRef, useContext } from 'react'
import { Animated, Button, Easing, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation1Screen = () => { 

  const { themeState: {colors} } = useContext(ThemeContext);
    const { fadeIn, fadeOut, opacity, position, startMovingFrom, finishMovingIn } = useAnimation();


return (
   <View style={{flex:1, backgroundColor: colors.background}} >
     <Text style={{textAlign: 'center'}} >Animation1Screen</Text>
     <View style={stl.container} >

      <TouchableWithoutFeedback onPress={() => fadeOut()} >
        <Animated.View style={{
          ...stl.caja1, 
          opacity: opacity,
          transform: [{
            translateY: position
          }]
          }} />
      </TouchableWithoutFeedback>

      <Button onPress={ () => {fadeIn(1000); startMovingFrom(-250, 1000) } } title='fade In' />
      <Button onPress={ () => {fadeOut(); finishMovingIn(200); } } title='fade Out' />

     </View>
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
    backgroundColor: 'red',
    height: 150,
    width: 150,
    margin: 10,
    // borderRadius: 100
    // bottom: 500
  }    
})
