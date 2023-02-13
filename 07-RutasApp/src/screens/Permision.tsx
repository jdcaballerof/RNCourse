import { useNavigation } from '@react-navigation/native';
import React, {useContext} from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { check, PERMISSIONS, PermissionStatus, request } from 'react-native-permissions';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermisionScreen = () => { 

    const { navigate } = useNavigation<any>();

    const { permissions, askPermission } = useContext(PermissionsContext)

    const checkPermission = async() => {
        askPermission()
        
    }


return (
    <View style={ stl.container } >

        {/* <Button title='goto' onPress={() => navigate('Map')} /> */}
        <Text>PermisionScreen</Text>
        <Button title='Permiso' onPress={() => checkPermission()} />
        <Text>
            {JSON.stringify( permissions, null, 5 )}
        </Text>

    </View>
)
}

const stl = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})