import React, {useContext} from 'react'
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { AuthContext } from '../context/AuthContext';
import { colores } from '../styles/globalStyles';

interface Props {
    iconName: string;
    iconSize?: number;
    iconColor?: string;
}

export const TouchableEvilIcon = ( {iconName, iconColor=colores.primario_bold, iconSize=100}: Props ) => {

  const { favIcon } = useContext( AuthContext );


return (
  <TouchableOpacity onPress={ () => favIcon(iconName) } touchSoundDisabled={false} >
    <Text> <Icon name={iconName} size={iconSize} color={iconColor} /> </Text>
  </TouchableOpacity>
)
}
