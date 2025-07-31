import './NavigationBar.css';

import { Container, Modal, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { isLoggedIn, logout } from '../services/AuthService';

import Login from '../services/Login';
import { NavLink } from 'react-router-dom';
import Register from '../services/Register';
import UserInfoPortal from '../services/UserInfoPortal';

const NavigationBar = () => {
  const [auth, setAuth] = useState(isLoggedIn());
  const [authAction, setAuthAction] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState(null); // ✅ for portal

  const allowedAdmins = ['AdminIjmsabc@gmail.com', 'Admin@123'];

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
    setUserData(null); // ✅ clear portal user
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
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">IJMSABC</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/About">About Us</Nav.Link>
              <Nav.Link as={NavLink} to="/Contact">Contact Us</Nav.Link>
              <Nav.Link as={NavLink} to="/EditorialBoard">Editorial Board</Nav.Link>
              <Nav.Link as={NavLink} to="/Archive">Archive</Nav.Link>
              <Nav.Link as={NavLink} to="/SubmitManuscript">Submit Manuscript</Nav.Link>

              {auth ? (
                <>
                  {isAdmin && (
                    <NavDropdown title="Admin DB" id="auth-dropdown">
                      <Nav.Link as={NavLink} to="/Manuscripts" id='list'>📄 Manuscripts</Nav.Link>
                      <Nav.Link as={NavLink} to="/contactlist" id='list'>📬 Contact-List</Nav.Link>
                    </NavDropdown>
                  )}
                  <Nav.Link as="button" id='logout' className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown title="Authenticate" id="auth-dropdown">
                  <NavDropdown.Item onClick={() => handleAuthClick('login')}>Login</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleAuthClick('register')}>Register</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login/Register Modal */}
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

      {/* ✅ User Info Portal (always rendered if userData exists) */}
      <UserInfoPortal user={userData} />
    </>
  );
};

export default NavigationBar;
