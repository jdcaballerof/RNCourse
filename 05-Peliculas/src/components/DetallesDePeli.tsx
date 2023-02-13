import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { invertirFecha } from '../helpers/fechas';
import { Cast, MovieDetalles } from '../interfaces/movieDB';

import currencyFormatter from 'currency-formatter'
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actores } from './Actores';
import { getImageColors } from '../helpers/getImageColors';


interface Props {
    isLoading: Boolean;
    detallesMovie: MovieDetalles;
    cast: Cast[];
    color: string;
    setColores: any;
}

export const DetallesDePeli = ( {isLoading, detallesMovie:movie, cast, setColores, color}: Props ) => {

    
    useEffect(() => {

        const myFunc = async() => {
            if (Boolean( movie) && Boolean( movie.poster_path)) {
                const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                const [ c1, c2 ] = await getImageColors(uri)
    
                setColores({c1, c2});
            }
        }

        myFunc()
    }, [movie])
    

    if(isLoading) return <ActivityIndicator size={30} color='gray' style={{marginTop: 10}} />

    const starColor = movie.vote_average > 7.5 ? '#F8C10C': color;

return (
   <View style={{marginBottom: 30  }}>
        {/* <Text>DetallesDePeli</Text> */}
        <View style={{ flexDirection: 'row', flexWrap:'wrap' , marginHorizontal: 15}} >
            <Text style={{color,}} > 
                <Icon name="star" size={18} color={starColor} /> 
                {movie.vote_average.toFixed(1) } / 10 
            </Text>
            <Text style={{color,}} >    - {movie.genres.map( g => g.name ).join("   ")  } </Text>
            <Text style={{color,}} > Fecha de estreno: { invertirFecha(movie.release_date) }</Text>
        </View>


        {/* <Actores actor={ cast[0] } /> */}
        <Text style={{fontSize: 26, color, marginHorizontal: 15}}> Cast </Text>
        <FlatList
            data={ cast }
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={ (item) => item.id.toString()  }
            renderItem={ ({item}) => <Actores actor={ item } /> }
        />


        <View style={{ marginHorizontal: 15 }} >
            <Text style={{ fontSize: 26, color }}> Historia </Text>
            <Text style={{color}} > {movie.overview} </Text>

            <Text style={{ fontSize: 18, color, marginTop: 10 }}> Presupuesto </Text>
            <Text style={{color}} > {currencyFormatter.format(movie.budget, { code: 'USD' })} </Text>
        </View>

        {/* <Text style={{}} > {currencyFormatter.format(movie.budget, {
            symbol: '',
            decimal: '.',
            thousand: ',',
            precision: 3,
            format: '%s %v' // %s is the symbol and %v is the value
            })} 
        </Text> */}



   </View>
)
}


const estilos = StyleSheet.create({
    titulo: {
      color: 'black',
      fontSize: 30,
    },
})