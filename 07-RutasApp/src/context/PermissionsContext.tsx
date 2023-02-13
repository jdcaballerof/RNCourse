import React, {createContext, useState, useEffect} from 'react'
import { AppState, Platform } from 'react-native';
import { check, openSettings, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';

export interface PermissionState {
    locationStatus: PermissionStatus
    // Aca se añadiria los permisios que fuesen requeridos
}

export const permissionInitState: PermissionState = {
    locationStatus: 'unavailable',
    // Aca se añadiria el status de los permisios requeridos
}

interface ProviderValues {
    permissions: PermissionState,
    askPermission: () => void,
    checkPermission: () => void
}


export const PermissionsContext = createContext( {} as ProviderValues );


export const PermissionsProvider = ( { children }: any ) => {

    const [permissions, setPermissions] = useState( permissionInitState )   

    useEffect(() => {
        AppState.addEventListener('change', estado => {

            if( estado !== 'active') return;

            checkPermission();
        })
    }, [])
    
    
    const askPermission = async() => {
        let status: PermissionStatus
        
        if( Platform.OS === 'ios' ) {
            // status =await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE ) // Para checar si tiene el permiso
            status =await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE ) // Para requerir el permiso
        } else {
            // status =await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION )
            status =await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION )
        }
        
        if( status === 'blocked' ){
            openSettings();
        }

        setPermissions({
            ...permissions,
            locationStatus: status
        })
    }

    const checkPermission = async() => {
        let status: PermissionStatus
        
        if( Platform.OS === 'ios' ) {
            status =await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE ) // Para checar si tiene el permiso
            // status =await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE ) // Para requerir el permiso
        } else {
            status =await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION )
            // status =await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION )
        }

        setPermissions({
            ...permissions,
            locationStatus: status
        })
    }


    return (
        <PermissionsContext.Provider value={{
            permissions,
            askPermission,
            checkPermission
        }} >
            {children}
        </PermissionsContext.Provider>
    )
}
