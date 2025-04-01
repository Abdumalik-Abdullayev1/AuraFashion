import React, { useEffect, useState } from 'react'
import { Footer, Header } from './components'
import { Outlet, useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation()
  const [removeHeader, setRemoveHeader] = useState(false)
  
  useEffect(()=>{
    if(location.pathname == "/login" ||
       location.pathname == "/register" ||
       location.pathname == "/verify" ||
       location.pathname == "/admin-layout" ||
       location.pathname == '/admin-layout/products' ||
       location.pathname == '/admin-layout/settings'
    ){
      setRemoveHeader(true)
    }else{
      setRemoveHeader(false)
    }
  },[location.pathname])
  
  return (
    <>
      {!removeHeader && <Header/>}
      <Outlet/>
      {!removeHeader && <Footer/>}
    </>
  )
}

export default App
