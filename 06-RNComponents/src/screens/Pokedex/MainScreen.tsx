import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MyBtnOpacity } from '../../components/MyBtnOpacity';
import { PokeCard } from '../../components/PokeDex/PokeCard';

export const PokeDexMainScreen = () => { 

    const count = useRef(0);
    const [c, setC] = useState(0);

    const { navigate } = useNavigation<any>();

    const [dataPoke, setDataPoke] = useState<any>([])

    const getMorePokemons = () => {
        let arr = []
        for (let i = dataPoke.length+1; i < dataPoke.length+16; i++) {
            let uri
            uri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`
            arr.push( {id: i, uri} )
        }
        setDataPoke([...dataPoke, ...arr])
    }

    useEffect(() => {
        getMorePokemons()
    }, [])
    



return (
    // <ScrollView>
        <View style={{paddingBottom: 20}}>
            <Image
                source={require('../../assets/pokebola.png')}
                style={stl.imgPokebola}
            />

            <View style={{ position: 'absolute', top: 10, right: 10, zIndex: 999 }} >
                <MyBtnOpacity  iconName='magnifier' 
                    bgColor='rgba(0,0,0, 0.5)' fontColor='orange' 
                    styleBg={{width: 55, borderRadius: 100}}
                    onPress={ () => navigate('BusquedaScreen') }
                />
            </View>
            {/* <Text>PokeDexMainScreen</Text>
            
            <Text> {`\n`} useRef: {count.current} </Text>
            <Text>useState: {c} </Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', padding: 20 }} >
                
                <MyBtnOpacity label='reset' onPress={ () => { 
                    setC(0); 
                    count.current = 0; 
                    console.log({c, count})
                } } />
                
                <MyBtnOpacity label='-' onPress={ () => { 
                    //  setC( i => i-1); 
                    count.current = count.current-1; 
                    console.log({c, count: count.current})
                    } } />
                
                <MyBtnOpacity label='+' onPress={ () => { 
                    setC( i => i+1); 
                    count.current = count.current+1; 
                    console.log({c, count: count.current})
                    } } />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', padding: 20 }} >
                
                <MyBtnOpacity label='Get Pokemons' onPress={ () => { getMorePokemons() } } />
                
            </View  > */}

            <View style={stl.pokeCardContainer} > 
            <FlatList
                keyExtractor={ (i) => i.id+1 }
                data={dataPoke}
                numColumns={2}
                renderItem={ ({item}) => <PokeCard pokemon={item} /> }
                onEndReached={ getMorePokemons }
                onEndReachedThreshold={0.5}
                showsVerticalScrollIndicator={false}

                ListFooterComponent={ () => <ActivityIndicator /> }
            />
            </View>

            

        </View> 
    //  </ScrollView>
)
}


const stl = StyleSheet.create({
    imgPokebola:{
        // backgroundColor: 'cyan',
        width: 300,
        height: 300,
        opacity: 0.3,
        position: 'absolute',
        top: -100,
        right: -100,
    },
    pokeCardContainer: {
        // backgroundColor: 'red',
        alignItems: 'center',
    },
})
