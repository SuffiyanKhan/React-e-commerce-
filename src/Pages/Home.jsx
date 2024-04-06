import React, { memo, useEffect , useState } from 'react'
import { Navigate } from 'react-router-dom';
import AppNavbar from '../Componenets/AppNavbar/AppNavbar';
import { useGlobalState } from '../Context/Context';
import Home from '../Componenets/Home/Home'

function AppHome() {
     const {setToken} = useGlobalState()

    useEffect(() => {
        let getToken = JSON.parse(localStorage.getItem("token"))
        if(getToken){
            setToken(getToken)
         }else{
            Navigate('/')
        }
    })
  return (
    <div>
        <Home />
       </div>
  )
}

export default memo(AppHome)