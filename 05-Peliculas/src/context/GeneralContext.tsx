import React, {createContext, useState} from 'react'

interface Colors {
    primary: string,
    secondary: string,
}

interface ProviderValues {
    colors: Colors;
    setColors: any;
    prevColors: Colors;
    setPrevColors: any;

}


export const GeneralContext = createContext( {} as ProviderValues );


export const GeneralProvider = ( { children }: any ) => {

    const [colors, setColors] = useState({
        primary: 'red',
        secondary: 'pink',
    })

    const [prevColors, setPrevColors] = useState({
        primary: 'transparent',
        secondary: 'transparent',
    })


    return (
        <GeneralContext.Provider value={{
            colors, 
            setColors,
            prevColors, 
            setPrevColors
        }} >
            {children}
        </GeneralContext.Provider>
    )
}

