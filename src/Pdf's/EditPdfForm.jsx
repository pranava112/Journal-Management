// import Api from "./Api";
// import React from "react";

// const EditPdfForm = ({ editId, editForm, setEditForm, setEditId, pdfs, setPdfs }) => {
//   // ✅ Handle input change
//   const handleEditChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "pdf_doc") {
//       setEditForm({ ...editForm, pdf_doc: files[0] });
//     } else {
//       setEditForm({ ...editForm, [name]: value });
//     }
//   };

//   // ✅ Handle Update
//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", editForm.title);
//     formData.append("volume", editForm.volume);
//     formData.append("issueNo", editForm.issueNo);
//     formData.append("year", editForm.year);
//     formData.append("type", editForm.type);

//     if (editForm.pdf_doc instanceof File) {
//       formData.append("pdf_doc", editForm.pdf_doc);
//     }

//     try {
//       const response = await Api.put(`/${editId}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       // ✅ Replace updated record in state
//       setPdfs(pdfs.map((p) => (p.id === editId ? response.data : p)));
//       setEditId(null);
//       alert("PDF updated successfully ✅");
//     } catch (error) {
//       console.error("Error updating PDF:", error);
//       alert("Update failed ❌");
//     }
//   };

//   return (
//     <div className="card mt-4 p-3 shadow-sm">
//       <h4>Edit PDF</h4>
//       <form onSubmit={handleUpdate}>
//         <input
//           type="text"
//           name="title"
//           value={editForm.title}
//           onChange={handleEditChange}
//           placeholder="Title"
//           className="form-control mb-2"
//           required
//         />
//         <input
//           type="file"
//           name="pdf_doc"
//           onChange={handleEditChange}
//           className="form-control mb-2"
//           accept="application/pdf"
//         />
//         <input
//           type="text"
//           name="year"
//           value={editForm.year}
//           onChange={handleEditChange}
//           className="form-control mb-2"
//           required
//         />
//         <input
//           type="text"
//           name="volume"
//           value={editForm.volume}
//           onChange={handleEditChange}
//           className="form-control mb-2"
//           required
//         />
//         <input
//           type="text"
//           name="issueNo"
//           value={editForm.issueNo}
//           onChange={handleEditChange}
//           className="form-control mb-2"
//           required
//         />
//         <input
//           type="text"
//           name="type"
//           value={editForm.type}
//           onChange={handleEditChange}
//           className="form-control mb-2"
//           required
//         />
//         <button type="submit" className="btn btn-success">
//           Save Changes
//         </button>
//         <button
//           type="button"
//           className="btn btn-secondary ms-2"
//           onClick={() => setEditId(null)}
//         >
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditPdfForm;

import Api from "./Api";
import React from "react";

const EditPdfForm = ({ editId, editForm, setEditForm, setEditId, pdfs, setPdfs }) => {
  // ✅ Handle input change
  const handleEditChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "pdf_doc") {
      if (files && files.length > 0) {
        setEditForm({ ...editForm, pdf_doc: files[0] }); // store File object
      }
    } else {
      setEditForm({ ...editForm, [name]: value });
    }
  };

  // ✅ Handle Update
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", editForm.title);
    formData.append("volume", editForm.volume);
    formData.append("issueNo", editForm.issueNo);
    formData.append("year", editForm.year);
    formData.append("type", editForm.type);

    // only append pdf if a new file is selected
    if (editForm.pdf_doc instanceof File) {
      formData.append("pdf_doc", editForm.pdf_doc);
    }

    try {
      const response = await Api.put(`/${editId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // ✅ Replace updated record in state
      setPdfs(pdfs.map((p) => (p.id === editId ? response.data : p)));
      setEditId(null);
      alert("PDF updated successfully ✅");
    } catch (error) {
      console.error("Error updating PDF:", error);
      alert("Update failed ❌");
    }
  };

  return (
    <div className="card mt-4 p-3 shadow-sm">
      <h4>Edit PDF</h4>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="title"
          value={editForm.title}
          onChange={handleEditChange}
          placeholder="Title"
          className="form-control mb-2"
          required
        />

        {/* ✅ Show current PDF info */}
        {!(editForm.pdf_doc instanceof File) && editForm.pdf_doc && (
          <div className="mb-2">
            <a
              href={editForm.pdfUrl || `http://localhost:8080/api/pdfs/${editId}/download`}
              // target="_blank"
              // rel="noopener noreferrer"
            >
              Current PDF: {editForm.title}.pdf
            </a>
          </div>
        )}

        <input
          type="file"
          name="pdf_doc"
          onChange={handleEditChange}
          className="form-control mb-2"
          accept="application/pdf"
        />

        <input
          type="text"
          name="year"
          value={editForm.year}
          onChange={handleEditChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="volume"
          value={editForm.volume}
          onChange={handleEditChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="issueNo"
          value={editForm.issueNo}
          onChange={handleEditChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="type"
          value={editForm.type}
          onChange={handleEditChange}
          className="form-control mb-2"
          required
        />

        <button type="submit" className="btn btn-success">
          Save Changes
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => setEditId(null)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditPdfForm;