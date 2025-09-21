import About from '../Header/About'
import AdminRouting from './AdminRouting'
import Announcement from '../Announcement/Announcement'
import AnnouncementInput from '../Announcement/AnnouncementInput'
import Archives from '../Pdf\'s/Archives'
import ArticleProcessingCharges from '../News and events/ArticleProcessingCharges'
import AuthorGuidelines from '../Header/AuthorGuidelines'
import CallForPapers from '../Components/CallForPapers'
import Contact from '../Header/Contact'
import ContactList from '../Header/ContactList'
import Current_Issues from '../Pdf\'s/Current_Issues'
import EditorialBoard from '../Header/EditorialBoard'
import ErrorPage from './ErrorPage'
import Home from '../Components/Home'
import IndexList from '../News and events/IndexList'
import JournalPolicies from '../Header/JournalPolicies'
import Layout from './Layout'
import ListOfUsers from '../Header/ListOfUsers'
import ManuscriptList from '../Header/ManuscriptList'
import PdfList from '../Pdf\'s/PdfList'
import Previous_Issues from '../Pdf\'s/Previous_Issues'
import PublicationEthics from '../Header/PublicationEthics'
import React from 'react'
import SubmitManuscript from '../Header/SubmitManuscript'
import UploadPdf from '../Pdf\'s/UploadPdf'
import UserInfoPortal from '../services/UserInfoPortal'
import VisitorStats from '../Header/VisitorStats'
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
   
   {path:"/PublicationEthics",element:<PublicationEthics/>},
   {path:"/SubmitManuscript",element:<SubmitManuscript/>},
     
   {path:"/AuthorGuidelines",element:<AuthorGuidelines/>},
   {path:"/JournalPolicies",element:<JournalPolicies/>},
  {path:"/EditorialBoard",element:<EditorialBoard/>},
  
   {path:"/UserInfoPortal",element:<UserInfoPortal/>},
   {path:"/ArticleProcessingCharges",element:<ArticleProcessingCharges/>},
   {path:"/IndexList",element:<IndexList/>},
   {path:"/CallForPapers",element:< CallForPapers/>},

   {path:"/Archives",element:<Archives/>},
   {path:"/Current_Issues",element:< Current_Issues/>},
   {path:"/Previous_Issues",element:<Previous_Issues/>},
   
  
{path:"/uploadpdf", element:(<AdminRouting><UploadPdf/></AdminRouting>)},

{path:"/VisitorStats", element:(<AdminRouting><VisitorStats/></AdminRouting>)},

{path:"/PdfList",element:(<AdminRouting><PdfList /></AdminRouting>)},

{path:"/uploadAnnouncement",element:(<AdminRouting><Announcement /></AdminRouting>)},

{path:"/RegisterList",element:(<AdminRouting><ListOfUsers /></AdminRouting>)},


{path:"/contactlist",element:(<AdminRouting><ContactList /></AdminRouting>)},


{path:"/Manuscripts",element:(<AdminRouting><ManuscriptList/></AdminRouting>)},

{path:"/Announcement",element:(<AdminRouting><Announcement/></AdminRouting>)},

{path:"/AnnouncementInput",element:(<AdminRouting><AnnouncementInput/></AdminRouting>)},

    ]
  },
  
])

export default Routing