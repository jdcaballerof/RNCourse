
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native';
import { GeneralProvider } from './src/context/GeneralContext';
import { NavStack } from './src/navigation/NavStack';
import { FadeScreen } from './src/screens/Fade';

const App = () => {
return (
  <NavigationContainer>
    {/*   <GeneralProvider> */}
      {/* <Text>App </Text> */}
      <NavStack/>
      {/* <FadeScreen /> */}
      {/* </GeneralProvider> */}
    </NavigationContainer>
)
}

export default App;
