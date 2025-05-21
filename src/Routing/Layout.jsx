import Header from '../Header/Header'
import NavigationBar from '../Header/NavigationBar'
import { Outlet } from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <>
    <Header/>
    <NavigationBar/>
    <Outlet/>
    </>
  )
}

export default Layout