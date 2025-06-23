import { Card, Col, Container, Row, Table } from 'react-bootstrap';

import React from 'react';

const Events2022 = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5">International Management of Science and Business Conclaves – 2022</h2>

      <Row className="g-4">
        <Col md={6}>
          <Card>
            <Card.Header className="bg-primary text-white">
              1. International Management Conclave 2022 (TAPMI @ MUJ, Jaipur)
            </Card.Header>
            <Card.Body>
              <Card.Text><strong>Theme:</strong> “Restoring employment to pre-pandemic levels or better”</Card.Text>
              <Card.Text><strong>Date & Venue:</strong> Manipal University Jaipur. Inaugurated by Prof. Sudhendar Hanumantha Rao</Card.Text>
              <Card.Text><strong>Speakers:</strong></Card.Text>
              <ul>
                <li>Sameer Nayar (EVP, Oberoi Group)</li>
                <li>Bindu Venkatesh (VP, Oracle India)</li>
                <li>Prof. Amrita Dhillon (King’s College London)</li>
                <li>Prof. Vidya Mahambare (Great Lakes Institute)</li>
              </ul>
              <Card.Text><strong>Focus:</strong> Employment trends pre- and post-COVID; quality of life; industry-academia discussion.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header className="bg-success text-white">
              2. 12th Indian Management Conclave (IIM Kozhikode)
            </Card.Header>
            <Card.Body>
              <Card.Text><strong>Title:</strong> Measuring MBA Outcomes</Card.Text>
              <Card.Text><strong>Date:</strong> December 9–10, 2022</Card.Text>
              <Card.Text><strong>Highlight:</strong> Former President Ram Nath Kovind was chief guest and award presenter</Card.Text>
              <Card.Text><strong>Focus:</strong> Research assessment, corporate readiness, UG management admissions</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header className="bg-info text-dark">
              3. Symbiosis–SIBM Pune Manthan 2022
            </Card.Header>
            <Card.Body>
              <Card.Text><strong>Nature:</strong> Virtual industry–academia conclave in August 2022</Card.Text>
              <Card.Text><strong>Format:</strong> 25+ sessions, 60+ industry experts</Card.Text>
              <Card.Text><strong>Themes:</strong></Card.Text>
              <ul>
                <li>Digital transformation in banking & finance</li>
                <li>R&D in healthcare & pharma</li>
                <li>Neo‑banks, FinTech, investment banking</li>
                <li>Tech-led organizational growth</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header className="bg-warning text-dark">
              4. Samavesh 2022 – SPJIMR (Mumbai)
            </Card.Header>
            <Card.Body>
              <Card.Text><strong>Nature:</strong> Series of thematic conclaves (Ops, Finance, Info Mgmt, Marketing)</Card.Text>
              <Card.Text><strong>Speakers:</strong> Experts from Michelin, Capgemini, Paytm, Razorpay, HDFC, etc.</Card.Text>
              <Card.Text><strong>Key Themes:</strong></Card.Text>
              <ul>
                <li>AI, IoT, analytics in enterprises</li>
                <li>Digital marketing automation</li>
                <li>Intelligent supply chains</li>
                <li>FinTech’s sectoral impact</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card>
            <Card.Header className="bg-danger text-white">
              5. International Conclave on AI & Industry 4.0 (MITE, India – March 2023)
            </Card.Header>
            <Card.Body>
              <Card.Text><strong>Scope:</strong> Follow-up to 2022 science–business dialogues, held March 3–4, 2023</Card.Text>
              <Card.Text><strong>Coverage:</strong> AI in operations, HR, data science, robotics</Card.Text>
              <Card.Text><strong>Participation:</strong> 500+ delegates from academia and industry</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h4 className="mt-5 mb-3">📊 Conclave Summary Table</h4>
      <Table striped bordered responsive hover>
        <thead className="table-dark">
          <tr>
            <th>Event</th>
            <th>Theme(s)</th>
            <th>Participation & Format</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TAPMI @ MUJ Intl. Management Conclave</td>
            <td>Restoring employment post-pandemic</td>
            <td>Academia + corporates (Oberoi, Oracle...)</td>
          </tr>
          <tr>
            <td>IIM Kozhikode Indian Management Conclave</td>
            <td>Measuring MBA outcomes</td>
            <td>Plenary sessions, led by former President</td>
          </tr>
          <tr>
            <td>SIBM Pune Manthan</td>
            <td>Digital banking, FinTech, pharma R&D, strategic growth</td>
            <td>60+ experts, online sessions</td>
          </tr>
          <tr>
            <td>SPJIMR’s Samavesh</td>
            <td>Ops, finance, info Mgmt, marketing, AI, supply chain</td>
            <td>Thematic conclaves, industry leaders</td>
          </tr>
          <tr>
            <td>MITE AI & Industry 4.0 Conclave</td>
            <td>AI in business, robotics, HR, data science</td>
            <td>500+ delegates, cross-disciplinary forum</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Events2022;
