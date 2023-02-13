import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#2E4C69',
        paddingHorizontal: 20,
    },
    texto:{
        fontSize: 26,
        color: 'lightgray',
    },
    calcContainer:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    resultado:{
        fontSize: 54,
        color: 'white',
        textAlign: 'right',
    },
    resultadoSmall:{
        fontSize: 30,
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'right',
    },
    simbolStyle:{
        backgroundColor: 'rgba(256,256,256,0.1)',
        color: 'rgba(255, 255, 255, 0.7)',
        width: 30,
        borderRadius:10,
        fontSize: 30,
        textAlign: 'center',
        // position: 'absolute',
        // textAlign: 'right',
    },

    teclado:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 20,
        // flexDirection
        // alignItems: '',
        // alignSelf
        // flexWrap
    },

    btn:{
        backgroundColor: 'white',
        color: 'blue',
        height: 80,
        width: 80,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 7,
    },
    btn_doble:{
        width: 175,
    },
    c2:{
        backgroundColor: '#FFB53D'
    },
    c3:{
        backgroundColor: '#9B9B9B'
    },
    numero:{
        fontSize: 40,
        fontWeight: '500',
    },
    sim_doble:{
        fontSize: 55,
    },
    
})

//     Gris obscuro: #2D2D2D
//     Naranja #FF9427
//     backgroundColor:'#28425B',    *******
//     backgroundColor:'#28C4D9',
//     backgroundColor: 'lightgreen',
//     backgroundColor: 'lightgray',
//     borderColor: 'brown',