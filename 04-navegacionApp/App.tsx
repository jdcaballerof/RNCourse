import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackMain } from './src/navigator/StackMain';
import { MenuSidebarBasic } from './src/navigator/MenuSidebarBasic';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
return (
   <NavigationContainer>
    <AuthProvider>
      {/* <StackMain/> */}
      {/* <MenuSidebarBasic/> */}
      <MenuLateral/>
    </AuthProvider>
   </NavigationContainer>
)
}

export default App;