import About from '../Header/About'
import AuthorGuidelines from '../Header/AuthorGuidelines'
import Contact from '../Header/Contact'
import ErrorPage from './ErrorPage'
import Home from '../Components/Home'
import Layout from './Layout'
import ListOfJournals from '../Header/ListOfJournals'
import PublicationEthics from '../Header/PublicationEthics'
import React from 'react'
import SubmitManuscript from '../Header/SubmitManuscript'
import { createBrowserRouter } from 'react-router-dom'

const Routing = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {index:true, element:<Home/>},
      { path:"*", element:<ErrorPage/>},
        
      {path:"/About",element:<About/>},
      {path:"/Contact",element:<Contact/>},
   {path:"/ListOfJournals",element:<ListOfJournals/>},
   {path:"/PublicationEthics",element:<PublicationEthics/>},
   {path:"/SubmitManuscript",element:<SubmitManuscript/>},
   {path:"/AuthorGuidelines",element:<AuthorGuidelines/>},




    ]
  },
  
])

export default Routing