// === Login.js ===

import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { getToken, saveToken } from './AuthService';

import UserInfoPortal from './UserInfoPortal';

const Login = ({ onLogin }) => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("USER_DATA"));
    if (storedUser) {
      setUserData(storedUser);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const res = await fetch('https://ijmsbc-backend.onrender.com/api/user/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!res.ok) throw new Error('Failed to fetch profile');

      const profile = await res.json();
      localStorage.setItem("USER_DATA", JSON.stringify(profile));
      setUserData(profile);
    } catch (err) {
      console.error("Profile fetch failed:", err.message);
      setError("Could not fetch user profile");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('https://ijmsbc-backend.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const json = await res.json();

      if (res.ok) {
        saveToken(json.token);
        await fetchUserProfile(json.token);
        onLogin();
      } else {
        setError(json.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow p-4">
              <h2 className="text-center mb-4">Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>

      <UserInfoPortal user={userData} />
    </>
  );
};

export default Login;
