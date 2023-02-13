import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {

    const { bg, container, titulo, bigTxt, box, b1, b2, b3 } = styles


  return (
    <View style={bg} >
    <View style={container} >
        <View style={[box, b1]} ><Text style={bigTxt} >A</Text></View>
        <View style={[box, b2]} ><Text style={bigTxt} >B</Text></View>
        <View style={[box, b3]} ><Text style={bigTxt} >C</Text></View>
    <Text style={titulo} >Flex</Text>
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'purple',
        ...StyleSheet.absoluteFillObject,
    },
    container:{
        backgroundColor:'#28C4D9',
        borderWidth: 10,
        borderColor: 'darkblue',
        margin:20,
        flex: 1,
        // flexDirection: '',
        // justifyContent: '',
        // alignItems: '',
        // alignSelf: '',
        // flexWrap: '',
    },
    titulo:{
        backgroundColor: 'white',
        color: 'dark',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 5,
        position: 'absolute',
        top: '45%',
        left: 160
    },
    bigTxt: {
        fontSize: 44,
        textAlign: 'center',
        top: 8,

    },
    box:{
        height: 100,
        // width: 100,
        borderWidth: 10,
    },
    b1:{
        backgroundColor: 'orange',
        borderColor: 'red',
        // alignSelf
        // flex: 3,  // Abarca 3/6
    },
    b2:{
        backgroundColor: 'lightgreen',
        borderColor: 'darkgreen',
        // flex: 2,  // Abarca 2/6
    },
    b3:{
        backgroundColor: 'lightgray',
        borderColor: 'brown',
        // flex: 1,  // Abarca 1/6
    },
})
