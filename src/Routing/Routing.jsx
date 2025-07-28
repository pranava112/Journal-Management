import About from '../Header/About'
import AdminRouting from './AdminRouting'
import AuthorGuidelines from '../Header/AuthorGuidelines'
import Contact from '../Header/Contact'
import ContactList from '../Header/ContactList'
import EditorialBoard from '../Header/EditorialBoard'
import ErrorPage from './ErrorPage'
import Events2021 from '../News and events/Events2021'
import Events2022 from '../News and events/Events2022'
import Events2023 from '../News and events/Events2023'
import Events2024 from '../News and events/Events2024'
import Events2025 from '../News and events/Events2025'
import Home from '../Components/Home'
import JournalPolicies from '../Header/JournalPolicies'
import Layout from './Layout'
import ListOfJournals from '../Header/ListOfJournals'
import ManuscriptList from '../Header/ManuscriptList'
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
   {path:"/JournalPolicies",element:<JournalPolicies/>},
  {path:"/EditorialBoard",element:<EditorialBoard/>},
   {path:"/Events2021",element:<Events2021/>},
   {path:"/Events2022",element:<Events2022/>},
   {path:"/Events2023",element:<Events2023/>},
   {path:"/Events2024",element:<Events2024/>},
   {path:"/Events2025",element:<Events2025/>},


    

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