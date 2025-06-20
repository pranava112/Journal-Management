// import './NavigationBar.css';

// import { NavLink } from 'react-router-dom';
// import React from 'react';

// const NavigationBar = () => {
//   return (
//     <nav className="navbar">
//       <NavLink to="/" title="Home" className="nav-link">Home</NavLink>
//       <NavLink to="/About" title="About" className="nav-link">About Us</NavLink>
//       <NavLink to="/Contact" title="Contact" className="nav-link">Contact Us</NavLink>
//       <NavLink to="/ListOfJournals" title="List Of Journals" className="nav-link">List Of Journals</NavLink>
//       {/* <NavLink to="/PublicationEthics" title="Publication Ethics" className="nav-link">Publication Ethics</NavLink> */}
//       <NavLink to="/SubmitManuscript" title="Submit Manuscript" className="nav-link">Submit Manuscript</NavLink>
//       {/* <NavLink to="/AuthorGuidelines" title="Author Guidelines" className="nav-link">Author Guidelines</NavLink> */}
//     </nav>
//   );
// };

// export default NavigationBar;

import './NavigationBar.css';

import { Container, Nav, Navbar } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import React from 'react';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          IJMSBC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact="true">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/About">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Contact">
              Contact Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/ListOfJournals">
              List Of Journals
            </Nav.Link>
            <Nav.Link as={NavLink} to="/SubmitManuscript">
              Submit Manuscript
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
