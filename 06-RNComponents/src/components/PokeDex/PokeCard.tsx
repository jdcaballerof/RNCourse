import React, {useState, useEffect, useRef} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { getImageColors } from '../../hooks/getImageColors';


export const PokeCard = ( {pokemon}: any ) => { 

   const { id, uri } = pokemon
    const isMounted = useRef(true)
    const [bgColor, setBgColor] = useState('gray')

    useEffect(() => {

      if( !isMounted.current ) return;

      const getColors = async() => {
            const [c1, c2] = await getImageColors(uri);
            setBgColor(c1) 
      }

      getColors();

      return () => {
         isMounted.current = false
      }
    }, [])

    const pokebolaBG = '../../assets/pokebolaBlanca.png';
    

    


return (
   <View style={{...stl.card, backgroundColor: bgColor }}>
     <Text style={stl.h2} >PokeCard {id} {`\n#` + id} </Text>
     {/* <Text style={{fontSize: 22}} >#{id} </Text> */}
     <View style={stl.imgPokebola} >
      <Image
            source={require(pokebolaBG)}
            style={{width: 150, height: 150,}}
      />
     </View>
      <Image
         source={{uri}}
         style={ stl.img }
      />
   </View>
)
}

const stl = StyleSheet.create({
   h2: {
      // backgroundColor: 'cyan',
      // textAlign: 'center'
      fontSize: 22,
      color: 'white',
      fontWeight: '500'
   },
    card: {
      borderRadius: 15,
      margin: 10, 
      marginHorizontal: 20,
      padding: 10,
      height: 140
   },
   img:{
      // backgroundColor: 'rgba(0,256,125, 0.35)',
      height: 130, 
      width:130,
      position: 'relative',
      right: -30,
      bottom: 35,
   },
   imgPokebola:{
      // backgroundColor: 'cyan',
      opacity: .5,
      width: 115,
      height: 115,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      bottom: -5,
  },
})
