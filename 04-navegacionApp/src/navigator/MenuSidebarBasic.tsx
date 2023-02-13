import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, useWindowDimensions } from 'react-native';
import { SettingsScreen } from '../screens/Settings';
import { StackMain } from './StackMain';

const Drawer = createDrawerNavigator();

export const MenuSidebarBasic = () => {

    const { width } = useWindowDimensions();


  return (
    <Drawer.Navigator 
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
      <Drawer.Screen name="StackMain" options={{title:'Stack'}} component={StackMain} />
      <Drawer.Screen name="SettingsScreen" options={{title:'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
