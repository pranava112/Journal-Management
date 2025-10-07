import React, { useEffect, useState } from "react";

import Api from "../Api";
import EditPdfForm from "../EditPdfForm";

// import Api from "./Api";



const PdfList = () => {
  const [pdfs, setPdfs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState(null);

  // ✅ Fetch all PDFs
  const fetchPdfs = async () => {
    try {
      const response = await Api.get(`/pdfs`);
      setPdfs(response.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
    }
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this PDF?")) return;
    try {
      await Api.delete(`/pdfs/${id}`);
      setPdfs(pdfs.filter((pdf) => pdf.id !== id));
    } catch (error) {
      console.error("Error deleting PDF:", error);
    }
  };

  // ✅ Start editing
  const handleEditClick = (pdf) => {
    setEditId(pdf.id);
    setEditForm({
      title: pdf.title,
      pdf_doc: null, // reset file
      volume: pdf.volume,
      issueNo: pdf.issueNo,
      year: pdf.year,
      type: pdf.type,
      author:pdf.author,
    });
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <div className="container mt-5 ">
      <h2 className="mb-4 sub_title">All PDF's</h2>
      <table className="table table-bordered table-hover pdflist">
        <thead className="table-light " >
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Volume</th>
            <th>Issue</th>
            <th>Year</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pdfs.map((pdf) => (
            <tr key={pdf.id}>
              <td>{pdf.id}</td>
              <td>
                <a
                id="anchor"
                  href={`http://localhost:8080/api/ijmsabc/pdfs/${pdf.id}/file`}
                  rel="noopener noreferrer"
                >
                  {pdf.title}
                </a>
              </td>
              <td>
                {pdf.author}
              </td>
              <td>{pdf.volume}</td>
              <td>{pdf.issueNo}</td>
              <td>{pdf.year}</td>
              <td>{pdf.type}</td>
              <td>
                <div id="buttons">
                  <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditClick(pdf)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(pdf.id)}
                >
                  Delete
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Separate Edit Component */}
      {editId && editForm && (
        <EditPdfForm
          editId={editId}
          editForm={editForm}
          setEditForm={setEditForm}
          setEditId={setEditId}
          pdfs={pdfs}
          setPdfs={setPdfs}
          // setAuthor={pdfs.author}
        />
      )}
    </div>
  );
};

export default PdfList;