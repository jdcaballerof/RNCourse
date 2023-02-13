import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import { LoadingComp } from '../components/LoadingComp';
import { useMovies } from '../hooks/useMovies';
import { Slider_H } from '../components/SliderH';
import { CarouselMain } from '../components/CarouselMain';
import { GradienteBg } from '../components/GradienteBg';
import { createIconSet } from 'react-native-vector-icons';
import { getImageColors } from '../helpers/getImageColors';
import { GradientBackground } from '../components/GradientBackground';

export interface Colors {
  c1: string,
  c2: string,
}

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets();
  
  // console.log(width)
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();
  
    const [prevCol, setPrevCol] = useState<Colors>({
      c1: 'transparent',
      c2: 'transparent',
    })
    const [colores, setColores] = useState<Colors>({
      c1: 'transparent',
      c2: 'transparent',
    })
    
    // todo: Usar contexto para pasar y setear los colores, tambien 'color' de Detalles
      const setBGColors = async(i: number) => {
        setPrevCol(colores)
        const movie = nowPlaying[i]
        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        const [ c1, c2 ] = await getImageColors(uri)
        // console.log(movie.title, {c1, c2});
        setColores({c1, c2});
      }
    
      useEffect(() => {
        if(nowPlaying.length > 0){
          setBGColors(0)
        }
      
      }, [nowPlaying])

  if(isLoading) return <LoadingComp size={100} color='cyan' /> 
  


return (
  <ScrollView>
      <GradientBackground colores={colores} prevColores={prevCol} setPrevColores={setPrevCol} >


    <View style={{ marginTop: top+10 }} >
      
      <CarouselMain data={nowPlaying} callbackForSnapToItem={setBGColors} />

      <Slider_H movies={upcoming} titulo='Por estrenarse' colores={colores} />
      <Slider_H movies={topRated} titulo='Mejor comentadas' colores={colores} />
      <Slider_H movies={popular} titulo='Populares' colores={colores} />

    </View>
  </GradientBackground>
    </ScrollView>
)
}

