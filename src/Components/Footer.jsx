import './Footer.css';

import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';

import { CiLinkedin } from 'react-icons/ci';
import React from 'react';
import VisitorCount from './VisitorCount';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          
          {/* Contact Info */}
          <Col md={4} className="mb-3 mb-md-0">
            <div className="phone-wrapper d-flex justify-content-center justify-content-md-start align-items-center">
              <FaPhone className="me-2" />
              <span className="phone">+91-8143123534</span>
            </div>
          </Col>

          {/* Copyright */}
          <Col md={4} className="mb-3 mb-md-0 text-center">
            <p className="mb-0">&copy; 2025 IJMSABC . All rights reserved.</p>
          </Col>

          {/* Social Icons */}
          <Col md={4} className="text-center text-md-end">
            <div className="icons">
              <a href="#" className="icon me-3"><FaFacebook /></a>
              <a href="#" className="icon me-3"><FaInstagram /></a>
              <a href="#" className="icon me-3"><FaTwitter /></a>
              <a href="#" className="icon"><CiLinkedin /></a>
            </div>
            <div>
              {/* <VisitorCount/> */}
            </div>
          </Col>

        </Row>

        {/* Developer Credit */}
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
