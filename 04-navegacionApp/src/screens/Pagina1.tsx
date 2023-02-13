import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {StackScreenProps} from '@react-navigation/stack'
import { styles } from '../styles/globalStyles';

interface Props extends StackScreenProps<any, any>{  };

export const Pagina1Screen = ( {navigation}: Props ) => {


// Para navegar es al name de Stack.Screen
    // <Stack.Navigator>
    //   <Stack.Screen name="Pagina1Screen" component={ Pagina1Screen } />
return (
   <View style={styles.margin20h} >
     <Text>Pagina1Screen</Text>
     <Text></Text>
     <Button title='Ir a pag 2' onPress={ () => navigation.navigate('Pagina2Screen')} ></Button>
     {/* <Button title='Ir a personaa' onPress={ () => navigation.navigate('PersonaScreen')} ></Button> */}
    
    <Text>Navegar con argumentos/props</Text>

    <View style={{flexDirection: 'row', justifyContent: 'center'}} >
      <TouchableOpacity style={styles.botonG} onPress={ () => navigation.navigate('PersonaScreen', {id: 1, nombre: 'Peter'}) } >
        <Text>Peter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{...styles.botonG, backgroundColor: '#fff321'}} onPress={ () => navigation.navigate('PersonaScreen', {id: 2, nombre: 'David'}) } >
        <Text>David</Text>
      </TouchableOpacity>
    </View>

   </View>
)
}
