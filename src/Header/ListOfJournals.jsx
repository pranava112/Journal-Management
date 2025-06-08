import 'bootstrap/dist/css/bootstrap.min.css';

import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';

const journalSections = [
  {
    title: 'Scopus-Indexed Journals in Management Science & Business',
    description:
      'Scopus is a comprehensive abstract and citation database covering peer-reviewed literature across various disciplines. Here are some notable journals in the Management and Business domain:',
    journals: [
      {
        title: 'Journal of Business Research',
        publisher: 'Elsevier',
        focus:
          'Applies theory developed from business research to actual business situations.',
      },
      {
        title: 'International Journal of Production Economics',
        publisher: 'Elsevier',
        focus: 'Addresses the interface between engineering and management.',
      },
      {
        title: 'Journal of Business Logistics',
        publisher: 'Wiley',
        focus: 'Explores logistics and supply chain management.',
      },
      {
        title: 'European Business Review',
        publisher: 'Emerald Publishing',
        focus: 'Covers business strategy and organizational change.',
      },
      {
        title: 'International Journal of Management Science and Engineering Management',
        publisher: 'Taylor & Francis',
        focus: 'Integrates management science with engineering management.',
      },
    ],
  },
  {
    title: 'Web of Science-Indexed Journals in Management Science & Business',
    description:
      'Web of Science is a multidisciplinary platform that indexes high-impact journals. Here are some prominent journals in this category:',
    journals: [
      {
        title: 'Academy of Management Journal',
        publisher: 'Academy of Management',
        focus:
          'Empirical research that tests, extends, or builds management theory.',
      },
      {
        title: 'Journal of Management Studies',
        publisher: 'Wiley',
        focus: 'Theoretical and empirical papers in management.',
      },
      {
        title: 'Strategic Management Journal',
        publisher: 'Wiley',
        focus: 'Research on strategic management and organizational studies.',
      },
      {
        title: 'Journal of Operations Management',
        publisher: 'Elsevier',
        focus: 'Operations management research and practice.',
      },
      {
        title: 'Management Science',
        publisher: 'INFORMS',
        focus:
          'Research on all aspects of management related to strategy, entrepreneurship, innovation, and more.',
      },
    ],
  },
  {
    title: 'UGC CARE-Listed Journals in Management Science & Business',
    description:
      'The UGC CARE (Consortium for Academic and Research Ethics) list includes Indian journals that meet specific quality standards. Here are some recognized journals:',
    journals: [
      {
        title: 'Decision',
        publisher: 'Indian Institute of Management Calcutta',
        focus: 'Management and business decision-making research.',
      },
      {
        title: 'Journal of Management Research',
        publisher: 'Xavier Institute of Management',
        focus: 'Research in various areas of management.',
      },
      {
        title: 'Indian Journal of Finance',
        publisher: 'Associated Management Consultants',
        focus: 'Finance and related disciplines.',
      },
      {
        title: 'Journal of Human Values',
        publisher: 'SAGE Publications',
        focus: 'Human values in organizational contexts.',
      },
      {
        title: 'South Asian Journal of Management',
        publisher:
          'Association of Management Development Institutions in South Asia',
        focus: 'Management practices and research in South Asia.',
      },
    ],
  },
];

const ListOfJournals = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4"> List Of Journals</h2>

      <Accordion activeKey={activeKey}>
        {journalSections.map((section, idx) => (
          <Accordion.Item eventKey={idx.toString()} key={idx}>
            <Accordion.Header onClick={() => handleToggle(idx.toString())}>
              {section.title}
            </Accordion.Header>
            <Accordion.Body>
              <p>{section.description}</p>
              <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                {section.journals.map((journal, i) => (
                  <Col key={i}>
                    <Card className="h-100 shadow-sm border-0 rounded-4">
                      <Card.Body>
                        <Card.Title className="fw-bold fs-5">
                          {i + 1}) {journal.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Publisher: {journal.publisher}
                        </Card.Subtitle>
                        <Card.Text>{journal.focus}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default ListOfJournals;
