import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieDB';


interface Props {
    movie: Movie;
    height?: number; 
    width?: number;
    itemTop?: number;
}

export const Card = ( {movie, height=350, width= 240, itemTop=0}: Props ) => {

    const {navigate} = useNavigation<any>();

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}` //  uri == url

return (
   <View style={{ marginLeft: 7, alignItems:'center', top: itemTop}} >
    <TouchableOpacity activeOpacity={0.55} style={[ estilos.imgContainer, {height, width} ]} 
    // Se envia por la ruta (tipo Props) el obj "movie"
        onPress={ () => navigate('DetallesScreen', movie) } 
    >
        <Image style={estilos.imagen} source={{ uri }} />
    </TouchableOpacity>
   </View>
)
}


const estilos = StyleSheet.create({
    imagen: {
        flex: 1,
        borderRadius: 20,
    },
    imgContainer: {
        // marginHorizontal: 20,
        borderRadius: 20,
        padding: 2,
        // height: 250, 
        // width: 180,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        
        elevation: 14,

    }
})
