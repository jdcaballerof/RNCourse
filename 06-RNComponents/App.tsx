import React from 'react' 

import { ThemeProvider } from './src/context/ThemeContext';
import { SidePanel } from './src/navigator/SidePanel';

const App = () => {
return (
  <ThemeProvider>
      {/* El <NavigationContainer> se movio dentro de <SidePanel> */}
      <SidePanel />
  </ThemeProvider>
)
}

export default App;
