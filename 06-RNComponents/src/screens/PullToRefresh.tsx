import React, {useState} from 'react'
import { Text, ScrollView, RefreshControl, View } from 'react-native';

export const PullToRefreshScreen = () => { 

    const [refreshing, setRefreshing] = useState(false);
    const [showMsg, setShowMsg] = useState(false)

    const onRefresh = () => {
      setRefreshing(true);
    //   console.log('Cargando...')
      
    if (showMsg) {
      setTimeout(() => {
        setRefreshing(false);
        setShowMsg(false)
        // console.log('Terminamos')
      }, 1200);
      return
    } 
      setTimeout(() => {
        setRefreshing(false);
        setShowMsg(true)
        // console.log('Terminamos')
      }, 5500);
    }
return (
    <ScrollView refreshControl={ <RefreshControl 
        refreshing={refreshing} 
        onRefresh={onRefresh}
        progressViewOffset={50} 
        // progressBackgroundColor='red'                           // Color del fondo
        colors={['gray', 'pink', 'red', 'darkred', 'black'].reverse()}   // Colores de la flecha
    /> }>
        <View>
            <Text>PullToRefreshScreen</Text>
            {showMsg
              && <Text style={{color: 'black', fontSize: 26, margin: 15}} >Holaaaa</Text>
              
            }
        </View>
    </ScrollView>
)
}
