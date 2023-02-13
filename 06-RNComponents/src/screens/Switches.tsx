import React, { useEffect, useState } from 'react'
import { Platform, Switch, Text, View } from 'react-native';
import { SwitchMine } from '../components/SwitchMine';

export const SwitchesScreen = () => { 

  const [sws, setSws] = useState({
    sw1: false,
    sw2: false,
    sw3: false,
    sw4: false,
  })

  const setSwitch = (sw: string, val: boolean) => {
    setSws( obj => ({
      ...obj,
      [sw]: val
    }) )
  }

  /*
  !No se setean los estados dentro del componente <Switch>, solo se setea el estado de sws  
  Para que esto funcione se deben pasar el setState al componente <Switch>
  useEffect(() => {
    if(sws.sw1) setSws({
      sw1: true,
      sw2: true,
      sw3: true,
      sw4: true,
    })
  }, [sws.sw1])
  */
  
  

return (
   <View>
     <Text>SwitchesScreen</Text>
     
     <SwitchMine isOn={sws.sw1} onChange={ val => setSwitch( 'sw1', val ) } />
     <SwitchMine isOn={sws.sw2} onChange={ val => setSwitch( 'sw2', val ) } label='a1' />
     <SwitchMine isOn={sws.sw3} onChange={ val => setSwitch( 'sw3', val ) } label='a2' />
     <SwitchMine isOn={sws.sw3} onChange={ val => setSwitch( 'sw4', val ) } label='a3' />

     <Text style={{color: 'black'}}> {JSON.stringify( sws, null, 5 )} </Text>
   </View>
)
}
