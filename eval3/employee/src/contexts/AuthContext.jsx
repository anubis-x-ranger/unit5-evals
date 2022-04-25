import {createContext,useState} from 'react'

export const AuthContext = createContext();
export const AuthContextProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false);
    const handleAuth=(e)=>{
        setIsAuth(e);
    }
    return(
        <AuthContext.Provider value={{isAuth,handleAuth}}>{children}</AuthContext.Provider>
    )
}