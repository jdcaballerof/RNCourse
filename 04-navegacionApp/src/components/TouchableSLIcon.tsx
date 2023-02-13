import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colores } from '../styles/globalStyles';

interface Props {
    iconName: string;
    iconSize?: number;
    iconColor?: string;
    favIcon?: any;
}

export const TouchableSLIcon = ( {iconName, iconColor=colores.primario_bold, iconSize=100, favIcon}: Props ) => {

return (
  <TouchableOpacity onPress={ () => favIcon(iconName) } >
    <Text> <Icon name={iconName} size={iconSize} color={iconColor} /> </Text>
  </TouchableOpacity>
)
}