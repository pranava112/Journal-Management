import { Alert, Button, Container, Spinner, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const ManuscriptList = () => {
  const [manuscripts, setManuscripts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  const fetchManuscripts = async () => {
    try {
      const response = await fetch('https://ijmsbc-backend.onrender.com/api/manuscripts', {
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error('Unauthorized or error fetching data');
      }

      const data = await response.json();
      setManuscripts(data);
    } catch (err) {
      setError('Please wait, it’s loading or token is missing.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this manuscript?')) return;

    try {
      const response = await fetch(`https://ijmsbc-backend.onrender.com/api/manuscripts/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      });

      if (response.ok) {
        setManuscripts(manuscripts.filter((item) => item._id !== id));
      } else {
        alert('Failed to delete.');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting manuscript.');
    }
  };

  useEffect(() => {
    fetchManuscripts();
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Submitted Manuscripts</h2>
      {loading && <Spinner animation="border" variant="primary" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && manuscripts.length === 0 && <p>No submissions found.</p>}

      {!loading && manuscripts.length > 0 && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Sl.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Abstract</th>
              <th>File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {manuscripts.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.title}</td>
                <td>{item.abstract}</td>
                <td>
                  <a
                    href={`https://ijmsbc-backend.onrender.com/${item.filePath}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(item._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ManuscriptList;
