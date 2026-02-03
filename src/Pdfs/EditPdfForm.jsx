// import "./EditPdfForm.css";

// import React, { useState } from "react";

// import PdfApi from "./AdminDashBoard/PdfApi";

// const EditPdfForm = ({
//   editId,
//   editForm,
//   setEditForm,
//   setEditId,
//   pdfs,
//   setPdfs,
//   fetchPdfs,
// }) => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   // ✅ Handle input change
//   const handleEditChange = (e) => {
//     setEditForm({
//       ...editForm,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ✅ Handle file change
//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   // ✅ Submit Update Request
//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();

//       // ✅ Append fields EXACTLY as backend expects
//       formData.append("volume", editForm.volume);
//       formData.append("issue_no", editForm.issue_no);
//       formData.append("pub_year", editForm.pub_year);
//       formData.append("issue_type", editForm.issue_type);

//       formData.append("author", editForm.author);
//       formData.append("doi", editForm.doi);
//       formData.append("source", editForm.source);

//       // ✅ Append file only if user selected new PDF
//       if (selectedFile) {
//         formData.append("pdf_doc", selectedFile);
//       }

//       // ✅ API Call
//       const response = await PdfApi.put(
//         `/update/${editId}`,
//         formData
//       );

//       alert("✅ PDF Updated Successfully!");

//       // ✅ Update list instantly
//       const updatedList = pdfs.map((pdf) =>
//         pdf.id === editId ? response.data : pdf
//       );

//       setPdfs(updatedList);

//       // ✅ Close modal
//       setEditId(null);
//       setEditForm(null);
//       setSelectedFile(null);

//       // Optional refresh
//       if (fetchPdfs) fetchPdfs();

//     } catch (error) {
//       console.error("❌ Update Error:", error.response?.data || error.message);
//       alert("❌ Update Failed!");
//     }
//   };

//   return (
//     <div className="edit-modal-overlay">
//       <div className="edit-modal">
//         <h3 className="text-center mb-3">✏ Edit PDF Details</h3>

//         <form onSubmit={handleUpdateSubmit}>

//           {/* Volume */}
//           <input
//             type="text"
//             name="volume"
//             placeholder="Volume"
//             value={editForm.volume}
//             onChange={handleEditChange}
//             required
//           />

//           {/* Issue No */}
//           <input
//             type="text"
//             name="issue_no"
//             placeholder="Issue No"
//             value={editForm.issue_no}
//             onChange={handleEditChange}
//             required
//           />

//           {/* Pub Year */}
//           <input
//             type="text"
//             name="pub_year"
//             placeholder="Publication Year"
//             value={editForm.pub_year}
//             onChange={handleEditChange}
//             required
//           />

//           {/* Issue Type */}
//           <input
//             type="text"
//             name="issue_type"
//             placeholder="Issue Type"
//             value={editForm.issue_type}
//             onChange={handleEditChange}
//             required
//           />

//           {/* Author */}
//           <input
//             type="text"
//             name="author"
//             placeholder="Author"
//             value={editForm.author}
//             onChange={handleEditChange}
//             required
//           />

//           {/* DOI */}
//           <input
//             type="text"
//             name="doi"
//             placeholder="DOI"
//             value={editForm.doi}
//             onChange={handleEditChange}
//           />

//           {/* Source */}
//           <select
//             name="source"
//             value={editForm.source}
//             onChange={handleEditChange}
//           >
//             <option value="ijmsabc">IJMSABC</option>
//             <option value="other">Other</option>
//           </select>

//           {/* Upload New PDF */}
//           <label className="mt-2">
//             Replace PDF File (Optional):
//           </label>
//           <input
//             type="file"
//             accept="application/pdf"
//             onChange={handleFileChange}
//           />

//           {/* Buttons */}
//           <div className="modal-buttons">
//             <button type="submit" className="btn btn-success">
//               ✅ Update
//             </button>

//             <button
//               type="button"
//               className="btn btn-secondary"
//               onClick={() => {
//                 setEditId(null);
//                 setEditForm(null);
//               }}
//             >
//               ❌ Cancel
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditPdfForm;

import "./EditPdfForm.css";

import { Alert, Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";

import PdfApi from "./AdminDashBoard/PdfApi";

const EditPdfForm = ({
  editId,
  editForm,
  setEditForm,
  setEditId,
  fetchPdfs,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [msg, setMsg] = useState("");

  // ✅ Handle Text Field Change
  const handleEditChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle File Change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // ✅ Update PDF Function
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // ✅ Append Metadata Fields
      formData.append("title", editForm.title);
      formData.append("volume", editForm.volume);
      formData.append("issue_no", editForm.issueNo);
      formData.append("pub_year", editForm.pubYear);
      formData.append("issue_type", editForm.issueType);
      formData.append("author", editForm.author);
      formData.append("doi", editForm.doi);
      formData.append("source", editForm.source);

      // ✅ Append File ONLY if Selected
      if (selectedFile) {
        formData.append("pdf_doc", selectedFile);
      }

      // ✅ Call Backend Update API
      await PdfApi.put(`/update/${editId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMsg("✅ PDF Updated Successfully!");

      // ✅ Refresh List
      fetchPdfs();

      // ✅ Close Modal After 1 Second
      setTimeout(() => {
        setEditId(null);
        setMsg("");
      }, 1000);
    } catch (err) {
      console.error("Update Error:", err);
      setMsg("❌ Update Failed!");
    }
  };

  return (
    <Modal show={true} onHide={() => setEditId(null)} centered>
      <Modal.Header closeButton>
        <Modal.Title>✏ Edit PDF Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {msg && <Alert variant="info">{msg}</Alert>}

        <Form onSubmit={handleUpdate}>
          {/* Title */}
          <Form.Group className="mb-2">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={editForm.title}
              onChange={handleEditChange}
              required
            />
          </Form.Group>

          {/* Author */}
          <Form.Group className="mb-2">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={editForm.author}
              onChange={handleEditChange}
            />
          </Form.Group>

          {/* Volume */}
          <Form.Group className="mb-2">
            <Form.Label>Volume</Form.Label>
            <Form.Control
              type="text"
              name="volume"
              value={editForm.volume}
              onChange={handleEditChange}
            />
          </Form.Group>

          {/* Issue No */}
          <Form.Group className="mb-2">
            <Form.Label>Issue Number</Form.Label>
            <Form.Control
              type="text"
              name="issueNo"
              value={editForm.issueNo}
              onChange={handleEditChange}
            />
          </Form.Group>

          {/* Publication Year */}
          <Form.Group className="mb-2">
            <Form.Label>Publication Year</Form.Label>
            <Form.Control
              type="text"
              name="pubYear"
              value={editForm.pubYear}
              onChange={handleEditChange}
            />
          </Form.Group>

          {/* Issue Type */}
          <Form.Group className="mb-2">
            <Form.Label>Issue Type</Form.Label>
            <Form.Select
              name="issueType"
              value={editForm.issueType}
              onChange={handleEditChange}
            >
              <option value="Current_Issue">Current Issue</option>
              <option value="Previous_Issue">Previous Issue</option>
            </Form.Select>
          </Form.Group>

          {/* Replace PDF File */}
          <Form.Group className="mb-3">
            <Form.Label>Replace PDF File (Optional)</Form.Label>
            <Form.Control type="file" accept=".pdf" onChange={handleFileChange} />
          </Form.Group>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={() => setEditId(null)}>
              Cancel
            </Button>

            <Button type="submit" variant="primary">
              ✅ Update PDF
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditPdfForm;
