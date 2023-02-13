import React, {useEffect} from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';


export const Pagina2Screen = () => {

  const navigator = useNavigation<any>();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola',
      headerBackTitle: ''
    })

  }, [])
  


return (
   <View style={ styles.margin20h } >
     <Text>Pagina2Screen</Text>
     <Button title='Ir a pag 3' onPress={ () => navigator.navigate('Pagina3Screen') } ></Button>

   </View>
)
}
