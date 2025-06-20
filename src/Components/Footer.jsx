import './Footer.css';

import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';

import { CiLinkedin } from 'react-icons/ci';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3 mt-4">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <div className="phone-wrapper">
              <FaPhone className="me-2" />
              <span className="phone">+91-9999999999</span>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="icons">
              <a href="#" className="icon me-3"><FaFacebook /></a>
              <a href="#" className="icon me-3"><FaInstagram /></a>
              <a href="#" className="icon me-3"><FaTwitter /></a>
              <a href="#" className="icon"><CiLinkedin /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
