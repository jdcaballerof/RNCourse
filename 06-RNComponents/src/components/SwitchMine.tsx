import React, { useState } from 'react'
import { Platform, Switch, Text, View } from 'react-native';


interface Props {
  isOn: boolean;
  label?: string;
  onChange: ( estado: boolean ) => void 
}

export const SwitchMine = ( {isOn, label, onChange}: Props ) => {

  // const toggleSwitch = () => setIsOn( (s) => !s );
    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
      setIsEnabled( s => !s );
      onChange( !isEnabled ); // Toma el estado anterior por eso se manda el negado
    }


  return (
    <View style={{ flexDirection: 'row' }} >
      <Text>{label}</Text>
      <Switch
        style={{ 
          // marginLeft: 'auto'
        }}
        trackColor={{ true: 'cyan', false: 'gray' }}
        // thumbColor={isEnabled ? 'red' : 'black'}
        thumbColor={ (Platform.OS === 'android') ? '#999' : '' }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
   </View>
  )
}
