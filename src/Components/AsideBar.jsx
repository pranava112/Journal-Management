import './AsideBar.css'

import { IoNewspaper, IoNewspaperOutline } from 'react-icons/io5'

import { NavLink } from 'react-router-dom'
import React from 'react'

const AsideBar = () => {
  return (
    <>
    
    <div className='asidebar'>
        
        <div className='hello'>
        <h4 id ='h4'>Call for papers</h4>
     <NavLink to="/PublicationEthics" title="PublicationEthics" className="icon"> <IoNewspaperOutline /> Publication Ethics</NavLink>
     <NavLink to="/JournalPolicies" title="JournalPolicies" className="icon"> <IoNewspaperOutline /> Journal Policies</NavLink>
     <NavLink to="/AuthorGuidelines" title="AuthorGuidelines" className="icon"> <IoNewspaperOutline /> Author Guidelines</NavLink>
     {/* <NavLink to="#" title="News and Events" className="icon"> <IoNewspaperOutline /> News and Events</NavLink> */}
     <h4 className='icon'> <IoNewspaperOutline /> News and Events </h4>
        </div>  

        <section className='scroller'>
        <marquee behavior="repeat" direction="up" scrolldelay="200">
            <div>hello everyone</div>
            <div>International Journal Management of Science and Business Conclave</div>

             <div>International Journal Management of Science and Business Conclave</div>

 <div>International Journal Management of Science and Business Conclave</div>

        
        </marquee>
        </section>  
    </div>
      
      

    </>
  )
}

export default AsideBar