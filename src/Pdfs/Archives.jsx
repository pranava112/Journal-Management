import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import React from 'react'

const Archives = () => {
  return (
    <>
    <div>
    <h1 className='sub_title'><center>  Archive</center></h1>
      
       <section id='Archives'>
       
{/* <div> */}
  <NavLink to="/Current_Issues" end>
    <button className="btn btn-primary" title='View Current Issues'>Current Issues</button>
  </NavLink>
{/* </div>

<div> */}
  <NavLink to="/Previous_Issues">
    <button className="btn btn-secondary" title='View Previeous Issues'>Previous Issues</button>
  </NavLink>
{/* </div> */}


       </section>
    </div>
    </>
  )
}

export default Archives