import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import React from 'react';

const members = [
  {
    name: 'Dr. John Smith',
    image: '../dummy-image.png',
    description: 'PhD in Computer Science, Harvard University. Editor-in-Chief of XYZ Journal.',
    pdf: '/assets/john.pdf',
  },
  {
    name: 'Prof. Jane Doe',
    image: '../dummy-image.png',
    description: 'Professor at Stanford. Research interests in AI and ML.',
    pdf: '/assets/jane.pdf',
  },
  {
    name: 'Dr. Alan Turing',
    image: '../dummy-image.png',
    description: 'Mathematician, pioneer of modern computing.',
    pdf: '/assets/alan.pdf',
  },
  {
    name: 'Dr. Grace Hopper',
    image: '../dummy-image.png',
    description: 'Computer scientist and United States Navy rear admiral.',
    pdf: '/assets/grace.pdf',
  },
];

const EditorialBoard = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Editorial Board</h1>
      <Row className="g-4">
        {members.map((member, index) => (
          <Col key={index} md={12}>
            <Card className="shadow-sm p-3">
              <Card.Body>
                <Row className="align-items-center">
                  {/* Image Column - ID 1 */}
                  <Col xs={12} sm={3} className="text-center mb-3 mb-sm-0">
                    <Image
                      src={member.image}
                      roundedCircle
                      width={100}
                      height={100}
                      style={{ objectFit: 'cover' }}
                      alt={member.name}
                      id="1"
                    />
                  </Col>

                  {/* Text Column - ID 2 */}
                  <Col xs={12} sm={6} id="2">
                    <h5 style={{color:'purple'}}>{member.name}</h5>
                    <p>{member.description}</p>
                  </Col>

                  {/* PDF Link Column - ID 3 */}
                  <Col xs={12} sm={3} className="text-center" id="3">
                    <a
                      href={member.pdf}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View PDF
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EditorialBoard;
