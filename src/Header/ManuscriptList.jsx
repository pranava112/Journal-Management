// import { Alert, Button, Container, Form, Spinner, Table } from "react-bootstrap";
// import React, { useEffect, useState } from "react";
// import { deleteManuscript, getAllManuscripts, updateManuscript } from "../Api/ManuscriptApi.jsx";

// const ManuscriptList = () => {
//   const [manuscripts, setManuscripts] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [editData, setEditData] = useState({});
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch manuscripts
//   const fetchManuscripts = async () => {
//     try {
//       setLoading(true);
//       const res = await getAllManuscripts();
//       setManuscripts(res.data);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to fetch manuscripts.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchManuscripts();
//   }, []);

//   // Auto-clear messages
//   useEffect(() => {
//     if (error || success) {
//       const timer = setTimeout(() => {
//         setError("");
//         setSuccess("");
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [error, success]);

//   // Delete manuscript
//   const handleDelete = async (id) => {
//     if (window.confirm("Delete this manuscript?")) {
//       try {
//         await deleteManuscript(id);
//         setSuccess("Manuscript deleted successfully!");
//         fetchManuscripts();
//       } catch (err) {
//         console.error(err);
//         setError("Failed to delete manuscript.");
//       }
//     }
//   };

//   // Start editing
//   const startEdit = (manuscript) => {
//     setEditingId(manuscript.id);
//     setEditData({
//       name: manuscript.name,
//       email: manuscript.email,
//       title: manuscript.title,
//       abst: manuscript.abst,
//       keywords: manuscript.keywords || "",
//     });
//   };

//   // Handle input change
//   const handleEditChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   // Save edit
//   const saveEdit = async () => {
//     try {
//       await updateManuscript(editingId, editData); // API must send FormData if file support needed
//       setEditingId(null);
//       setSuccess("Manuscript updated successfully!");
//       fetchManuscripts();
//     } catch (err) {
//       console.error(err);
//       setError("Failed to update manuscript.");
//     }
//   };

//   return (
//     <Container className="mt-4">
//       <h2 className="mb-4 text-center">All Manuscripts</h2>
//       {error && <Alert variant="danger">{error}</Alert>}
//       {success && <Alert variant="success">{success}</Alert>}

//       {loading ? (
//         <div className="text-center">
//           <Spinner animation="border" />
//         </div>
//       ) : manuscripts.length === 0 ? (
//         <p className="text-center text-muted">No manuscripts found.</p>
//       ) : (
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Title</th>
//               <th>Abstract</th>
//               <th>Keywords</th>
//               <th>File</th>
//               {/* <th>Submitted</th> */}
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {manuscripts.map((m) => (
//               <tr key={m.id}>
//                 <td>{m.id}</td>
//                 <td>
//                   {editingId === m.id ? (
//                     <Form.Control
//                       type="text"
//                       name="name"
//                       value={editData.name}
//                       onChange={handleEditChange}
//                       className="mb-2"
//                     />
//                   ) : (
//                     m.name
//                   )}
//                 </td>
//                 <td>
//                   {editingId === m.id ? (
//                     <Form.Control
//                       type="email"
//                       name="email"
//                       value={editData.email}
//                       onChange={handleEditChange}
//                       className="mb-2"
//                     />
//                   ) : (
//                     m.email
//                   )}
//                 </td>
//                 <td>
//                   {editingId === m.id ? (
//                     <Form.Control
//                       type="text"
//                       name="title"
//                       value={editData.title}
//                       onChange={handleEditChange}
//                       className="mb-2"
//                     />
//                   ) : (
//                     m.title
//                   )}
//                 </td>
//                 <td>
//                   {editingId === m.id ? (
//                     <Form.Control
//                       as="textarea"
//                       rows={2}
//                       name="abst"
//                       value={editData.abst}
//                       onChange={handleEditChange}
//                       className="mb-2"
//                     />
//                   ) : (
//                     m.abst
//                   )}
//                 </td>
//                 <td>
//                   {editingId === m.id ? (
//                     <Form.Control
//                       type="text"
//                       name="kwords"
//                       value={editData.kwords}
//                       onChange={handleEditChange}
//                       className="mb-2"
//                     />
//                   ) : (
//                     m.kwords
//                   )}
//                 </td>
//                 {/* <td>
//                   {m.id ? (
//                     <a
//                       href={`http://localhost:8080/api/ijmsabc/manuscript/${m.id}/file`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       PDF
//                     </a>
//                   ) : (
//                     "No File"
//                   )}
//                 </td> */}

//                 <td>
//   {m.id ? (
//     <a
//       href={`http://localhost:8080/api/ijmsabc/manuscript/${m.id}/file`}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       DOC
//     </a>
//   ) : (
//     "No File"
//   )}
// </td>


//                 {/* <td>{new Date(m.submittedAt).toLocaleString()}</td> */}
//                 <td>
//                   {editingId === m.id ? (
//                     <>
//                       <Button
//                         variant="success"
//                         size="sm"
//                         className="me-2"
//                         onClick={saveEdit}
//                         disabled={
//                           !editData.name || !editData.email || !editData.title
//                         }
//                       >
//                         Save
//                       </Button>
//                       <Button
//                         variant="secondary"
//                         size="sm"
//                         onClick={() => setEditingId(null)}
//                       >
//                         Cancel
//                       </Button>
//                     </>
//                   ) : (
//                     <>
//                       {/* <Button
//                         variant="primary"
//                         size="sm"
//                         className="me-2"
//                         onClick={() => startEdit(m)}
//                       >
//                         Edit
//                       </Button> */}
//                       <Button
//                         variant="danger"
//                         size="sm"
//                         onClick={() => handleDelete(m.id)}
//                       >
//                         Delete
//                       </Button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </Container>
//   );
// };

// export default ManuscriptList;

import { Alert, Button, Container, Form, Spinner, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { deleteManuscript, getAllManuscripts, updateManuscript } from "../Api/ManuscriptApi.jsx";

const ManuscriptList = () => {
  const [manuscripts, setManuscripts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch manuscripts
  const fetchManuscripts = async () => {
    try {
      setLoading(true);
      const res = await getAllManuscripts();
      setManuscripts(res.data);
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

  // Auto-clear messages
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
  const startEdit = (manuscript) => {
    setEditingId(manuscript.id);
    setEditData({
      name: manuscript.name,
      email: manuscript.email,
      title: manuscript.title,
      abst: manuscript.abst,
      keywords: manuscript.keywords || "",
    });
  };

  // Handle input change
  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Save edit
  const saveEdit = async () => {
    try {
      await updateManuscript(editingId, editData); // API should handle FormData if file upload is supported
      setEditingId(null);
      setSuccess("Manuscript updated successfully!");
      fetchManuscripts();
    } catch (err) {
      console.error(err);
      setError("Failed to update manuscript.");
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">All Manuscripts</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : manuscripts.length === 0 ? (
        <p className="text-center text-muted">No manuscripts found.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
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
                <td>{m.id}</td>

                <td>
                  {editingId === m.id ? (
                    <Form.Control
                      type="text"
                      name="name"
                      value={editData.name}
                      onChange={handleEditChange}
                      className="mb-2"
                    />
                  ) : (
                    m.name
                  )}
                </td>

                <td>
                  {editingId === m.id ? (
                    <Form.Control
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleEditChange}
                      className="mb-2"
                    />
                  ) : (
                    m.email
                  )}
                </td>

                <td>
                  {editingId === m.id ? (
                    <Form.Control
                      type="text"
                      name="title"
                      value={editData.title}
                      onChange={handleEditChange}
                      className="mb-2"
                    />
                  ) : (
                    m.title
                  )}
                </td>

                <td>
                  {editingId === m.id ? (
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="abst"
                      value={editData.abst}
                      onChange={handleEditChange}
                      className="mb-2"
                    />
                  ) : (
                    m.abst
                  )}
                </td>

                <td>
                  {editingId === m.id ? (
                    <Form.Control
                      type="text"
                      name="keywords"
                      value={editData.keywords}
                      onChange={handleEditChange}
                      className="mb-2"
                    />
                  ) : (
                    m.kwords
                  )}
                </td>

                <td>
                  {m.id ? (
                    <a
                      href={`http://localhost:8080/api/ijmsabc/manuscript/${m.id}/file`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOC
                    </a>
                  ) : (
                    "No File"
                  )}
                </td>

                <td>
                  {editingId === m.id ? (
                    <>
                      <Button
                        variant="success"
                        size="sm"
                        className="me-2"
                        onClick={saveEdit}
                        disabled={
                          !editData.name || !editData.email || !editData.title
                        }
                      >
                        Save
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      {/* <Button
                        variant="primary"
                        size="sm"
                        className="me-2"
                        onClick={() => startEdit(m)}
                      >
                        Edit
                      </Button> */}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(m.id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
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
