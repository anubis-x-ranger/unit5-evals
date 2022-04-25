import {useContext} from 'react'
export const AuthContext = useContext(second)
export  const AuthContextProvider=({children})=>{
    return(
        <div>{children}</div>
    )
}