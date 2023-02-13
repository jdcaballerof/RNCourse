import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect, useContext} from 'react'
import { Animated, Dimensions, Text, ImageSourcePropType, Image,  SafeAreaView, StyleSheet, View, Button, TouchableWithoutFeedback } from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import { MyBtnOpacity } from '../components/MyBtnOpacity';
import { ThemeContext } from '../context/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';


interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide3.png')
    },
]

const window = Dimensions.get('window');



export const SlidesScreen = () => { 

    const { themeState:{colors} } = useContext(ThemeContext)
    // const car = useRef('car')
    const [i, setI] = useState(0)
    const [isLastActive, setIsLastActive] = useState(false)

    const {goBack} = useNavigation();

    const {opacity, fadeIn, fadeOut} = useAnimation();

    useEffect(() => {
        if(i == items.length-1){
            setIsLastActive(true)
            return fadeIn()
        }
        if(i != items.length-1 && isLastActive){
            setIsLastActive(false)
            return fadeOut()
        }
    }, [i])

    const renderItem = (item: Slide) => {
      return(
        <View style={[stl.slideContainer, {backgroundColor: colors.backgroundSlides}]} >
            <Image source={item.img} style={stl.img} />
            <Text style={[stl.h2, {color: colors.secondary}]} > {item.title} </Text>
            <Text style={[stl.p, {color: colors.primary}]} > {item.desc} </Text>
        </View>
      )
    }

    

return (
    <SafeAreaView style={ [stl.gnrlContainer, {backgroundColor: colors.backgroundSlides}] }>

        <Carousel
            // ref={() => car}
            vertical={false}        // Necesario para quitar un Bug en tipado, tambien se puede modificar en el archivo types colocandolo como opcional (vertical?: ...)
            data={items}
            renderItem={ ({item}: any) => renderItem(item) }
            sliderWidth={ window.width }
            itemWidth={ window.width }
            //^ Se puede ocupar cualquiera de los metodos debajo, hacen lo mismo
            // onScrollIndexChanged={ (index) => setI(index) }
            onSnapToItem={ (index) => { setI(index) } }
        />

        <View style={stl.paginator} >
            <Pagination             // Es mejor ir al archivo Types (con Ctrl + clic) y colocar que todo es opcional
                dotsLength={items.length}
                activeDotIndex={i}
                dotStyle={[stl.dotPaginator, {backgroundColor: colors.secondary}]}
                />
            
            {/* {(isLastActive)      // Mi Solución
                &&<MyBtnOpacity label='Entrar' width={120} onPress={ goBack} />
            } */}

            {/* Mi Solución con Fade */}
            <Animated.View style={{opacity}}>
                <MyBtnOpacity label='Salir' iconName='arrow-right' bgColor={colors.secondary} 
                    onPress={ () => isLastActive && goBack() } 
                />
            </Animated.View>

        </View>


   </SafeAreaView>
)
}


const stl = StyleSheet.create({
    gnrlContainer:{
        // backgroundColor: 'white',
        // backgroundColor: '#FADCFA',
        flex: 1,
        // paddingTop: 50,
    },
    img:{
        width:350,
        height: 400,
        resizeMode: 'center',
    },
    slideContainer:{
        // backgroundColor: '#FADCFA',
        flex: .98,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    h2:{
        color: 'purple',
        fontSize: 36,
        fontWeight: '700',
    },
    p: {
        // backgroundColor: 'red',        
        textAlign: 'left',
        fontSize: 18,
        marginHorizontal: 10
    },
    dotPaginator:{
        backgroundColor: 'purple',
        width: 15,
        height: 15,
        borderRadius: 10,
        // height: 5,
        // borderRadius: 3,
        // marginHorizontal: 3
    },
    paginator:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 35
    },
})
