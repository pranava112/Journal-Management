import './Layout.css';

import { Col, Container, Row } from 'react-bootstrap';

import AsideBar from '../Components/AsideBar';
import Footer from '../Components/Footer'
import Header from '../Header/Header';
import Info from '../Header/Info';
import NavigationBar from '../Header/NavigationBar';
import News from '../Announcement/News';
import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => {
  return (
    <div id="main">
      <Info/>
      <Header />
      <NavigationBar />
      {/* <News/> */}

      <Container fluid className="py-3">
        <Row>
           {/* <Col lg={3} md={4} sm={12}>
            <AsideBar />
          </Col> */}
          <Col lg={9} md={8} sm={12} className="mb-3">
            <div className="content-area p-3 shadow-sm bg-white rounded">
              <Outlet />
            </div>
          </Col>

          <Col lg={3} md={4} sm={12}>
            <AsideBar />
          </Col>
        </Row>
      </Container>

      <Footer/>
    </div>
  );
};

export default Layout;
