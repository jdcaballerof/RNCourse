import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react'
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ZoomIn } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MyBtnOpacity } from '../../components/MyBtnOpacity';
import { MyTextInput } from '../../components/MyTextInput';
import { ResultOfRyMCharacter, RyMCharacter } from '../../interfaces/RickMorty';


const rickMorty = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    params: {
    }
})


export const BusquedaScreen = () => { 

    const {top} = useSafeAreaInsets();
    const { goBack } = useNavigation();

    const [respuesta, setRespuesta] = useState({} as RyMCharacter )
    const [data, setData] = useState([] as ResultOfRyMCharacter[] )
    const [titulo, setTitulo] = useState('Buscar')
    // console.log(data);

    const getMore = () => {
      if(!!respuesta.info.next){
        axios.get<RyMCharacter>(respuesta.info.next)
        .then( res => {
            setRespuesta(res.data)
            setData([...data, ...res.data.results])
        } )
      }
    }


    const myCard = (char: ResultOfRyMCharacter) => {
      return(
        <View style={stl.card} >
            <Text style={[stl.h2, {color: 'white', paddingVertical: 5}]} > {char.name} </Text>
            <Image
                source={{uri: char.image}} 
                style={ stl.image }
            />
            {/* <Text> {char.status} </Text> */}
        </View>
      )
    }

return (
    <View style={{ paddingHorizontal: 20, backgroundColor: '#333333', flex: 1}} >

      <StatusBar  backgroundColor={'rgba(0,0,0, 0.20)'} translucent />

        <View style={{
            position:'absolute',
            top: top+10,
            left: 10,
            zIndex: 11,
            flexDirection: 'row',
            alignItems: 'center',
        }} >

            <View style={{ zIndex: 999 }} >
                <MyBtnOpacity  iconName='arrow-left' 
                    bgColor='rgba(230,230,230, 1.0)' fontColor='orange' iconSize={15}
                    styleBg={{width: 34, height: 34, borderRadius: 100, padding:0}}
                    onPress={ () => goBack() }
                />
            </View>

            <MyTextInput styleBG={{width: '90%', marginLeft: 10}} onDebounced={ valor => {
                    if(valor.length > 2){
                        setTitulo(valor)
                        rickMorty.get<RyMCharacter>(`/character/?name=${valor}`)
                            .then( res => {
                                setRespuesta(res.data)
                                setData(res.data.results)
                            } )
                    }
                } } />
        </View>

        <View style={{alignItems: 'center'}} >

            <FlatList
                keyExtractor={ (item, i) => `${item.id+i}` }
                data={data}
                numColumns={2}
                renderItem={ ({item}) => myCard(item) }
                onEndReached={ () => getMore() }
                onEndReachedThreshold={0.5}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={ () => <Text style={[stl.h2, {
                    backgroundColor: 'transparent',
                    color: 'white',
                    // textAlign: 'left',
                    marginTop: 85,
                    marginBottom: 20

                }]} >{titulo.toUpperCase()}</Text> }
                />
        
        </View>
   </View>
)
}



const stl = StyleSheet.create({
    card:{
        backgroundColor: 'gray',
        height: 170,
        width: 150,
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 20,
        overflow: 'hidden',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },
    image: {
        top: -20,
        height: 150,
        width: 150,    
    },
    h2:{
        backgroundColor: 'black',
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        zIndex: 10
    }
})
