import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';

const SubmitManuscript = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle actual submission logic here (e.g., POST to backend)
    setSubmitted(true);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center text-primary mb-4">Submit Your Manuscript</h2>
      
      {submitted && <Alert variant="success">Your manuscript has been submitted successfully!</Alert>}

      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="authorName">
              <Form.Label>Author Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="authorEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="manuscriptTitle">
          <Form.Label>Manuscript Title</Form.Label>
          <Form.Control type="text" placeholder="Enter manuscript title" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="abstract">
          <Form.Label>Abstract</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter abstract (max 250 words)" required />
        </Form.Group>

        <Form.Group className="mb-4" controlId="fileUpload">
          <Form.Label>Upload Manuscript (PDF/DOC)</Form.Label>
          <Form.Control type="file" accept=".pdf,.doc,.docx" required />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">Submit Manuscript</Button>
        </div>
      </Form>
    </Container>
  );
};

export default SubmitManuscript;
