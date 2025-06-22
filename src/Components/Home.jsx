import { Col, Container, Image, Row } from 'react-bootstrap';

import React from 'react';

const Home = () => {
  return (
    <section className="py-5 bg-light text-center">
      <Container>
        <h1 className="mb-4 fw-bold text-primary">Welcome to IJMSBC</h1>

        <Row className="mb-5 justify-content-center">
          <Col xs={12} md={4} className="mb-3">
            <Image src="/pic 1.jpg" alt="img1" fluid rounded />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Image src="/pic 2.jpg" alt="img2" fluid rounded />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Image src="/pic 3.jpg" alt="img3" fluid rounded />
          </Col>
        </Row>

        {/* Uncomment and use below for future sections */}
        {/* 
        <Row className="mt-4 text-start">
          <Col md={6} className="mb-4">
            <h2 className="text-secondary">Author Guidelines</h2>
            <p>
              The <strong>International Journal of Management Science and Business Conclave</strong> welcomes
              the submission of manuscripts that meet the general criteria of significance and scientific excellence.
            </p>
            <p>Papers must be submitted with the understanding that they have not been published elsewhere.</p>
          </Col>

          <Col md={6} className="mb-4">
            <h2 className="text-secondary">Indexed In</h2>
            <ul className="list-unstyled">
              <li>✔ Academic Journals Database</li>
              <li>✔ Academic Keys</li>
              <li>✔ Academic OneFile - Agriculture Collection</li>
            </ul>
          </Col>
        </Row>
        */}
      </Container>
    </section>
  );
};

export default Home;
