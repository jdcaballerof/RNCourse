import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { Map } from '../components/Map';



export const MapScreen = () => { 


    

return (
    <View style={ {flex:1} } >
        {/* <Text>MapScreen</Text> */}
        <Map />
       
    </View>
)
}
