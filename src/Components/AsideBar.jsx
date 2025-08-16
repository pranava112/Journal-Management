import './AsideBar.css';

import { Card, ListGroup } from 'react-bootstrap';

import { CgNotes } from 'react-icons/cg';
import { IoNewspaperOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import React from 'react';

const AsideBar = () => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className=" mb-3 " id='hello'>
         
          <NavLink to="/CallForPapers" className="nav-link p-0">
              <IoNewspaperOutline className="me-2 icon" />
               Call for Papers
            </NavLink>


        </Card.Title>

        <ListGroup variant="flush">
          <ListGroup.Item>
            <NavLink to="/PublicationEthics" className="nav-link p-0">
              <IoNewspaperOutline className="me-2 icon" />
              Publication Ethics
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            <NavLink to="/JournalPolicies" className="nav-link p-0">
              <IoNewspaperOutline className="me-2 icon" />
              Journal Policies
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            <NavLink to="/AuthorGuidelines" className="nav-link p-0">
              <IoNewspaperOutline className="me-2 icon" />
              Author Guidelines
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item className="p-0 mt-2 ps-2">
            {/* <IoNewspaperOutline className="me-2 icon" /> */}
           <h5> News and Events</h5>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>

      <Card.Footer className="bg-light p-2">
        <div className="scroller">
          <marquee behavior="scroll" direction="up" scrollamount="2" height="200px">
            <div id='marquee1'>
              {/* <CgNotes id='notice'/>  */}
               
                
                 <NavLink to="/ArticleProcessingCharges" className='news'>
                <div className='news1'><CgNotes id='notice'/>ArticleProcessingCharges</div> 
                {/* <div className='news2'>Journal impact factor</div> */}
                </NavLink>

                <NavLink to="/IndexList" className='news'>
                <div className='news1'><CgNotes id='notice'/>Index List</div> 
                {/* <div className='news2'>Journal impact factor</div> */}
                </NavLink>
                
                 {/* <NavLink to="/Events2023" className='news'>
                <div className='news1'><CgNotes id='notice'/>On 2023</div> 
                <div className='news2'>Journal impact factor</div>
                </NavLink>
                 <NavLink to="/Events2022" className='news'>
                <div className='news1'><CgNotes id='notice'/>On 2022</div> 
                <div className='news2'>Journal impact factor</div>
                </NavLink>
              <NavLink to="/Events2021" className='news'>
                <div className='news1'><CgNotes id='notice'/>On 2021</div> 
                <div className='news2'>Journal impact factor</div>
                </NavLink> */}

            </div>
          </marquee>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default AsideBar;