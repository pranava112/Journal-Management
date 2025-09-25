import './NavigationBar.css';

import { Container, Modal, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { isLoggedIn, logout } from '../services/AuthService';

import { FaFilePdf } from 'react-icons/fa';
import Login from '../services/Login';
import { NavLink } from 'react-router-dom';
import Register from '../services/Register';
import UserInfoPortal from '../services/UserInfoPortal';

const NavigationBar = () => {
  const [auth, setAuth] = useState(isLoggedIn());
  const [authAction, setAuthAction] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState(null);

  // ✅ Only store emails here
  const allowedAdmins = ['AdminIjmsabc@gmail.com'];

  useEffect(() => {
    setAuth(isLoggedIn());
    const user = JSON.parse(localStorage.getItem('USER_DATA'));
    setUserData(user);

    if (user && allowedAdmins.includes(user.email)) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setAuth(false);
    setIsAdmin(false);
    setAuthAction('');
    setShowModal(false);
    setUserData(null);
  };

  const handleLoginSuccess = () => {
    setAuth(true);
    const user = JSON.parse(localStorage.getItem('USER_DATA'));
    setUserData(user);

    if (user && allowedAdmins.includes(user.email)) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }

    setAuthAction('');
    setShowModal(false);
  };

  const handleAuthClick = (action) => {
    setAuthAction(action);
    setShowModal(true);
  };

  return (
    <>
      {/* <Navbar bg="dark" variant="dark" expand="lg" sticky="top"> */}
<Navbar bg="" variant="" expand="lg" sticky="top" id='navbar'>
        <Container>
          {/* <Navbar.Brand as={NavLink} to="/" id='color'>IJMSABC</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              
              <Nav.Link as={NavLink} to="/" id='color' end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/About" id='color'>Aims and Scope</Nav.Link>
              <Nav.Link as={NavLink} to="/AuthorGuidelines" id='color'>Guidelines for Authors</Nav.Link>
              <Nav.Link as={NavLink} to="/CallForPapers" id='color'>Call For Papers</Nav.Link>
              <Nav.Link as={NavLink} to="/SubmitManuscript" id='color'>Article Submission System</Nav.Link>
              <Nav.Link as={NavLink} to="/EditorialBoard" id='color'>Editorial Board</Nav.Link>
              <Nav.Link as={NavLink} to="/Archives" id='color'>Archives</Nav.Link>
              <Nav.Link as={NavLink} to="/conferences" id='color'>Conferrences</Nav.Link>
              <Nav.Link as={NavLink} to="/ethics" id='color'>Ethics and policies</Nav.Link>
              <Nav.Link as={NavLink} to="/downloads" id='color'>Downloads</Nav.Link>
<Nav.Link as={NavLink} to="/member" id='color'>Membership</Nav.Link>
              <Nav.Link as={NavLink} to="/Contact" id='color'>Contact Us</Nav.Link>

              {/* <Nav.Link as={NavLink} to="/About" id='color'>About Us</Nav.Link>
              
              
              
              <Nav.Link as={NavLink} to="/SubmitManuscript" id='color'>Submit Manuscript</Nav.Link> */}



              {/* {auth ? (
                <>
                  {isAdmin && (
                    <NavDropdown title="Admin DB" id='color'>
                      <NavDropdown.Item as={NavLink} to="/Manuscripts">📄 Manuscripts</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/contactlist">📬 Contact-List</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/uploadpdf"> <FaFilePdf />Upload PDF</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/PdfList"> <FaFilePdf />Pdf List</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/uploadAnnouncement"> Upload Announcement</NavDropdown.Item>
                      <NavDropdown.Item as={NavLink} to="/RegisterList"> Register-List</NavDropdown.Item>
 <NavDropdown.Item as={NavLink} to="/VisitorStats">Visitor Stats</NavDropdown.Item>

                      
                    </NavDropdown>
                  )} */}


                  {/* <Nav.Link
                    as="button"
                    className="btn btn-link nav-link"
                    id="logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown title="Authenticate" id='color'>
                  <NavDropdown.Item onClick={() => handleAuthClick('login')}>
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleAuthClick('register')}>
                    Register
                  </NavDropdown.Item>
                </NavDropdown>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{authAction === 'login' ? 'Login' : 'Register'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {authAction === 'login' ? (
            <Login onLogin={handleLoginSuccess} />
          ) : (
            <Register onLogin={handleLoginSuccess} />
          )}
        </Modal.Body>
      </Modal>

      <UserInfoPortal user={userData} />
    </>
  );
};

export default NavigationBar;
