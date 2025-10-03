import { Button, Card, Col, Container, Row } from "react-bootstrap";

import React from "react";

const Downloads = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Downloads</h1>

      <Row className="g-4 justify-content-center">
        {/* Cover Page */}
        <Col md={6} lg={4}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body className="d-flex flex-column text-center">
              <Card.Title>Cover Page</Card.Title>
              <Button
                variant="primary"
                href="/public/Cover Page.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                View PDF
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Undertaking by Authors */}
        <Col md={6} lg={4}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body className="d-flex flex-column text-center">
              <Card.Title>Undertaking by Authors</Card.Title>
              <Button
                variant="primary"
                href="/public/UNDERTAKING BY AUTHORS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                View PDF
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Downloads;
