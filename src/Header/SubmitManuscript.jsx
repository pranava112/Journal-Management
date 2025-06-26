import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';

import ManuscriptList from './ManuscriptList';

const SubmitManuscript = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', title: '', abstract: '', file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = new FormData();
    for (const key in formData) submission.append(key, formData[key]);

    try {
      const response = await fetch('/api/submit', { method: 'POST', body: submission });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', title: '', abstract: '', file: null });
      } else alert('Submission failed.');
    } catch (err) {
      console.error(err);
      alert('Server error during submission.');
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center text-primary mb-4">Submit Your Manuscript</h2>
      {submitted && <Alert variant="success">Submitted Successfully!</Alert>}

      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Abstract</Form.Label>
          <Form.Control as="textarea" name="abstract" value={formData.abstract} onChange={handleChange} rows={4} required />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Upload Manuscript</Form.Label>
          <Form.Control type="file" name="file" accept=".pdf,.doc,.docx" onChange={handleChange} required />
        </Form.Group>

        <div className="text-center">
          <Button type="submit">Submit</Button>
        </div>
      </Form>

      <ManuscriptList />
    </Container>
  );
};

export default SubmitManuscript;

