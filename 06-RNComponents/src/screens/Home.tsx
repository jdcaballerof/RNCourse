import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react'
import { FlatList, Text,TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { MyBtnOpacity } from '../components/MyBtnOpacity';
import { ThemeContext } from '../context/ThemeContext';


interface MenuItem {
  name: string;
  icon: string;
  goTo: string;
  rotate?: number;
}

const menuItems: MenuItem[] = [
  {
    name: 'Anim 1',
    icon: 'control-play',
    goTo: 'Animation1Screen'
  },
  {
    name: 'Anim 2',
    icon: 'control-forward',
    goTo: 'Animation2Screen'
  },
  {
    name: 'Switch',
    icon: 'equalizer',
    goTo: 'SwitchesScreen',
    rotate: 90
  },
  {
    name: 'Alert',
    icon: 'exclamation',
    goTo: 'AlertsScreen',
  },
  {
    name: 'Text Inputs',
    icon: 'note',
    goTo: 'TextInputsScreen',
  },
  {
    name: 'Pull & refresh',
    icon: 'refresh',
    goTo: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list',
    goTo: 'SectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'layers',
    goTo: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll',
    icon: 'link',
    rotate: 45,
    goTo: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'map',
    goTo: 'SlidesScreen',
  },
  {
    name: 'Pokedex',
    icon: 'screen-tablet',
    goTo: 'PokedexMainScreen',
  },
  {
    name: 'Busqueda (R&M)',
    icon: 'magnifier',
    goTo: 'BusquedaScreen',
  },
]

export const HomeScreen = (  ) => {

  const { navigate } = useNavigation<any>(); 
  const { themeState:{colors}, setDarkTheme, setLightTheme } = useContext(ThemeContext)

  const renderItem = (i: MenuItem) => {
    if(!i.rotate) i.rotate = 0
    return(
      <TouchableOpacity onPress={ () => navigate( i.goTo )  } >
        <View style={{ 
          flexDirection: 'row',
          marginVertical: 5,
          // justifyContent: 'space-between'
        }} >
            <Text style={{transform: [{rotate: `${i.rotate}deg`}] }} > <Icon name={i.icon} size={20} color="#f00" /> </Text>
            <Text style={{color: colors.primary}} > {i.name} </Text>
            {/* <View style={{flex: 1}} />  Otra solución al espaciado (marginLeft) */}
            <Text style={{marginLeft: 'auto'}} > <Icon name='arrow-right-circle' size={20} color="#f00" /> </Text>
        </View>
      </TouchableOpacity>
    )
  }

return (
   <View style={{padding: 15, flex: 1, backgroundColor: colors.background}} >

      <Text style={{fontSize: 36, color: colors.primary}} >Home</Text> 

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 25 }} >
      
        <MyBtnOpacity label='Claro' onPress={setLightTheme} bgColor={colors.secondary}
          styleLabel={{fontWeight: '400'}}
          styleBg={{borderRadius: 18}} />

        <MyBtnOpacity label='Obscuro' iconName='arrow-right'  onPress={setDarkTheme} bgColor={colors.secondary} 
          styleLabel={{fontWeight: '400'}}
          styleBg={{borderRadius: 18}} />

      </View>

      {/* <Text>HomeScreen</Text>
      <Text> <Icon name="home" size={30} color="#000" /> </Text> */}

      <FlatList
        style={{ marginTop: 55}}
        keyExtractor={ i => i.name }
        data={ menuItems }
        renderItem={ ({item}) => renderItem(item) }
        ItemSeparatorComponent={ () => <View style={{width: '100%', height: 2, backgroundColor: colors.primaryTenue}} /> }
      />

   </View>
)
}
