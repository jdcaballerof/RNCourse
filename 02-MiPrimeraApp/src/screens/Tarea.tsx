import { StyleSheet, Text, View } from 'react-native'

export const TareaScreen = () => {

    const { bg, container, titulo, bigTxt, box, b1, b2, b3 } = styles
    0


  return (
    <View style={bg} >
    <View style={container} >
        <View style={[box, b1]} ><Text style={bigTxt} >A</Text></View>
        <View style={[box, b2]} ><Text style={bigTxt} >B</Text></View>
        <View style={[box, b3]} ><Text style={bigTxt} >C</Text></View>
    <Text style={titulo} >Tarea</Text>
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'purple',
        ...StyleSheet.absoluteFillObject,
    },
    titulo:{
        backgroundColor: 'white',
        color: 'dark',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 5,
        position: 'absolute',
        top: '45%',
        left: 141
    },
    bigTxt: {
        fontSize: 44,
        textAlign: 'center',
        top: 8,
        
    },
    container:{
        backgroundColor:'#28425B',
        // backgroundColor:'#28C4D9',
        borderWidth: 10,
        borderColor: 'darkblue',
        margin:20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: '',
        // flexWrap: '',
    },
    box:{
        height: 100,
        width: 100,
        borderWidth: 10,
    },
    b1:{
        backgroundColor: 'orange',
        borderColor: 'red',
        // position: 'relative',
        // top: 100,
        // alignSelf: 'flex-end',
        // flex: 1,  // Abarca 3/6
    },
    b2:{
        backgroundColor: 'lightgreen',
        borderColor: 'darkgreen',
        position: 'relative',
        top: 55,
        // left: 100,
        // alignSelf: 'center'
        // flex: 1,  // Abarca 2/6
    },
    b3:{
        backgroundColor: 'lightgray',
        borderColor: 'brown',
        // width: '100%'
        // flex: 2,  // Abarca 1/6
        // alignSelf: 'center'
    },
})