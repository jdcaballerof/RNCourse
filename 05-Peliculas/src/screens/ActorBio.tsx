import React, {useState, useEffect} from 'react'
import { Image, Text, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import movieDB, { movieDBGeneral } from '../api/movieDB';
import { ActorMovies, ActorResp, Cast } from '../interfaces/movieDB';
import { RootStackProps } from '../navigation/NavStack';
import { invertirFecha } from '../helpers/fechas';

import Icon from 'react-native-vector-icons/EvilIcons';



interface Props extends StackScreenProps<RootStackProps, "ActorBioScreen"> {};

export const ActorBioScreen = ( { route, navigation }: Props ) => {
  
    const actorCast = route.params
 
    const uri = `https://image.tmdb.org/t/p/w500/${actorCast.profile_path}`

    const [actorInfo, setActorInfo] = useState<ActorResp>()
    const [actorInfo2, setActorInfo2] = useState<ActorMovies>()

    useEffect(() => {
        movieDBGeneral.get<ActorResp>(`/person/${actorCast.id}`)
            .then( res => setActorInfo(res.data) )
        movieDBGeneral.get<ActorMovies>(`/person/${actorCast.id}/credits`)
            .then( res => setActorInfo2(res.data) )
      
            actorInfo?.birthday && invertirFecha(actorInfo?.birthday!);
    }, [])
    

return (
    <ScrollView>
    <View>
        <TouchableOpacity style={estilos.backBtn} onPress={ navigation.goBack } >
          <Text style={{}} > <Icon name="chevron-left" size={50} color={'#F8C10C'} /> </Text>
          <Text style={estilos.bg} > ActorBioScreen </Text>
        </TouchableOpacity>

        <Text style={{color: 'black'}} >  {actorCast.name}  </Text>
        <Text style={{color: 'black'}} >  {actorInfo?.birthday}  </Text>
        <Image style={estilos.imagen} source={{uri}} />

        {/* <Text> {JSON.stringify(actorInfo, null, 4)} </Text> */}
        {/* <Text>  ---------------------  </Text> */}
        {/* <Text> {JSON.stringify(actorInfo2, null, 4)} </Text> */}

        <Text style={{color: 'black'}} >    - {actorInfo2?.cast.map( g => g.original_title ).slice(0, 50).join(" -   ")  } </Text>
    </View>
    </ScrollView>
)
}



const estilos = StyleSheet.create({
    contenedor: { 
      backgroundColor: 'white',
      flexDirection: 'row',
      borderRadius: 10,
      padding: 5,
  
      shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
  
        elevation: 4,
  
    },
    titulo: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
    },
    subTitulo: {
      color: 'black',
      fontSize: 16,
    },
    imagen: {
      width: 250, 
      height: 250, 
      borderRadius: 10,
    },
    backBtn: {
      // position: 'absolute',
      justifyContent: 'flex-start',
      marginBottom: 10,
      top: 10,
    },
    bg: {
      // backgroundColor: 'red',
      color: 'black',
      position: 'absolute',
      left: 45,
      top: 10
      
    }
  })
  