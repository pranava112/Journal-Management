import { Button, Container, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Api from "../Pdfs/Api";

const MembershipList = () => {
  const [memberships, setMemberships] = useState([]);

  // Fetch memberships from backend
  const fetchMemberships = async () => {
    try {
      const response = await Api.get("/membership"); // should match your backend route
      setMemberships(response.data);
    } catch (error) {
      console.error("Error fetching memberships:", error.response ? error.response.data : error.message);
      alert("Failed to fetch membership list ❌");
    }
  };

  useEffect(() => {
    fetchMemberships();
  }, []);

  // Delete a membership
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this membership?")) return;

    try {
      await Api.delete(`/membership/${id}`);
      alert("Membership deleted successfully ✅");
      setMemberships(memberships.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Error deleting membership:", error.response ? error.response.data : error.message);
      alert("Failed to delete membership ❌");
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Membership List</h1>
      {memberships.length === 0 ? (
        <p>No memberships found.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Address</th>
              <th>Membership Type</th>
              <th>CV</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {memberships.map((m) => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.designation}</td>
                <td>{m.email}</td>
                <td>{m.address}</td>
                <td>{m.membershiptype}</td>
                <td>
                  {m.cv ? (
                    <a
                      href={`data:application/pdf;base64,${m.cv}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View CV
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(m.id)}>
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

export default MembershipList;
