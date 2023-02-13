import React, { useState } from 'react'


export const useCalculadoraB = () => {

    const [num, setNum] = useState('0');
    const [numAnt, setNumAnt] = useState('0');
    const [simbol, setSimbol] = useState('');

    const insertNumber = (n:string) => {
    if( num.startsWith('-0') && !num.includes('.') )  return setNum( `-${n}` ) 
    if( num.startsWith('0') ){
      if( num.includes('.') ) return setNum(num+n) 
      setNum(n);

    } else setNum(num+n)
  }

  const insertDot = () => {
    if(num.includes('.')) return
    setNum( i => i+'.')
  }

  const operar = () => {
    if(simbol === '+'){
      setNumAnt(`${ Number(num) + Number(numAnt) }`)
      return setNum('0')
    }
    if(simbol === '-'){
      setNumAnt(`${ Number(numAnt) - Number(num) }`)
      return setNum('0')
    }
    if(simbol === 'x'){
      if(numAnt === '0') {
        setNumAnt(`${ Number(num) * 1 }`) 
      } else{ setNumAnt(`${ Number(num) * Number(numAnt) }`) }
      return setNum('0')
    }
    if(simbol === '/'){
      if(numAnt === '0') {
        setNumAnt(`${ Number(num) / 1 }`) 
      } else{ setNumAnt(`${ Number(numAnt) / Number(num) }`) }
      return setNum('0')
    }

    setNumAnt(`${ Number(num) + Number(numAnt) }`)
    setNum('0')
  }

  const invertirSigno = () => {
    if(num.includes('-')) {
        setNum( num.replace('-','') );
    } else setNum( n => '-'+n )
  }

  const borrar1num = () => {
    if( num.length>1 ){
        ( num.startsWith('-0') && num.length < 2 )
         ? setNum( num.replace('-','') )
         : setNum( num.slice(0, -1) )

         if( num.length===2 && num.startsWith('-') ) setNum('0')

    }else setNum('0')
  }

  const borrarTodo = () => {
    setNum('0')
    setNumAnt('0')
    setSimbol('')
  }

  const igual = () => {
    switch (simbol) {
        case "+":
            setNum( `${ Number(numAnt) + Number(num) }` )
            break;
        case "-":
            setNum( `${ Number(numAnt) - Number(num) }` )
            break;
        case "x":
            setNum( `${ Number(numAnt) * Number(num) }` )
            break;
        case "/":
            setNum( `${ Number(numAnt) / Number(num) }` )
            break;
    
        default:
            break;
    }
    setNumAnt('0')
    setSimbol('')
  }

  const sumar = () => {
    operar();
    setSimbol('+');
  }

  const restar = () => {
    operar();
    setSimbol('-');
  }

  const multiplicar = () => {
    operar();
    setSimbol('x');
  }

  const dividir = () => {
    operar();
    setSimbol('/');
  }


  return {
    num, 
    numAnt, 
    simbol,
    insertNumber,
    insertDot,
    invertirSigno,
    borrar1num,
    borrarTodo,
    igual,

    operadores: {
        sumar,
        restar,
        multiplicar,
        dividir
    }
  }
}
