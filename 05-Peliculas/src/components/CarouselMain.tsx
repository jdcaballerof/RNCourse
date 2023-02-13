import React from 'react'
import { Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Card } from '../components/Card';
import { Movie } from '../interfaces/movieDB';


interface Props {
    data: [] | Movie[];
    callbackForSnapToItem?: (index: number) => void;
}

export const CarouselMain = ( {data, callbackForSnapToItem}: Props ) => {

    const {width, height} = Dimensions.get('window');

    const SnapToItem = ( i: number ) => {
      !!callbackForSnapToItem && callbackForSnapToItem(i)
    }
    

  return (
    <Carousel
      // Descomentar lo que tenga *
      // loop
      // autoPlay={true}
      // autoPlayInterval={2500}
      // scrollAnimationDuration={1500}
      
      mode="parallax"  // *
      // This style prop regards to the carousel container not to the item itself
      style={ [{width: width}, estilos.carrusel] }
      
      // Paging in false allows to do superfast scroll
      // pagingEnabled={ !false }   *
      // and that superfast scroll stops on multiples of windowSize
      // windowSize={ 2 }   //*
      // the snap helps to stop exactly in 1 item, no in the middle of two or so
      snapEnabled
      
      
      // This props are for the item in the middle
      width={width/2}
      // height={ 400 }   //*
      // height={ 640 }
      
      modeConfig={{
        // How the "main" item will look
        parallaxScrollingScale: 1.3,  //  *
        // How separate the adjacent items will be
        parallaxScrollingOffset: 10,    // *
        // How big the adjacent items will look compared to the "main" item
        parallaxAdjacentItemScale: 0.75, // *
      }}
      
      data={ data }
      renderItem={ ({ item } ) => <Card movie={ item } height={250} width={180} itemTop={50} />}
      onSnapToItem={ i => SnapToItem(i) }
    />
  )
}

const estilos = StyleSheet.create({
    carrusel: { 
      // backgroundColor: 'pink', 
      justifyContent: 'center',
      alignSelf: 'flex-end',
      height: 360
    },
    titulo: { 
      fontSize: 30, 
      fontWeight: '900',
      color: 'black' 
    }
})