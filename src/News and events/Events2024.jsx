import { Card, Col, Container, Row, Table } from 'react-bootstrap';

import React from 'react';

const Events2024 = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4">
      Major International Management Conclaves – 2024
    </h2>

    <Row className="g-4">
      <Col md={12}>
        <Card>
          <Card.Header className="bg-primary text-white">
            14th Indian Management Conclave (IMC 2024) @ XLRI Jamshedpur
          </Card.Header>
          <Card.Body>
            <Card.Text>
              📅 <strong>September 20–21, 2024</strong> – Hosted by MBAUniverse.com and XLRI Jamshedpur.  
              Included 25+ speakers like AICTE Chairman, CXOs from ITC, Uber, Axis Bank, KPMG, and Deans from IIMs & IITs.
            </Card.Text>
            <Card.Text>
              🔍 IMC‑IRC 2024 (International Research Conference) ran parallel, featuring keynote addresses, research paper presentations, and faculty workshops on advancing management education.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={12}>
        <Card>
          <Card.Header className="bg-warning text-dark">
            GCBMS‑2024 – Global Conference on Business Management & Social Sciences
          </Card.Header>
          <Card.Body>
            <Card.Text>
              📅 <strong>March 9–10, 2024</strong> – Held in Dubai (hybrid).  
              Theme: “Business Management & Social Sciences: Reflections and Directions for Future Research”.  
              Included keynote speakers from top global universities and featured SSCI & Scopus‑indexed publication opportunities.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={12}>
        <Card>
          <Card.Header className="bg-info text-dark">
            Management Conclave on “Sustainable Future”
          </Card.Header>
          <Card.Body>
            <Card.Text>
              📅 <strong>May 3–4, 2024</strong> – Organized by LPU online.  
              Focus: Circular economy, sustainable business transformation.  
              Academic partner: Gadjah Mada International Journal of Business (Scopus/ESCI/Web of Science).
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <h4 className="mt-5 mb-3">📊 Summary Table</h4>
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>Event</th>
          <th>Date & Venue</th>
          <th>Themes & Highlights</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>IMC 2024 @ XLRI</td>
          <td>Sept 20–21 • Jamshedpur</td>
          <td>25+ speakers, CXOs, AICTE, IMC-IRC research sessions</td>
        </tr>
        <tr>
          <td>GCBMS‑2024</td>
          <td>March 9–10 • Dubai / Zoom</td>
          <td>Global research, SSCI/Scopus publications</td>
        </tr>
        <tr>
          <td>Sustainable Future (LPU)</td>
          <td>May 3–4 • Online</td>
          <td>Circular economy, Scopus journal tie-up (Gadjah Mada)</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default Events2024;
