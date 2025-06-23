import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import React from 'react';

const Contact = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <Row className="mb-4">
        <Col xs={12} className="mb-5">
          <h3>Office Address:</h3>
          <h5>_____________________________</h5>
          <p className="mt-4"><strong>Editor-in-Chief</strong></p>
          <p>International Journal Management of Science and Business Conclave</p>
          <p>-------------</p>
          <p>-------------</p>
          <p>-------------</p>
          <p>
            Mobile: <strong>----------</strong><br />
            Website: <a href="https://journal-management.vercel.app/" target="_blank" rel="noopener noreferrer">
              journal-management.vercel.app
            </a>
          </p>
        </Col>

        <Col xs={12}>
          <h4 className="mb-3">Submit Your Information</h4>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone*</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address*</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Enter your address" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message*</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write your message here" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
