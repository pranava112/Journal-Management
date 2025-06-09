import AsideBar from '../Components/AsideBar'
import Header from '../Header/Header'
import NavigationBar from '../Header/NavigationBar'
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <>
    <Header/>
    <NavigationBar/>
   
   
    <div className='outlet'>
      <div className='outlet1'>
        <Outlet/>
      </div>
      
      <div className='aside1'>
         <AsideBar/>
      </div>
    </div>
    
    </>
  )
}

export default Layout