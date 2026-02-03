import { Alert, Button, Container, Form, Spinner, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {
  deleteManuscript,
  getAllManuscripts,
  updateManuscript,
} from "../Api/ManuscriptApi.jsx";

const ManuscriptList = () => {
  const [manuscripts, setManuscripts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Fetch manuscripts (FILTER BY SOURCE)
  const fetchManuscripts = async () => {
    try {
      setLoading(true);
      const res = await getAllManuscripts();

      // ✅ ONLY IJMSABC manuscripts
      const filtered = res.data.filter(
        (m) => m.source === "ijmsabc"
      );

      setManuscripts(filtered);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch manuscripts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManuscripts();
  }, []);

  // Auto-clear alerts
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  // Delete manuscript
  const handleDelete = async (id) => {
    if (window.confirm("Delete this manuscript?")) {
      try {
        await deleteManuscript(id);
        setSuccess("Manuscript deleted successfully!");
        fetchManuscripts();
      } catch (err) {
        console.error(err);
        setError("Failed to delete manuscript.");
      }
    }
  };

  // Start editing
  const startEdit = (m) => {
    setEditingId(m.id);
    setEditData({
      name: m.name,
      email: m.email,
      title: m.title,
      abst: m.abst,
      keywords: m.kwords || "",
    });
  };

  // Handle input change
  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Save edit
  const saveEdit = async () => {
    try {
      await updateManuscript(editingId, editData);
      setEditingId(null);
      setSuccess("Manuscript updated successfully!");
      fetchManuscripts();
    } catch (err) {
      console.error(err);
      setError("Failed to update manuscript.");
    }
  };

  // ✅ Export CSV (only ijmsabc manuscripts)
  const downloadCSV = () => {
    if (!manuscripts.length) {
      setError("No manuscripts to export.");
      return;
    }

    const headers = ["Name", "Email", "Title", "Abstract", "Keywords"];

    const csvRows = [
      headers.join(","),
      ...manuscripts.map((m) =>
        [
          `"${m.name}"`,
          `"${m.email}"`,
          `"${m.title}"`,
          `"${m.abst?.replace(/"/g, '""')}"`,
          `"${m.kwords || ""}"`,
        ].join(",")
      ),
    ];

    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ijmsabc_manuscripts.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>IJMSABC Manuscripts</h2>
        <Button variant="success" onClick={downloadCSV}>
          Export as CSV
        </Button>
      </div>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : manuscripts.length === 0 ? (
        <p className="text-center text-muted">
          No IJMSABC manuscripts found.
        </p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Abstract</th>
              <th>Keywords</th>
              <th>File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {manuscripts.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.title}</td>
                <td>{m.abst}</td>
                <td>{m.kwords}</td>
                <td>
                  <a
                    href={`https://api.ijmsabc.org/api/ijmsabc/manuscript/${m.id}/file`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOC
                  </a>
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(m.id)}
                  >
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
