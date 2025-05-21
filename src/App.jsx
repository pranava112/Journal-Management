import Home from './Components/Home'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routing from './Routing/Routing'

const App = () => {
  return (
    <>
    
    {/* <Home/> */}
    <RouterProvider router={Routing}/>
    
    </>
  )
}

export default App