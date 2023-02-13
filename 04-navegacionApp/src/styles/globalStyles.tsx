import { StyleSheet } from "react-native";

export const colores = {
    // primario: 'rgba(0,255,255, 0.25)',
    primario: 'cyan',
    primario_bold: '#12B3B3',
    secundario: '#FF19C2',
    terciario: '#FFDA19',
    terciario_bold: '#B39709',
    unselected: 'rgba(28, 28, 30, 0.5)'
}


export const styles = StyleSheet.create({
    margin20h:{
        marginHorizontal: 20
    },
    titulo: {
        fontSize: 30,
        fontWeight: "700",
        color: 'navy', 
    },
    botonG:{
        backgroundColor: 'cyan',
        width: 80,
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    botonTab:{
        // backgroundColor: 'cyan',
        width: 120,
        height: 60,
        // padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // margin: 10
    },
    tabConainter:{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around', 
        // alignItems: 'center',
        // marginVertical: 15
    },
    tabIcon:{
        fontSize: 25,
        fontWeight: "900",
        top: -3
        
    },
    avatarImg:{
        width: 100, 
        height: 100, 
        borderRadius: 50,
    },
    avatarContainer:{
        alignItems: 'center', 
        marginVertical: 15
    },
    menuContainer: {
        marginHorizontal: 20
    },
    menuBoton: {
        marginTop: 10,
    },
    menuText: {
        color: 'black',
        fontSize: 20,
    },
})
