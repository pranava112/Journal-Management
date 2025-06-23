import { Card, Col, Container, Row, Table } from 'react-bootstrap';

import React from 'react';

const Events2025 = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4">
      Management of Science & Business Conclave – 2025
    </h2>

    <Row className="g-4">
      <Col md={12}>
        <Card>
          <Card.Header className="bg-primary text-white">
            IMA International Management Conclave 2025
          </Card.Header>
          <Card.Body>
            <Card.Text>
              📅 <strong>February 21–22, 2025</strong> – Organized by the Indore Management Association (IMA), with Grant Thornton Bharat as Knowledge Partner.
            </Card.Text>
            <Card.Text>
              🎤 <strong>Highlights:</strong>
            </Card.Text>
            <ul>
              <li>Sessions on leadership and SME strategies</li>
              <li>Featured speakers: Priyanka Gulati (Human Capital Consulting) and Priyanka Duggal (Deals Structuring)</li>
              <li>Themes: Cross-border expansion, investment, and business transformation</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <h4 className="mt-5 mb-3">📊 Summary Table</h4>
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>Event</th>
          <th>Date</th>
          <th>Highlights</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>IMA International Management Conclave</td>
          <td>February 21–22, 2025</td>
          <td>Leadership sessions, SME strategies, global investment focus</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default Events2025;
