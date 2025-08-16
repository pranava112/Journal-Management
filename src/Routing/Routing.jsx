import About from '../Header/About'
import AdminRouting from './AdminRouting'
import Archive from '../Header/Archive'
import ArticleProcessingCharges from '../News and events/ArticleProcessingCharges'
import AuthorGuidelines from '../Header/AuthorGuidelines'
import CallForPapers from '../Components/CallForPapers'
import Contact from '../Header/Contact'
import ContactList from '../Header/ContactList'
import EditorialBoard from '../Header/EditorialBoard'
import ErrorPage from './ErrorPage'
import Home from '../Components/Home'
import IndexList from '../News and events/IndexList'
import JournalPolicies from '../Header/JournalPolicies'
import Layout from './Layout'
import ManuscriptList from '../Header/ManuscriptList'
import PublicationEthics from '../Header/PublicationEthics'
import React from 'react'
import SubmitManuscript from '../Header/SubmitManuscript'
import UserInfoPortal from '../services/UserInfoPortal'
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
   {path:"/Archive",element:<Archive/>},
   {path:"/PublicationEthics",element:<PublicationEthics/>},
   {path:"/SubmitManuscript",element:<SubmitManuscript/>},
     
   {path:"/AuthorGuidelines",element:<AuthorGuidelines/>},
   {path:"/JournalPolicies",element:<JournalPolicies/>},
  {path:"/EditorialBoard",element:<EditorialBoard/>},
  
   {path:"/UserInfoPortal",element:<UserInfoPortal/>},
{path:"/ArticleProcessingCharges",element:<ArticleProcessingCharges/>},
{path:"/IndexList",element:<IndexList/>},
{path:"/CallForPapers",element:< CallForPapers/>},
   


    

{path:"/contactlist",element:(

<AdminRouting>
  <ContactList />
</AdminRouting>

)},
{path:"/Manuscripts",element:(<AdminRouting><ManuscriptList/></AdminRouting>)},


    ]
  },
  
])

export default Routing