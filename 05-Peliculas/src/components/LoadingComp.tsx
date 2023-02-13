import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native';

interface Props {
    size?: number;
    color?: string;
}

export const LoadingComp = ( {size=50, color='red'}: Props ) => {

return (
   <View style={styles.container} >
     <ActivityIndicator size={size} color={color} />
   </View>
)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
  });