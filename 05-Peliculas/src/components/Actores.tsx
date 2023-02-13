import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Cast } from '../interfaces/movieDB';


interface Props {
    actor: Cast;
}

export const Actores = ( { actor }: Props ) => {

  const {navigate} = useNavigation<any>();

  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`

return (
  <TouchableOpacity activeOpacity={.6} onPress={ () => navigate('ActorBioScreen', actor) } >
    <View style={{ paddingTop: 5, paddingBottom: 10, paddingLeft: 20 }} >
      <View style={ estilos.contenedor } >
        {!!actor.profile_path
            && <Image style={estilos.imagen} source={{uri}} />
          }
        <View>
          <Text style={estilos.titulo} > { actor.name } </Text>
          <Text style={estilos.subTitulo} > { actor.character } </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
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
    width: 50, 
    height: 50, 
    borderRadius: 10,
  }
})
