import {
  Alert,
  Button,
  Container,
  Form,
  InputGroup,
  Modal,
  Spinner,
  Table,
} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

// Simulated admin login token
const ADMIN_TOKEN = 'ADMIN123';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingContact, setEditingContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', message: '' });
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const PER_PAGE = 5;
//   const API = '/api/contact';
  const API = 'https://ijmsbc-backend.onrender.com/api/contact';


  const isAdmin = !!localStorage.getItem('token');

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await fetch(API, {
        headers: { Authorization: localStorage.getItem('token') || '' },
      });
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setContacts(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Simulate admin login
    localStorage.setItem('token', ADMIN_TOKEN);
    fetchContacts();
  }, []);

  const filtered = contacts.filter(c =>
    [c.name, c.email, c.phone, c.address, c.message]
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const paginated = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);
  const pageCount = Math.ceil(filtered.length / PER_PAGE);

  const handleEdit = (c) => {
    setEditingContact(c._id);
    setForm(c);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!isAdmin) return alert('Admin only');
    if (window.confirm('Delete?')) {
      try {
        await fetch(`${API}/${id}`, {
          method: 'DELETE',
          headers: { Authorization: localStorage.getItem('token') },
        });
        setContacts(prev => prev.filter(c => c._id !== id));
      } catch {
        alert('Failed');
      }
    }
  };

  const handleUpdate = async () => {
    if (!isAdmin) return alert('Admin only');
    try {
      const res = await fetch(`${API}/${editingContact}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (res.ok) {
        fetchContacts();
        setShowModal(false);
      } else alert(result.error);
    } catch {
      alert('Server error');
    }
  };

  const handleCSVExport = () => {
    const headers = ['Name', 'Email', 'Phone', 'Address', 'Message'];
    const rows = contacts.map(c => [c.name, c.email, c.phone, c.address, c.message]);
    const csv = [headers, ...rows].map(r => r.map(v => `"${v}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacts.csv';
    a.click();
  };

  if (loading) return (
    <Container className="my-5 text-center"><Spinner animation="border" /></Container>
  );

  return (
    <Container className="my-5">
      <h2 className="mb-4">Submitted Contacts</h2>
      {error && <Alert variant="danger">{error}</Alert>}

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
        />
        <Button variant="outline-secondary" onClick={handleCSVExport}>Export CSV</Button>
      </InputGroup>

      <Table striped bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th><th>Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Message</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((c, i) => (
            <tr key={c._id}>
              <td>{(currentPage-1)*PER_PAGE + i + 1}</td>
              <td>{c.name}</td><td>{c.email}</td><td>{c.phone}</td><td>{c.address}</td><td>{c.message}</td>
              <td>
                <Button size="sm" variant="warning" onClick={() => handleEdit(c)}>Edit</Button>{' '}
                <Button size="sm" variant="danger" onClick={() => handleDelete(c._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="d-flex justify-content-center">
          {[...Array(pageCount)].map((_, idx) => (
            <Button
              key={idx}
              variant={idx+1 === currentPage ? 'primary' : 'light'}
              className="me-1"
              onClick={() => setCurrentPage(idx+1)}
            >
              {idx+1}
            </Button>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton><Modal.Title>Edit Contact</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form>
            {['name','email','phone','address','message'].map(field => (
              <Form.Group className="mb-3" key={field}>
                <Form.Label>{field.charAt(0).toUpperCase()+field.slice(1)}*</Form.Label>
                <Form.Control
                  as={field === 'address' || field === 'message' ? 'textarea' : 'input'}
                  rows={field==='address'||field==='message' ? 2 : undefined}
                  name={field}
                  value={form[field]}
                  onChange={e => setForm(prev => ({...prev, [field]: e.target.value}))}
                  required
                />
              </Form.Group>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ContactList;
