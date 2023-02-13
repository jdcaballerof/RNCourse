import React, { createContext, useState } from "react";

// Definir como luce el Context, que info tendra
export interface AuthState {
    isLogged: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Esta interface es para decir como luce y que expone el Context
export interface AuthContext {
    authState: AuthState;
    favIcon: (iconName: string) => void;
    changeName: (name: string) => void;
    signIn: () => void;
    logout : () => void;
}

// Estado inicial
const authInitialState: AuthState = {
    isLogged: false,
    username: undefined,        // No es necesario colocarlo
    favoriteIcon: undefined     // No es necesario colocarlo
}



// Se crea el contexto
export const AuthContext = createContext( {} as AuthContext )  // Va a tener AuthState y un metodo


// export const AuthProvider = ( {children}: any ) => {
    // Puede ir con any o como debe de ser:         (Si tiene mas de 1 children usar JSX.Element[])
export const AuthProvider = ( {children}: {children: JSX.Element} ) => {

    const [authState, setAuthState] = useState(authInitialState);

    const signIn = () => {
      setAuthState( {...authInitialState, isLogged: true, username: 'noName'} )
    }

    const logout = () => {
      setAuthState( {...authInitialState, isLogged: false, username: undefined} )
    }

    const favIcon = (iconName: string) => {
      setAuthState( {...authState, favoriteIcon: iconName } )
    }

    const changeName = (username: string) => {
      setAuthState( {...authState, username } )
    }

    
    return (
        <AuthContext.Provider value={{
            authState,
            favIcon,
            changeName,
            signIn,
            logout
        }} >
            {children}
        </AuthContext.Provider>
    )
}