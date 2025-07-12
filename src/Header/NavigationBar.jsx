// // import './NavigationBar.css';

// // import { Container, Nav, Navbar } from 'react-bootstrap';
// // import React, { useEffect, useState } from 'react';
// // import { isLoggedIn, logout } from '../services/AuthService';

// // import Login from '../services/Login';
// // import { NavLink } from 'react-router-dom';

// // const NavigationBar = () => {
// //   const [auth, setAuth] = useState(false);

// //   useEffect(() => {
// //     setAuth(isLoggedIn());
// //   }, []);

// //   const handleLogout = () => {
// //     logout();
// //     setAuth(false);
// //   };

// //   return (
// //     <>
// //       <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
// //         <Container>
// //           <Navbar.Brand as={NavLink} to="/">IJMSABC</Navbar.Brand>
// //           <Navbar.Toggle aria-controls="basic-navbar-nav" />
// //           <Navbar.Collapse id="basic-navbar-nav">
// //             <Nav className="ms-auto">
// //               <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
// //               <Nav.Link as={NavLink} to="/About">About Us</Nav.Link>
// //               <Nav.Link as={NavLink} to="/Contact">Contact Us</Nav.Link>
// //               <Nav.Link as={NavLink} to="/EditorialBoard">Editorial Board</Nav.Link>
// //               <Nav.Link as={NavLink} to="/ListOfJournals">List Of Journals</Nav.Link>
// //               <Nav.Link as={NavLink} to="/SubmitManuscript">Submit Manuscript</Nav.Link>
// //               {auth && <Nav.Link as={NavLink} to="/Manuscripts">Manuscripts</Nav.Link>}
// //               {auth && (
// //                 <Nav.Link as="button" className="btn btn-link nav-link" onClick={handleLogout}>
// //                   Logout
// //                 </Nav.Link>
// //               )}
// //             </Nav>
// //           </Navbar.Collapse>
// //         </Container>
// //       </Navbar>

// //       {!auth && <Login onLogin={() => setAuth(true)} />}
// //     </>
// //   );
// // };

// // export default NavigationBar;

// import './NavigationBar.css';

// import { Container, Nav, Navbar } from 'react-bootstrap';
// import React, { useEffect, useState } from 'react';
// import { isLoggedIn, logout } from '../services/AuthService';

// import Login from '../services/Login';
// import { NavLink } from 'react-router-dom';
// import Register from '../services/Register';

// const NavigationBar = () => {
//   const [auth, setAuth] = useState(isLoggedIn());
//   const [showLogin, setShowLogin] = useState(true);

//   useEffect(() => {
//     setAuth(isLoggedIn());
//   }, []);

//   const handleLogout = () => {
//     logout();
//     setAuth(false);
//   };

//   return (
//     <>
//       <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
//         <Container>
//           <Navbar.Brand as={NavLink} to="/">IJMSABC</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
//               <Nav.Link as={NavLink} to="/About">About Us</Nav.Link>
//               <Nav.Link as={NavLink} to="/Contact">Contact Us</Nav.Link>
//               <Nav.Link as={NavLink} to="/EditorialBoard">Editorial Board</Nav.Link>
//               <Nav.Link as={NavLink} to="/ListOfJournals">List Of Journals</Nav.Link>
//               <Nav.Link as={NavLink} to="/SubmitManuscript">Submit Manuscript</Nav.Link>
//               {auth && <Nav.Link as={NavLink} to="/Manuscripts">Manuscripts</Nav.Link>}
//               {auth && (
//                 <Nav.Link as="button" className="btn btn-link nav-link" onClick={handleLogout}>
//                   Logout
//                 </Nav.Link>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Show Login/Register Forms if not authenticated */}
//       {!auth && (
//         <div style={{ padding: '1rem', textAlign: 'center' }}>
//           <button onClick={() => setShowLogin(!showLogin)} className="btn btn-primary mb-3">
//             {showLogin ? 'Need an account? Register' : 'Already registered? Login'}
//           </button>

//           {showLogin ? (
//             <Login onLogin={() => setAuth(true)} />
//           ) : (
//             <Register onLogin={() => setAuth(true)} />
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default NavigationBar;

import './NavigationBar.css';

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { isLoggedIn, logout } from '../services/AuthService';

import Login from '../services/Login';
import { NavLink } from 'react-router-dom';
import Register from '../services/Register';

const NavigationBar = () => {
  const [auth, setAuth] = useState(isLoggedIn());
  const [authAction, setAuthAction] = useState(''); // 'login' or 'register'

  useEffect(() => {
    setAuth(isLoggedIn());
  }, []);

  const handleLogout = () => {
    logout();
    setAuth(false);
    setAuthAction('');
  };

  const handleLoginSuccess = () => {
    setAuth(true);
    setAuthAction('');
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
              <Nav.Link as={NavLink} to="/ListOfJournals">List Of Journals</Nav.Link>
              <Nav.Link as={NavLink} to="/SubmitManuscript">Submit Manuscript</Nav.Link>

              {auth && (
                <>
                  <Nav.Link as={NavLink} to="/Manuscripts">Manuscripts</Nav.Link>
                  <Nav.Link as="button" id='logout' className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </>
              )}

              {!auth && (
                <NavDropdown title="Authenticate" id="auth-dropdown">
                  <NavDropdown.Item onClick={() => setAuthAction('login')}>Login</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setAuthAction('register')}>Register</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Auth Form Area */}
      {!auth && authAction && (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          {authAction === 'login' ? (
            <Login onLogin={handleLoginSuccess} />
          ) : (
            <Register onLogin={handleLoginSuccess} />
          )}
        </div>
      )} 

      
    </>
  );
};

export default NavigationBar;
