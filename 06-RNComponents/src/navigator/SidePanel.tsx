import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SettingsScreen } from '../screens/Settings';
import { StackNav } from './StackNav';


const Drawer = createDrawerNavigator();

export const SidePanel = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: 'lightsteelblue',
              paddingTop: 80,
              width: 180,
              borderTopEndRadius: 20,
              borderBottomEndRadius: 20,
            },
            drawerActiveBackgroundColor: 'lightsteelblue',
            drawerActiveTintColor: 'white',
          }}
          // drawerContent={() => <View style={{backgroundColor: 'lightsteelblue', flex: 1, borderRadius: 20}} >
          // </View>}
          
        >
          {/* <Drawer.Screen name="HomeScreen" options={{title: 'homi'}} component={HomeScreen} /> */}
          <Drawer.Screen name="StackNav" options={{title: 'Stack'}} component={StackNav} />
          <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />

          {/* 
          <Drawer.Screen name="Animation1Screen" options={{title: 'Anim1'}} component={Animation1Screen} />
          <Drawer.Screen name="Animation2Screen" options={{title: 'Anim2'}} component={Animation2Screen} />
          <Drawer.Screen name="SwitchesScreen" options={{title: 'Switches'}} component={SwitchesScreen} />
          <Drawer.Screen name="AlertsScreen" options={{title: 'Alerts'}} component={AlertsScreen} />
          <Drawer.Screen name="TextInputsScreen" options={{title: 'Text Inputs'}} component={TextInputsScreen} />  */}
        </Drawer.Navigator>
      </NavigationContainer>
  );
}