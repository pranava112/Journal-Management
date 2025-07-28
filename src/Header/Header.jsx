// import './Header.css'; // Import the CSS file

// import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';

// import { CiLinkedin } from 'react-icons/ci';
// import { NavLink } from 'react-router-dom';
// import React from 'react';

// const Header = () => {
//   return (
//     <>
//     <div>
      
//     </div>
//     <div id="header">
//     <div>
//        <img src="./public/logo.jpeg" alt="logo" />
//       <h1 className="title">
//         International Journal Management <br /> of <br /> Science and Business Conclave
//       </h1>
//     </div>

//       <div className="header-content">
//         <div className="icons">
//           <NavLink to="#" title="Facebook" className="icon"><FaFacebook /></NavLink>
//           <NavLink to="#" title="Twitter" className="icon"><FaTwitter /></NavLink>
//           <NavLink to="#" title="Instagram" className="icon"><FaInstagram /></NavLink>
//           <NavLink to="#" title="LinkedIn" className="icon"><CiLinkedin /></NavLink>
//           <NavLink className="icon phone-wrapper" title="Call"><FaPhone /><span className="phone">+9999999999</span></NavLink>
         
          
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Header;

import './Header.css'; // Custom styles

import { Col, Container, Row } from 'react-bootstrap';

import React from 'react';

const Header = () => (
  <div id="header" className="bg-light py-3 border-bottom shadow-sm">
    <Container fluid>
      <Row className="align-items-center">
        <Col xs={12} className="d-flex align-items-center justify-content-center flex-column flex-md-row">
          <img src="/logo.jpeg" alt="IJMSBC Logo" className="logo mb-3 mb-md-0 me-md-3" />
          <div className="text-center text-md-start">
            <h1 className="title mb-0">International Journal of Management Science and Business Conclave</h1>
            <h1 className="subtitle mb-0"></h1>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Header;
