import "./EditPdfForm.css";

import Api from "./Api";
import React from "react";

const EditPdfForm = ({ editId, editForm, setEditForm, setEditId, pdfs, setPdfs, }) => {
  // ✅ Handle input change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  // ✅ Handle Update
  const handleUpdate = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append("title", editForm.title);
    params.append("volume", editForm.volume);
    params.append("issueNo", editForm.issueNo);
    params.append("year", editForm.year);
    params.append("type", editForm.type);
    params.append("author", editForm.author);
    params.append("source", "ijmsabc"); // CONSTANT

    // only append pdf_link if a new link is provided
    if (editForm.pdf_link && editForm.pdf_link.trim()) {
      params.append("pdf_link", editForm.pdf_link);
    }

    try {
      const response = await Api.put(`/pdfs/${editId}`, params, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      // ✅ Replace updated record in state
      setPdfs(pdfs.map((p) => (p.id === editId ? response.data : p)));
      setEditId(null);
      alert("PDF updated successfully ✅");
    } catch (error) {
      console.error("Error updating PDF:", error.response?.data || error.message);
      alert("Update failed ❌");
    }
  };

  return (
    <div className="edit-pdf-container">
      <div className="edit-pdf-card">
        <h4 className="edit-pdf-title">Edit PDF</h4>
        <form onSubmit={handleUpdate} className="edit-pdf-form">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              value={editForm.title}
              onChange={handleEditChange}
              placeholder="Title"
              className="form-control"
              readOnly
            />
          </div>

          {/* ✅ Show current PDF */}
          {editForm.pdf_link && (
            <div className="form-group pdf-link-preview">
              <a
                href={editForm.pdf_link}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-link-text"
              >
                Current PDF: {editForm.title}
              </a>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="pdf_link" className="form-label">PDF Link: </label>
            <input
              type="url"
              id="pdf_link"
              name="pdf_link"
              onChange={handleEditChange}
              placeholder="Enter PDF link (e.g. https://example.com/file.pdf)"
              value={editForm.pdf_link || ""}
              className="form-control"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="author" className="form-label">Author: </label>
            <input  
              type="text"
              id="author"
              name="author"
              value={editForm.author}
              onChange={handleEditChange}
              className="form-control"
              readOnly
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="year" className="form-label">Year: </label>
              <input
                type="text"
                name="year"
                id="year"
                value={editForm.year}
                onChange={handleEditChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="volume" className="form-label">Volume: </label>
              <input
                type="text"
                name="volume"
                id="volume"
                value={editForm.volume}
                onChange={handleEditChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="issueNo" className="form-label">Issue No: </label>
              <input
                type="text"
                id="issueNo"
                name="issueNo"
                value={editForm.issueNo}
                onChange={handleEditChange}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="type" className="form-label">Type: </label>
            <select 
              name="type" 
              id="type" 
              onChange={handleEditChange} 
              value={editForm.type} 
              className="form-control form-select"
              required
            >
              <option value="">--select--</option>
              <option value="Current_Issue">Current Issue</option>
              <option value="Previous_Issue">Previous Issue</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-success">
              Save Changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEditId(null)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPdfForm;