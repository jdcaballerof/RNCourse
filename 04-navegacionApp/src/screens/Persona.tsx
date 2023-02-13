import { StackScreenProps } from '@react-navigation/stack';
import React, {useEffect, useContext} from 'react'
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { StackProps } from '../navigator/StackMain';
import { styles } from '../styles/globalStyles';

// interface Params {
//     id: number;
//     nombre: string;
// }
interface Props extends StackScreenProps<StackProps, 'PersonaScreen'>{  };

export const PersonaScreen = ( { route, navigation }: Props) => {

  const { changeName } = useContext( AuthContext );
    
    const { margin20h, titulo } = styles 
    const params = route.params

    useEffect(() => {
      navigation.setOptions({
        title: params.nombre 
      })

      changeName(params.nombre)

    }, [])
    

return (
   <View style={margin20h} >
     <Text style={titulo} >{ JSON.stringify(params, null, 3) }</Text>
   </View>
)
}
