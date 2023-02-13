import React, {useContext} from 'react';
// import Icon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
// import Icon from 'react-native-vector-icons/Icon';
import { Text, View } from 'react-native';
import { colores, styles } from '../styles/globalStyles';
import { TouchableEvilIcon } from '../components/TouchableEvilIcon';
import { TouchableSLIcon } from '../components/TouchableSLIcon';
import { AuthContext } from '../context/AuthContext';


export const Tab1Screen = () => { 
  
  const { favIcon } = useContext( AuthContext );
  
  
  return (
    <View>

    <Text style={ {...styles.titulo, margin: 10, marginBottom: 30} } >Tab1Screen iconos</Text>

      <View style={ [styles.tabConainter, { flexWrap: 'wrap' }] }>

        <TouchableEvilIcon iconName='like' />
        <TouchableEvilIcon iconName='heart' />
        <TouchableEvilIcon iconName='user' />
        <TouchableEvilIcon iconName='undo' />
        <TouchableEvilIcon iconName='navicon' />
        <TouchableEvilIcon iconName='spinner' />
        <TouchableSLIcon iconName='compass' iconColor={colores.secundario} />
        <TouchableSLIcon iconName='like' iconColor={colores.secundario} />
        <TouchableSLIcon iconName='heart' iconColor={colores.secundario} />
        <TouchableSLIcon iconName='refresh' iconColor={colores.secundario} />
        <TouchableSLIcon iconName='user' iconColor={colores.secundario} />
        <TouchableSLIcon iconName='mustache' iconColor={colores.secundario} favIcon={favIcon} />
      </View>
      
   </View>
)
}
