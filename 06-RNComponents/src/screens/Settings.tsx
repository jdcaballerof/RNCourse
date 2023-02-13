import React, {useContext} from 'react'
import { Text, View } from 'react-native';
import { MyBtnOpacity } from '../components/MyBtnOpacity';
import { ThemeContext } from '../context/ThemeContext';

export const SettingsScreen = () => { 

  const { setDarkTheme, setLightTheme, themeState:{colors} } = useContext(ThemeContext)

return (
  <View style={{padding: 15, flex: 1, backgroundColor: colors.background }} >
    <Text style={{fontSize: 36, marginBottom: 15, color: colors.primary }} >Settings</Text>

    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} >
      
      <MyBtnOpacity label='Claro' onPress={setLightTheme}
        styleLabel={{fontWeight: '400'}}
        styleBg={{borderRadius: 18}} />

      <MyBtnOpacity label='Obscuro'  onPress={setDarkTheme} 
        styleLabel={{fontWeight: '400'}}
        styleBg={{borderRadius: 18}} />

    </View>
   
  </View>
)
}
