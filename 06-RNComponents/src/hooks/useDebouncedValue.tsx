import React, { useEffect, useState } from 'react'

export const useDebouncedValue = ( input: string = '', time: number = 500 ) => {
    
  const [state, setState] = useState(input);

  useEffect(() => {

    const t1 = setTimeout(() => {   //Al pasar X tiempo setea el estado al valor de la variable
      setState( input )
    }, time);
  

    return () => {                  //Con esto se resetea el timeOut
      clearTimeout( t1 )
    }
  }, [input])
  
  return state 
}
