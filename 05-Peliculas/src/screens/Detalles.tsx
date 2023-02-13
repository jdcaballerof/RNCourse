import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, {useState} from 'react'
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackProps } from '../navigation/NavStack';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { DetallesDePeli } from '../components/DetallesDePeli';

import Icon from 'react-native-vector-icons/EvilIcons';


const { height } = Dimensions.get('screen')

interface Props extends StackScreenProps<RootStackProps, "DetallesScreen"> {};

export const DetallesScreen = ( {route, navigation}: Props ) => {

  const [colores, setColores] = useState({
    c1: 'red', 
    c2: 'transparent'
  })
//todo: Pasar al context
  const color = (  colores.c2.includes('00') ) ? 'white': 'black'

  const movie = route.params  

  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}` //  uri == url

  const { cast, isLoading, detallesMovie } = useMovieDetails(movie.id);

return (
   <ScrollView style={{backgroundColor: colores.c2}} >
     {/* <Button title='Prev' onPress={ () => { navigate('HomeScreen') } } />
     <Text>DetallesScreen</Text> */}

     <View  >    
        <View style={[ estilos.imgContainer ]} >
          <Image style={estilos.imagen} source={{ uri }} />
        </View>
     </View>

     <View style={ estilos.descripcion } >
        <Text style={ {color} } >{ movie.original_title }</Text>
        <Text style={ {...estilos.titulo, color} } >{ movie.title }</Text>
     </View>
     
     <DetallesDePeli isLoading={isLoading} cast={cast} detallesMovie={detallesMovie!} setColores={setColores} color={color} />

     <TouchableOpacity style={estilos.backBtn} onPress={ navigation.goBack } >
      <Text> <Icon name="chevron-left" size={50} color={'#F8C10C'} /> </Text>
     </TouchableOpacity>


     {/* <Text>{ JSON.stringify(movie, null, 5) }</Text> */}

   </ScrollView>
)
}


const estilos = StyleSheet.create({
  titulo: {
    // color: 'black',
    fontSize: 30,
  },
  backBtn: {
    position: 'absolute',
    top: 10,
  },
  descripcion: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  imagen: {
      flex: 1,
      // borderRadius: 20,
  },
  imgContainer: {
      // borderRadius: 20,
      height: height * 0.66, 
      width: '100%',
      overflow: 'hidden',
      borderBottomEndRadius: 35,
      borderBottomStartRadius: 35,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,

      // shadowColor: "#000",
      // shadowOffset: {
      //     width: 0,
      //     height: 7,
      // },
      // shadowOpacity: 0.41,
      // shadowRadius: 9.11,
      
      // elevation: 14,

  },
})