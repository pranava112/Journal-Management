import AsideBar from '../Components/AsideBar'
import Header from '../Header/Header'
import NavigationBar from '../Header/NavigationBar'
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <>
    <section id='background'>
     <div id='border'>
       <Header/>
    <NavigationBar/>
   
   
    <section className='outlet'>
      
        <Outlet className='outlet1'/>
      
      
         <AsideBar className='aside1'/>
    
    </section>
     </div>
    
    </section>
    
    </>
  )
}

export default Layout