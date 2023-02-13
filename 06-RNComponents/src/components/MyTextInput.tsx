import React, { useEffect, useState } from 'react'
import { Text, TextInput, StyleSheet, View, ViewStyle, StyleProp } from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';


interface Props {
    styleBG?: StyleProp<ViewStyle>;
    onDebounced: (value: string) => void;
}

export const MyTextInput = ( {styleBG, onDebounced}: Props ) => { 

    const [textValue, setTextValue] = useState('');
    
    const valorXbuscar = useDebouncedValue(textValue); 

    useEffect(() => {
      onDebounced(valorXbuscar)
    
    }, [valorXbuscar])
    
    

return (
    <View style={[stl.container, stl.sombra, styleBG]} >
        <TextInput 
            style={[ stl.input, {color: 'black'}]}
            placeholder='Buscar'
            placeholderTextColor='rgba(0,0,0, 0.35)'
            autoCorrect={false}
            value={textValue}
            onChangeText={ setTextValue }
        />
        <Text style={stl.icon} > 
            <Icon name='magnifier' size={25} color='orange' />
        </Text>
    </View>
)
}


const stl = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(230,230,230, 1.0)',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
    },
    input:{
        // backgroundColor: 'cyan',
        width: '100%',
        padding: 5,
        paddingLeft: 15,
        
    },
    icon: {
        position: 'relative',
        right: 40
    },

    sombra:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }
    
})