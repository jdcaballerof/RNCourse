import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxModelScreen = () => {

    const { titulo, container } = styles
  return (
    <View style={container} >
        <Text style={titulo} >Box Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        flex:1,         // Tambien el compononte SafeAreaView padre tiene flex: 1

    },
    titulo:{
        fontSize: 25,
        borderWidth: 10,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginHorizontal: 20,
        marginTop: 15,

    }
})