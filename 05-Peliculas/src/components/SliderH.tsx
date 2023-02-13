import React from 'react'
import { Text, View, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieDB';
import { Card } from './Card';


interface Props {
    movies: Movie[];
    titulo?: string;
    colores?: any;
}

export const Slider_H = ( { titulo='', movies, colores }: Props ) => {

  const h = !!titulo ? 280 : 250
  const pT = !!titulo ? 0 : 15
//   const color = ( colores?.c1.includes('00') && colores?.c2.includes('00') ) ? 'white': 'black'
  const color = (  colores?.c2.includes('00') ) ? 'white': 'black'


return (
    <View style={{ height: h, paddingTop: pT }} >
        {!!titulo
            &&<Text style={{ fontSize: 30, fontWeight: '900', color, marginLeft: 10 }} >{titulo}</Text>
        }
        <FlatList
        data={ movies }
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ (item) => item.id.toString()  }
        renderItem={ ({item}) => <Card movie={ item } height={200} width={120} /> }
        />
    </View>
)
}
