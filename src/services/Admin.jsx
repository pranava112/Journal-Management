import { Card, Container, ListGroup } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import React from 'react';

const Admin = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <Card className="shadow">
        <Card.Header as="h5">Admin Navigation</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <NavLink to="/Manuscripts" className="text-decoration-none">
              📄 Manuscripts List
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            <NavLink to="/contactlist" className="text-decoration-none">
              📬 Contacts List
            </NavLink>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default Admin;
