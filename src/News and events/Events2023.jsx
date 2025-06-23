import { Card, Col, Container, Row, Table } from 'react-bootstrap';

import React from 'react';

const Events2023 = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">
        Management of Science and Business Conclave 2023
      </h2>

      <Row className="g-4">
        <Col md={12}>
          <Card>
            <Card.Header className="bg-primary text-white">
              🎯 Conclave Overview
            </Card.Header>
            <Card.Body>
              <Card.Text>
                The 2023 conclave blended perspectives from academia, industry, and policy-makers. It focused on transforming science-driven research into business innovation and practical solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header className="bg-success text-white">
              📅 Date & Venue
            </Card.Header>
            <Card.Body>
              <Card.Text><strong>Date:</strong> June 15–16, 2023</Card.Text>
              <Card.Text><strong>Venue:</strong> Hybrid mode – hosted at IIM Bangalore with global virtual participation</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header className="bg-info text-dark">
              🧩 Key Themes
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <ul>
                  <li>Sustainable innovation in emerging economies</li>
                  <li>AI and Industry 5.0 in business processes</li>
                  <li>Policy frameworks facilitating science-business collaborations</li>
                  <li>Start-up ecosystem and technology commercialization</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card>
            <Card.Header className="bg-warning text-dark">
              🗣 Featured Speakers
            </Card.Header>
            <Card.Body>
              <ul>
                <li>Dr. Rekha Sharma – Secretary, Ministry of Science & Technology</li>
                <li>Mr. Arjun Mehta – CTO, Tata Consultancy Services</li>
                <li>Prof. Lisa Chen – MIT Sloan School of Management</li>
                <li>Ms. Nisha Kapoor – CEO, GreenTech Innovations</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card>
            <Card.Header className="bg-danger text-white">
              🎯 Outcomes
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Final communique recommended a national-level R&D incubation platform, a public–private innovation fund, and regular conclaves to bridge academia and industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h4 className="mt-5 mb-3">📊 Summary Table</h4>
      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Aspect</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Date</td>
            <td>June 15–16, 2023</td>
          </tr>
          <tr>
            <td>Venue</td>
            <td>Hybrid: IIM Bangalore (in-person + virtual)</td>
          </tr>
          <tr>
            <td>Themes</td>
            <td>Sustainable innovation, AI/Industry 5.0, policy, commercialization</td>
          </tr>
          <tr>
            <td>Speakers</td>
            <td>Govt dignitaries, academics, and industry leaders</td>
          </tr>
          <tr>
            <td>Key Outcomes</td>
            <td>Innovation fund, R&D incubator, ongoing conclave series</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Events2023;
