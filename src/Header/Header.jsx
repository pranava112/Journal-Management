import './Header.css';

import { Col, Container, Row } from 'react-bootstrap';

import React from 'react';
import UserInfoPortal from '../services/UserInfoPortal';

const Header = () => {
  const text = "International Journal Of Management Science And Business Conclave";

  // Function to wrap first letter of each word in a span
  const styledTitle = text.split(" ").map((word, index) => (
    <span key={index}>
      <span className="first-letter">{word.charAt(0)}</span>
      {word.slice(1)}{" "}
    </span>
  ));

  return (
    <>
      {/* <div id="header" className="bg-light py-3 border-bottom shadow-sm">
        <Container fluid>
          <Row className="align-items-center">
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center flex-column flex-md-row"
            >
              <img
                src="/logo.jpeg"
                alt="IJMSBC Logo"
                className="logo mb-3 mb-md-0 me-md-3"
              />
              <div className="text-center text-md-start">
                <h1 className="title mb-0">{styledTitle}</h1>
                <h1 className="subtitle mb-0"></h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}


      <div id='header1'>
        <div>
          <img
                src="/logo.jpeg"
                alt="IJMSBC Logo"
                className="logo mb-3 mb-md-0 me-md-3"
              />
        </div>
        <div>
          <h1><center>International Journal Of </center></h1>
          <h1><center>Management Science And Business Conclave(IJMSABC)</center></h1>
        </div>

      </div>
    </>
  );
};

export default Header;
