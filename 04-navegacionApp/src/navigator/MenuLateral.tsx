import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { SettingsScreen } from '../screens/Settings';
import { styles } from '../styles/globalStyles';
import { StackMain } from './StackMain';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();


  return (
    <Drawer.Navigator 
      drawerContent={ (props) => <MenuInterno {...props} />}
      screenOptions={{
          // drawerPosition: 'right'
          drawerStyle: {
              // backgroundColor: '#FFEEDE',
              backgroundColor: '#F5FDFF',
              width: 180,
            },
          drawerType:`${width >= 768 ? 'permanent':'front'}` ,
          // headerLeft: () => (          // Si no se define un header será un boton de hamburguesa
          //     <Text>Holaaa</Text>
          // )
        }}
    >

      <Drawer.Screen name="Bottom_Tabs" component={Tabs} options={{ title: 'Bottom Tabs' }} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />

    </Drawer.Navigator>
  );
}


// DrawerContentComponentProps obtenido de la documentación al pasar el mouse sobre drawerContent
const MenuInterno = ( { navigation } : DrawerContentComponentProps ) => {


  //* navigation.navigate puede redireccionar a cuarquier "ruta interna" por ejemplo: 
  // Bottom_Tabs, SettingsScreen    (Si ya estan renderizados se puede navegar a sus hijos)
  // - Tab1
  // - TopTab (Tab2);      ChatScreen ( Solo si ya se renderizo el TopTab), 
  // - StackMain (Tab3);   Pagina3Screen ( Solo si ya se renderizo el StackMain), 


  return (
    <DrawerContentScrollView>
      <View style={ styles.avatarContainer } >
        <Image 
          style={ styles.avatarImg }
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}} />
      </View>

      <View style={ styles.menuContainer } >

        <TouchableOpacity style={ styles.menuBoton } onPress={ () => navigation.navigate( "Bottom_Tabs" ) } >
          <Text style={ styles.menuText } >Bottom Taabs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.menuBoton } onPress={ () => navigation.navigate( "Pagina3Screen" ) } >
          <Text style={ styles.menuText } >pag3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ styles.menuBoton } onPress={ () => navigation.navigate( "SettingsScreen" ) } >
          <Text style={ styles.menuText } >Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  )
}

