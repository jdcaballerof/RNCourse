import { useEffect, useState, useRef } from 'react'
import { Location } from '../interfaces/appInterfaces';

import Geolocation from '@react-native-community/geolocation';


export const useLocation = () => {

  const [hasLocation, setHasLocation] = useState(false);
  const [initPosition, setInitPosition] = useState<Location>( {
      latitude: 19.43,
      longitude: -122.4324,
  })
  const [userLocation, setUserLocation] = useState<Location>({
    longitude: 0,
    latitude: 0
  })
  const [routeLines, setRouteLines] = useState<Location[]>([])


    useEffect(() => {
        
        // Geolocation.getCurrentPosition(
        //     ({coords}) => {
        //       setInitPosition({
        //         latitude: coords.latitude,
        //         longitud: coords.longitude,
        //       });
        //       setHasLocation(true);
        //     },
        //     (err) => console.log({err}),
        //     );
        
        getUserLocation()
            .then( res => {
              setInitPosition(res)
              setUserLocation(res)
              setHasLocation(true)
              setRouteLines( routes => [ ...routes, res ] )
            } )
            
    }, [])
    
    const getUserLocation = (): Promise<Location> => new Promise( (resolve, reject) => {
        Geolocation.getCurrentPosition(
          
            ({coords}) => {
              resolve({
                latitude: coords.latitude, 
                longitude: coords.longitude
              })
            },

            err => reject({err}),
            
            { enableHighAccuracy: true }          
          )
      } )

      const watchId = useRef<number>()

      const followUser = () => {
        
        watchId.current = Geolocation.watchPosition(
          ({coords}) => {

            const actualLocation = { latitude: coords.latitude, longitude: coords.longitude } 

            setUserLocation(actualLocation)
            setRouteLines( routes => [ ...routes, actualLocation ] )

          },
          (err) => console.log(err), {
            enableHighAccuracy: true,
             distanceFilter: 10         // Cada cuantos metros notificar el movimiento del usuario
            }
        )

      }

      const stopFollowUser = () => {
        Geolocation.clearWatch(watchId.current!)
      }
    


  return {
    hasLocation,
    initPosition,
    userLocation,
    routeLines,
    followUser,
    stopFollowUser,
    getUserLocation,
  }
}
