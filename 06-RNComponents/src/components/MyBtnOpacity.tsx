import React from 'react'
import { Text,StyleSheet, View, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import {  } from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/SimpleLineIcons';


interface Props {
    bgColor?: string;
    fontColor?: string;
    label?: string;
    iconName?: string;
    iconSize?: number;
    height?: number;
    borderRadius?: number;
    styleLabel?: StyleProp<TextStyle>;
    styleBg?: StyleProp<TextStyle>;
    onPress?: () => void
}

export const MyBtnOpacity = ( {
    bgColor= 'purple',
    fontColor= '#fff',
    label,
    iconName= '',
    // iconName= 'arrow-right',
    iconSize= 20,
    styleLabel,
    styleBg,
    onPress

}: Props ) => { 


    const stl = StyleSheet.create({
        gnrlContainer:{
            backgroundColor: bgColor,
            borderRadius: 12,
            padding: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        label: {
            color: fontColor,
            fontSize: 18,
            fontWeight: '500',
            marginHorizontal: 20,
        },
    })

    const press = () => {
      !!onPress && onPress()
    }


return (
    <TouchableOpacity style={[stl.gnrlContainer, styleBg]} onPress={ press } >

        <Text style={[stl.label, styleLabel]} >{label}</Text>
            { !!iconName
                && <Text style={{marginLeft: 'auto', marginRight: 10}} > 
                    <Icon name={iconName} size={iconSize} color={fontColor} />
                </Text>
            } 

    </TouchableOpacity>
)
}

