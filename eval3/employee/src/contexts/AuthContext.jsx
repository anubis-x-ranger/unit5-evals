import {useContext,useState} from 'react'

export const AuthContext = useContext();
export  const AuthContextProvider=({children})=>{
    const [isAuth,setIsAuth]=useState(false);
    const handleAuth=(e)=>{
        setIsAuth(e);
    }
    return(
        <AuthContext.Provider value={{isAuth,handleAuth}}>{children}</AuthContext.Provider>
    )
}