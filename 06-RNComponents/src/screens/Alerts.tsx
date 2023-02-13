import React, {useContext} from 'react'
import { Alert, Button, Text, View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export const AlertsScreen = () => { 

  const { themeState: {colors} } = useContext(ThemeContext);

  const showAlert2 = () => {
    Alert.alert('Titulo de mi alerta', 
    'Este es el cuero de mi alerta, aca se puede decir todo lo necesario', 
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK', 
        onPress: () => console.log('OK Pressed')
      },
    ], {
      cancelable: true,
      onDismiss: () => {
        console.log('onDismis');
      },
    });
  }

  const showAlert3 = () => {
    Alert.alert('Alerta 3 botones', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }


return (
   <View style={{flex:1, backgroundColor: colors.background}} >
     <Text>AlertsScreen</Text>
     <View style={{margin: 15, }} >
      <Button title='Alerta 2B' onPress={ showAlert2 } />
      <View style={{height: 10, }} />
      <Button title='Alerta 3B' onPress={ showAlert3 } />
     </View>
   </View>
)
}
