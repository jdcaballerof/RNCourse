import React, {createContext, useState, useEffect} from 'react'

import { useColorScheme } from 'react-native';

interface ProviderValues {
    themeState: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,
}

interface ThemeState {
    currentTheme: 'light' | 'dark' ;
    dark: boolean;
    dividerColor: string,
    colors: {
        primary: string;
        secondary: string;
        terc: string;
        primaryTenue: string;
        background: string;
        backgroundSlides: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    };
}


export const ThemeContext = createContext( {} as ProviderValues );


export const ThemeProvider = ( { children }: any ) => {

    const temaDeCel = useColorScheme()

    const [themeState, setThemeState] = useState<ThemeState>({
        currentTheme: 'light',
        dark: false, 
        dividerColor: 'yellow',
        colors: {
            primary: 'black',
            secondary: 'purple',
            terc: 'yellow',
            primaryTenue: 'rgba(0,0,0, 0.5)',
            background: 'white',
            backgroundSlides: '#FADCFA',
            card: 'red',
            text: 'blue',
            border: 'yellow',
            notification: 'cyan',
        }
        })

    const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false, 
    dividerColor: 'yellow',
    colors: {
        primary: 'black',
        secondary: 'rebeccapurple',
        terc: 'yellow',
        primaryTenue: 'rgba(0,0,0, 0.5)',
        background: 'white',
        backgroundSlides: '#FADCFA',
        card: 'red',
        text: 'blue',
        border: 'yellow',
        notification: 'cyan',
    }
    }

    const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    dividerColor: 'yellow',
    colors: {
        primary: 'white',
        // secondary: 'blueviolet',
        secondary: 'mediumpurple',
        terc: 'orange',
        primaryTenue: 'rgba(256, 256, 256, 0.5)',
        background: 'black',
        backgroundSlides: '#000',
        card: 'red',
        text: 'blue',
        border: 'yellow',
        notification: 'cyan',
    }
    }
    
    const setDarkTheme = () => {
    //   console.log('darkTheme');
      setThemeState(darkTheme)
    }
    
    const setLightTheme = () => {
        // console.log('lightTheme');
        setThemeState(lightTheme)
    }

    useEffect(() => {
    //   console.log(temaDeCel)
      if(temaDeCel == 'dark')  setThemeState(darkTheme)
      if(temaDeCel == 'light') setThemeState(lightTheme)

    }, [temaDeCel])
    


    return (
        <ThemeContext.Provider value={{
            themeState,
            setDarkTheme,
            setLightTheme,
        }} >
            {children}
        </ThemeContext.Provider>
    )
}
