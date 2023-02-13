import React, {useState} from 'react'
import { FlatList, Text, Image, StyleSheet, View, ActivityIndicator, Button, TouchableOpacity, StatusBar } from 'react-native';

export const InfiniteScrollScreen = () => { 

  const [numbers, setNumbers] = useState([0,1,2,3,4,5,6,7,8,9])
  const [changeImgStyle, setChangeImgStyle] = useState(false)

  const loadMore = () => {
    const newArr: number[] = []
    for (let i = 0; i < 5; i++) {
      newArr[i] = numbers.length +i
    }

    setTimeout(() => {
      setNumbers([...numbers,
         ...newArr
        ])
    }, 2000);
  }

  const myItem = ( n: number ) => {
    const item = n+117
// Switchear el estilo de lasa cards
    if(changeImgStyle) return (
      <View >
        <Image
          source={{uri: `https://picsum.photos/id/${item}/600/500`}}
          style={{width: '100%', height: 300}}
        />
      </View>
    )

    return (
      <View style={stl.containerImg} >
        <Image
          source={{uri: `https://picsum.photos/id/${item}/600/500`}}
          style={{width: '100%', height: 300}}
        />
      </View>
    )
  }

  const changeStyle = () => {
    setChangeImgStyle(b => !b)
    // console.log(changeImgStyle)
  }


return (
   <View  >
      {/* <Text style={stl.h1} >InfiniteScrollScreen</Text> */}
      <StatusBar  backgroundColor={'rgba(0,0,0, 0.20)'} translucent />

      <View style={stl.container} >
        

        {/* <TouchableOpacity onPress={ () => change() } style={{width:30, }} ><Text style={stl.btn} >^</Text></TouchableOpacity> */}
        <FlatList
            data={ numbers}
            // keyExtractor={ (item) => item}
            renderItem={ ({item}) => myItem(item) }

            ListHeaderComponent={<Text style={stl.h1} >InfiniteScrollScreen</Text>}
            ListFooterComponent={() => (
                <View 
                  // style={{backgroundColor: 'red'}} 
                >
                  <ActivityIndicator size={50} style={{margin:40}} />
                </View>
              )}

            // Cuantos objetos|item antes del ultimo para que se dispare el onEndReached 
            onEndReachedThreshold={.5}
            onEndReached={ () => loadMore() }
        />

      </View>


      <View style={{width: 130, position: 'absolute', right: -30, top: 30}} >
        <TouchableOpacity onPress={ () => changeStyle() } style={{width:110, height: 50, borderRadius: 15 }} >
          <Text style={stl.btn} > Turn Style </Text>
        </TouchableOpacity>
      </View>

   </View>
)
}


const stl = StyleSheet.create({
  h1: {
    color: 'white',
    marginTop: 30,
    marginBottom: 15,
    fontSize: 22,
    fontWeight: '900',
  },
  h2: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  containerItem:{
    backgroundColor: 'cyan',
    margin: 10,
    height: 100,
    width: 100,
  },
  container:{
    justifyContent: 'center',
    backgroundColor: '#0C4B6E',
    // flexDirection: 'row',
  },
  containerImg:{
    margin: 10, 
    overflow: 'hidden',
    borderRadius: 35, 
    borderWidth: 10,
    borderColor: 'white'
  },
  btn:{
    backgroundColor: 'rgba(256, 256, 256, 0.75)',
    color: 'black',
    fontSize: 18,
    fontWeight: '500', 
    borderRadius: 8,
    height: 27
  }
})