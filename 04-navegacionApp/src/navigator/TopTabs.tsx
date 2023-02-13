import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumScreen } from '../screens/Album';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactosScreen } from '../screens/Contactos';
import { colores, styles } from '../styles/globalStyles';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {

    const icon = (icon:string, props: any) => {
        const { color } = props
        return <Text style={[styles.tabIcon, {color, fontSize:18 }]} >{icon}</Text>
      }


  return (
    <Tab.Navigator 
        sceneContainerStyle={{
            // backgroundColor: 'navy'
        }}
        screenOptions={{
            tabBarShowIcon: true,
            tabBarActiveTintColor: colores.secundario,
            tabBarInactiveTintColor: colores.unselected,
            tabBarPressColor: colores.primario,
            tabBarIndicatorStyle: {
                backgroundColor: colores.secundario,
            },
            tabBarStyle:{
                shadowColor: 'transparent',
                // elevation: 0
            }            
        }}
    >

      <Tab.Screen name="ChatScreen" component={ChatScreen} 
        options={{ title: 'Chat' }} 
        />

      <Tab.Screen name="ContactosScreen" component={ContactosScreen} 
        options={{ 
            title: 'Contacto',  
            // tabBarIcon: (p) => icon('Contct', p) 
        }} 
        />

      <Tab.Screen name="AlbumScreen" component={AlbumScreen} 
        options={{ title: 'Album' }} 
        />

    </Tab.Navigator>
  );
}