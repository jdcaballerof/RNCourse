import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { TouchableEvilIcon } from '../components/TouchableEvilIcon';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {

  const { authState, signIn, logout } = useContext( AuthContext )


return (
   <View>
     <Text>SettingsScreen</Text>
     <Text> {JSON.stringify(authState, null, 4)} </Text>
     <Text></Text>
     { !authState.isLogged
        && <Button title='Sign In' onPress={signIn} color='green' />
     }
     { authState.isLogged
        && <Button title='Log Out' onPress={logout} color='red' />
     }
     { !!authState.favoriteIcon
        && <TouchableEvilIcon iconName={authState.favoriteIcon!} iconSize={200} />
     }
   </View>
)
}
