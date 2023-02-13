import React from 'react'
import { Text, SectionList, StyleSheet, View } from 'react-native';


interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin" ]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman" ]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", "Goku", "Saitama","Kenshin", "Goku", "Saitama"]
  }
];

export const SectionListScreen = () => { 
return (
   <View >
     {/* 
     //^ Para que el Header sea parte de la lista mejor usarlo en ListHeaderComponent
     <Text style={stl.h1} >SectionListScreen</Text> */}
     <SectionList
        sections={ casas }    
        keyExtractor={ (item, i)=> i+item }

        ListHeaderComponent={ () => <Text style={[stl.h1, stl.txt_center]} >SectionListScreen</Text> }
        ListFooterComponent={ () => <Text style={[stl.h2, stl.txt_center, {marginBottom: 25}]} >Casas: {casas.length} </Text> }

        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}

        renderSectionHeader={ ({section}) => <Text style={[stl.h2, stl.bg_white]} >{section.casa}</Text> }
        renderItem={ ({item}) => <Text style={{marginHorizontal: 15, color: 'black',}} >{item}</Text>  }
        renderSectionFooter={ ({section}) => 
          <View>
            <Text style={[stl.h2, {  }]} >Personajes: {section.data.length}</Text> 
            <View style={[ stl.bg_red, { height: 7, marginBottom: 15 }]} />
          </View>
        }
        
        ItemSeparatorComponent  = { () => <View style={[ { height: 2, }, stl.bg_green]} />}
        SectionSeparatorComponent={ () => <View style={[ { height: 3, }, stl.bg_orange]} />}
     />
   </View>
)
}

const stl = StyleSheet.create({
    h1: {
      color: 'black',
      marginVertical: 15,
      fontSize: 22,
      fontWeight: '900',
    },
    h2: {
      color: 'black',
      fontSize: 18,
      fontWeight: '600',
    },
    txt_center:{
      textAlign: 'center',
    },
    bg_white:{
      backgroundColor: 'white',
    },
    bg_red:{
      backgroundColor: 'red',
    },
    bg_green:{
      backgroundColor: 'lightgreen',
    },
    bg_orange:{
      backgroundColor: 'orange',
    },
})