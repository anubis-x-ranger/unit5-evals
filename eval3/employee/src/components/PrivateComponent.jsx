import React from 'react'
import { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

const PrivateComponent = ({children}) => {
    const {isAuth}=useContext(AuthContext);
    if(!isAuth){
        <Navigate to='/login' replace={true}></Navigate>
    }
  return (
    {children}
  )
}

export default PrivateComponent