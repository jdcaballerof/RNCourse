import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export const ModalScreen = () => { 

  const [isVisible, setIsVisible] = useState(false);


return (
   <View>
      <Text style={stl.h1} >Modal Screen</Text>

      <Button title='Abrir modal' onPress={ () => { setIsVisible(true) } } />
      <Button title='Cerrar modal' onPress={ () => { setIsVisible(false) } } />

      <Modal
        animationType='slide'
        visible={isVisible}
        transparent={true}    // La transparencia NO hace que se pueda manipular lo que hay detras del modal
      >

        <View style={stl.modalBg}>
          <TouchableWithoutFeedback onPress={ () => console.log('Modal clic') } >
            <View style={stl.modalContainer}>
              <Button title='X' onPress={ () => { setIsVisible(false) } } />
              <View style={stl.modalBody}>
                <Text style={stl.h2} >Modal</Text>
                <Text style={{color: 'black', marginBottom: 5}} >Cuerpo del Modal. Modal Body.</Text>
                <Text style={{color: 'black',}} >Al abrir el Modal se crea la pantalla personalizada, que configuré para que solo abarque la mitad (flex: 0.5) y comprobar que aunque se pueda ver el contenido detrás NO se puede interactuar con él.</Text>
                <TouchableOpacity onPress={ () => { setIsVisible(false) } } >
                  <Text style={stl.modalBtn_Txt} >Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

      </Modal>

   </View>
)
}


const stl = StyleSheet.create({
    h1:{
      color: 'black',
      margin: 15,
      fontSize: 22,
      fontWeight: '900',
    },
    h2:{
      color: 'black',
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
    },
    modalBg:{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      // flex: 1 ,
      flex: 0.5,
      top: 200,
      // width: 200,
      // height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer:{
      backgroundColor: 'white',
      // justifyContent: 'center',
      alignItems: 'flex-end',
      opacity: 2,
      width: 250,
      height: 240,
      borderRadius: 10,
    },
    modalBody:{
      // backgroundColor: 'pink',
      paddingHorizontal: 10,
      width: '100%'
    },
    modalBtn_Txt:{
      color: 'rgba( 0, 200, 200, 1)',
      marginVertical: 15,
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 16,
    }
})
