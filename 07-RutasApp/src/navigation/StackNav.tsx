import React, {useContext} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PermisionScreen } from '../screens/Permision';
import { MapScreen } from '../screens/Map';
import { Text, View } from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../screens/Loading';

const Stack = createStackNavigator();

export const StackNav = () =>  {

  const { permissions } = useContext( PermissionsContext );


  if ( permissions.locationStatus === 'unavailable' ) return <LoadingScreen />
  // if ( permissions.locationStatus === 'blocked' ) return <Text>Acceso Bloqueado</Text>


  return (
    <Stack.Navigator
        screenOptions={{
            // headerShown: false,
            // header: () => <View style={{backgroundColor: 'red', height: 30, width: '80%'}} ></View>
            cardStyle:{
                backgroundColor: 'pink'
            }
        }}
    >

        {
          (permissions.locationStatus === 'granted')
            ? <Stack.Screen name="Map" component={MapScreen} />
            : <Stack.Screen name="Permision" options={{headerShown: false}} component={PermisionScreen} />
        }

    </Stack.Navigator>
  );
}
