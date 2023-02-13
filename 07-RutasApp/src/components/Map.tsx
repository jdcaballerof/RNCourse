import React, { useEffect, useRef } from 'react'
import { Text, View } from 'react-native';
import { Location } from '../interfaces/appInterfaces';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../screens/Loading';
import { MyBtnOpacity } from './MyBtnOpacity';



export const Map = ( ) => { 

    const { hasLocation, initPosition, userLocation, getUserLocation, followUser, stopFollowUser } = useLocation();

    const mapViewRef = useRef<MapView>()

    const centerPosicion = async() => {

        const location = await getUserLocation()
        mapViewRef.current?.animateCamera({
            center: location
        })
    }

    useEffect(() => {
      followUser()
    
      return () => {
        // Todo: Cancelar seguimiento al desmontar componente
        stopFollowUser()
      }
    }, [])

    useEffect(() => {
        const { latitude, longitude } = userLocation

        mapViewRef.current?.animateCamera({
            center: {latitude, longitude},
            zoom: 15    //entre 2 y 20
        })
      
    }, [userLocation])
    
    


    if( !hasLocation ) return <LoadingScreen />


return (
    <View style={ {flex:1} } >

        <View style={ {flex:1, margin: 15 } } >

            <MapView
                ref={ element => mapViewRef.current = element! }
                style={ {flex:0.75 } }
                showsUserLocation
                // provider={ PROVIDER_GOOGLE }        // FORZAR QUE SEAN MAPS DE GOOGLE Y NO SE iOS
                initialRegion={{
                    latitude: initPosition.latitude,
                    longitude: initPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker 
                    // image={ require('../assets/...') }
                    coordinate={{
                        latitude: 19.429239,
                        // latitude: -99.15,
                        // longitude: 37.78825,
                        longitude: -99.156113,
                    }}
                    title='Titulo'
                    description='Esto es mi descripcion'
                />
            </MapView>

            <View style={ {flexDirection: 'row-reverse', position: 'relative', bottom: 55, right: 15  } } >
                <MyBtnOpacity iconName='target' bgColor='rgba(128, 0, 128, 0.55)' fontColor='black' 
                    onPress={ () => centerPosicion() } 
                />
            </View>

        </View>

    </View>
)
}
