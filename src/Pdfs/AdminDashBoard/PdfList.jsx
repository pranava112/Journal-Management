import "./PdfList.css";

import React, { useEffect, useState } from "react";

import Api from "../Api";
import EditPdfForm from "../EditPdfForm";

const PdfList = () => {
  const [pdfs, setPdfs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState(null);

  // ✅ Fetch all PDFs & filter by source = ijmsabc
  const fetchPdfs = async () => {
    try {
      const response = await Api.get("/pdfs");

      // 🔥 FILTER HERE
      const filteredPdfs = response.data.filter(
        (pdf) => pdf.source === "ijmsabc"
      );

      setPdfs(filteredPdfs);
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
      pdf_link: pdf.pdfLink,
      volume: pdf.volume,
      issueNo: pdf.issueNo,
      year: pdf.year,
      type: pdf.type,
      author: pdf.author,
      source: pdf.source,
    });
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <div className="pdf-list-container">
      <div className="pdf-list-header">
        <h2 className="pdf-list-title">IJMSABC PDFs</h2>
      </div>

      <div className="pdf-list-wrapper">
        <table className="pdf-table">
          <thead className="pdf-table-head">
            <tr>
              <th className="col-id">Id</th>
              <th className="col-title">Title</th>
              <th className="col-author">Author</th>
              <th className="col-volume">Volume</th>
              <th className="col-issue">Issue</th>
              <th className="col-year">Year</th>
              <th className="col-type">Type</th>
              <th className="col-actions">Actions</th>
            </tr>
          </thead>

          <tbody className="pdf-table-body">
            {pdfs.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center text-muted no-data">
                  No PDFs found for IJMSABC
                </td>
              </tr>
            ) : (
              pdfs.map((pdf) => (
                <tr key={pdf.id} className="pdf-row">
                  <td className="col-id" data-label="Id">{pdf.id}</td>

                  <td className="col-title" data-label="Title">
                    <a
                      className="pdf-link"
                      href={pdf.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={pdf.title}
                    >
                      {pdf.title}
                    </a>
                  </td>

                  <td className="col-author" data-label="Author">{pdf.author}</td>
                  <td className="col-volume" data-label="Volume">{pdf.volume}</td>
                  <td className="col-issue" data-label="Issue">{pdf.issueNo}</td>
                  <td className="col-year" data-label="Year">{pdf.year}</td>
                  <td className="col-type" data-label="Type">{pdf.type}</td>

                  <td className="col-actions" data-label="Actions">
                    <div className="action-buttons">
                      <button
                        className="btn btn-edit"
                        onClick={() => handleEditClick(pdf)}
                        title="Edit this PDF"
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-delete"
                        onClick={() => handleDelete(pdf.id)}
                        title="Delete this PDF"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Edit Form */}
      {editId && editForm && (
        <EditPdfForm
          editId={editId}
          editForm={editForm}
          setEditForm={setEditForm}
          setEditId={setEditId}
          pdfs={pdfs}
          setPdfs={setPdfs}
        />
      )}
    </div>
  );
};

export default PdfList;
