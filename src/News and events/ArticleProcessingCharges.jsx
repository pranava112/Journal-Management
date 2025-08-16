import { Col, Container, Row } from 'react-bootstrap';

import React from 'react';

const ArticleProcessingCharges = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="mb-4">Article Processing Charges</h1>
          <p className="lead">
            All articles published in the <strong>International Journal of Management Science and Business Conclave (IJMSABC)</strong> 
            are immediately available as open access, and the journal does not collect any type of 
            <strong> Article Processing Charges (APC)</strong>.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleProcessingCharges;
