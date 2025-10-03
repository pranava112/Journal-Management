// import { Alert, Button, Container, Spinner, Table } from 'react-bootstrap';
// import React, { useEffect, useState } from 'react';

// const ManuscriptList = () => {
//   const [manuscripts, setManuscripts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const token = localStorage.getItem('token');

//   const fetchManuscripts = async () => {
//     try {
//       // 'http://localhost:5000/api/manuscripts'
//       // const response = await fetch( 'http://localhost:5000/api/manuscripts', {
//       const response = await fetch('https://ijmsbc-backend.onrender.com/api/manuscripts', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Unauthorized or error fetching data');
//       }

//       const data = await response.json();
//       setManuscripts(data);
//     } catch (err) {
//       setError('Please login. Authorization failed or token is missing.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this manuscript?')) return;

//     try {
//       const response = await fetch(`https://ijmsbc-backend.onrender.com/api/manuscripts/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         },
//       });

//       if (response.ok) {
//         setManuscripts(manuscripts.filter((item) => item._id !== id));
//       } else {
//         alert('Failed to delete.');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Error deleting manuscript.');
//     }
//   };

//   useEffect(() => {
//     fetchManuscripts();
//   }, []);

//   return (
//     <Container className="my-5">
//       <h2 className="text-center mb-4 sub_title">Submitted Manuscripts</h2>
//       {loading && <Spinner animation="border" variant="primary" />}
//       {error && <Alert variant="danger">{error}</Alert>}
//       {!loading && !error && manuscripts.length === 0 && <p>No submissions found.</p>}

//       {!loading && manuscripts.length > 0 && (
//         <Table striped bordered hover responsive>
//           <thead>
//             <tr>
//               <th>Sl.no</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Title</th>
//               <th>Key Words</th>
//               <th>Abstract</th>
//               <th>File</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {manuscripts.map((item, index) => (
//               <tr key={item._id}>
//                 <td>{index + 1}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.title}</td>
//                 <td>{item.keywords}</td>
//                 <td>{item.abstract}</td>
//                 <td>
//                   <a
//                     href={`https://ijmsbc-backend.onrender.com/${item.filePath}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     View
//                   </a>
//                 </td>
//                 <td>
//                   <Button variant="danger" size="sm" onClick={() => handleDelete(item._id)}>
//                     Delete
//                   </Button>
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


/////////////////////////////////////////////////////////////////////////////////////////////////

// import { Alert, Button, Container, Form, Spinner, Table } from "react-bootstrap";
// import React, { useEffect, useState } from "react";
// import { deleteManuscript, getAllManuscripts, updateManuscript } from "../Api/manuscriptApi";

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
//       await updateManuscript(editingId, editData);
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
//               <th>Submitted</th>
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
//                       name="keywords"
//                       value={editData.kwords}
//                       onChange={handleEditChange}
//                       className="mb-2"
//                     />
//                   ) : (
//                     m.kwords
//                   )}
//                 </td>
//                 <td>
//                   {m.pdfDoc ? (
//                     <a
//                       href={`/uploads/${m.pdfDoc}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {/* {m.fileName} */}
//                       PDF
//                     </a>
//                   ) : (
//                     "No File"
//                   )}
//                 </td>
//                 <td>{new Date(m.submittedAt).toLocaleString()}</td>
//                 <td>
//                   {editingId === m.id ? (
//                     <>
//                       <Button
//                         variant="success"
//                         size="sm"
//                         className="me-2"
//                         onClick={saveEdit}
//                         disabled={!editData.name || !editData.email || !editData.title}
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
//                       <Button
//                         variant="primary"
//                         size="sm"
//                         className="me-2"
//                         onClick={() => startEdit(m)}
//                       >
//                         Edit
//                       </Button>
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
////////////////////////////////////////////////////////////////////////////

import { Alert, Button, Container, Form, Spinner, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { deleteManuscript, getAllManuscripts, updateManuscript } from "../Api/manuscriptApi";

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
      await updateManuscript(editingId, editData); // API must send FormData if file support needed
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
              {/* <th>Submitted</th> */}
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
                      name="kwords"
                      value={editData.kwords}
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
                      PDF
                    </a>
                  ) : (
                    "No File"
                  )}
                </td>
                {/* <td>{new Date(m.submittedAt).toLocaleString()}</td> */}
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
