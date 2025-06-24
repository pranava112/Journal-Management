import './Footer.css';

import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';

import { CiLinkedin } from 'react-icons/ci';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} className="mb-3 mb-md-0">
            <div className="phone-wrapper">
              <FaPhone className="me-2" />
              <span className="phone">+91-9999999999</span>
            </div>
          </Col>

          <Col md={6} className="text-md-end mb-3 mb-md-0">
            <div className="icons">
              <a href="#" className="icon me-3"><FaFacebook /></a>
              <a href="#" className="icon me-3"><FaInstagram /></a>
              <a href="#" className="icon me-3"><FaTwitter /></a>
              <a href="#" className="icon"><CiLinkedin /></a>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0 developer-credit">
              Designed and Developed by V. Pranava Manjunath
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
