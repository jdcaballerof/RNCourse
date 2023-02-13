import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Animation1Screen } from '../screens/Animation1';
import { Animation2Screen } from '../screens/Animation2';
import { HomeScreen } from '../screens/Home';
import { SwitchesScreen } from '../screens/Switches';
import { AlertsScreen } from '../screens/Alerts';
import { TextInputsScreen } from '../screens/TextInputs';
import { PullToRefreshScreen } from '../screens/PullToRefresh';
import { SectionListScreen } from '../screens/SectionList';
import { ModalScreen } from '../screens/Modal';
import { View } from 'react-native';
import { InfiniteScrollScreen } from '../screens/InfiniteScroll';
import { SlidesScreen } from '../screens/Slides';
import { ThemeContext } from '../context/ThemeContext';
import { PokeDexMainScreen } from '../screens/Pokedex/MainScreen';
import { BusquedaScreen } from '../screens/Pokedex/Busqueda';

const Stack = createStackNavigator();

export const StackNav = () => {

  const { themeState: {colors} } = useContext(ThemeContext);


  return (
      <Stack.Navigator

          screenOptions={{
            cardOverlay: () => <View style={{flex: 1, backgroundColor: colors.background, opacity: 0.95}} ></View>,
            headerStyle: { backgroundColor: colors.background },
            headerTintColor: colors.primary,
            // cardStyle: {backgroundColor: 'red'}
          }}
      >
          <Stack.Screen name="HomeScreen" options={{title: 'homi', headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Animation1Screen" component={Animation1Screen} />
          <Stack.Screen name="Animation2Screen" component={Animation2Screen} />
          <Stack.Screen name="SwitchesScreen" options={{title: 'Switches'}} component={SwitchesScreen} />
          <Stack.Screen name="AlertsScreen" options={{title: 'Alerts'}} component={AlertsScreen} />
          <Stack.Screen name="TextInputsScreen" options={{title: 'Text Inputs', headerTintColor: 'gray' ,headerStyle:{backgroundColor: 'black',} }} component={TextInputsScreen} />
          <Stack.Screen name="PullToRefreshScreen" options={{title: 'Pull To Refresh'}} component={PullToRefreshScreen} />
          <Stack.Screen name="SectionListScreen" options={{title: 'SectionList'}} component={SectionListScreen} />
          <Stack.Screen name="ModalScreen" options={{title: 'Modal'}} component={ModalScreen} />
          <Stack.Screen name="InfiniteScrollScreen" options={{title: 'InfiniteScroll', headerShown: false}} component={InfiniteScrollScreen} />
          <Stack.Screen name="SlidesScreen" options={{title: 'Slides', headerShown: false }} component={SlidesScreen} />
          <Stack.Screen name="PokedexMainScreen" options={{title: 'PokedexMain', headerShown: false }} component={PokeDexMainScreen} />
          <Stack.Screen name="BusquedaScreen" options={{title: 'Busqueda', headerShown: false }} component={BusquedaScreen} />
      </Stack.Navigator>
  );
}