import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';
import { Tab1Screen } from '../screens/Tab1';
import { Tab2Screen } from '../screens/Tab2';
import { Tab3Screen } from '../screens/Tab3';
import { colores, styles } from '../styles/globalStyles';
import { StackMain } from './StackMain';
import { TopTab } from './TopTabs';

const Tab = createBottomTabNavigator();

export const Tabs = () => {

  const tabBar = () => {
    return(
      <View style={ styles.tabConainter} >
        <TouchableOpacity style={ styles.botonTab} onPress={ () => console.log('b1') }>
          <Text style={styles.tabIcon} >&#129409;</Text>
          <Text>Tab1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.botonTab} onPress={ () => console.log('b2') }>
          <Text style={styles.tabIcon} >&#8986;</Text>
          <Text>Tab2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.botonTab} onPress={ () => console.log('b3') }>
          <Text style={styles.tabIcon} >&#9410;</Text>
          <Text>Tab3</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const icon = (icon:string, props: any) => {
    const { color } = props
    return <Text style={[styles.tabIcon, {color}]} >{icon}</Text>
  }


  return (
    <Tab.Navigator 
      // tabBar={ tabBar }
      initialRouteName='TopTab'
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={{
        header: ()=> (null),
        // tabBarIcon: ()=> <Text style={styles.tabIcon} >&#9410;</Text>  ,  // Icono para todos
        tabBarActiveBackgroundColor: colores.primario,
        tabBarActiveTintColor: colores.secundario,
        tabBarStyle: {
          borderTopColor: 'cyan',
          borderTopWidth: 0,        // Estas 2 props en 0 para quitar la linea
          elevation: 0,
          
        },
        tabBarLabelStyle:{
          fontSize: 14
        },

      }}
    >
      <Tab.Screen name="Tab1Screen" component={Tab1Screen}
        options={{ title: 'Tab1', tabBarIcon: (props) => icon('T1', props) }}  
        />

      <Tab.Screen name="TopTab" component={TopTab}
        options={{ title: 'TopTab', tabBarIcon: (p) => icon('👽', p) }}  
        />

      <Tab.Screen name="StackMain" component={StackMain}
        options={{ title: 'Stack' }}  
        />

    </Tab.Navigator>
  );
}