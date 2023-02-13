import { StackScreenProps } from '@react-navigation/stack';
import React, {useEffect} from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../styles/globalStyles';


interface Props extends StackScreenProps<any, any>{}

export const Pagina3Screen = ( {navigation}: Props ) => {

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Button title='Volver' onPress={ () => navigation.goBack() } />
  //     )
  //   })

  // }, [])
  


return (
   <View style={styles.margin20h} >
     <Text>Pagina3Screen</Text>
     <Button title='Volver' onPress={ () => navigation.pop() } ></Button>
     <Button title='Ir a pag 1' onPress={ () => navigation.popToTop() } ></Button>

   </View>
)
}
