// import React, { useEffect, useState } from "react";

// import Api from "./Api";

// const PdfList = () => {
//   const [pdfs, setPdfs] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editForm, setEditForm] = useState({
//     title: "",
//     pdf_doc: null,
//     volume: "",
//     issue: "",
//     year: "",
//     type: "",
//   });

//   const fetchPdfs = async () => {
//     try {
//       const response = await Api.get();
//       setPdfs(response.data);
//     } catch (error) {
//       console.error("Error fetching PDFs:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this PDF?")) return;
//     try {
//       await Api.delete(`/${id}`);
//       setPdfs(pdfs.filter((pdf) => pdf.id !== id));
//     } catch (error) {
//       console.error("Error deleting PDF:", error);
//     }
//   };

//   const handleEditChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "pdf_doc") {
//       setEditForm({ ...editForm, [name]: files[0] });
//     } else {
//       setEditForm({ ...editForm, [name]: value });
//     }
//   };

// //   const handleUpdate = async (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     Object.keys(editForm).forEach((key) => {
// //       formData.append(key, editForm[key]);
// //     });

// //     try {
// //       const response = await Api.put(`/${editId}`, formData, {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       });
// //       setPdfs(pdfs.map((p) => (p.id === editId ? response.data : p)));
// //       setEditId(null);
// //       alert("PDF updated successfully ✅");
// //     } catch (error) {
// //       console.error("Error updating PDF:", error);
// //       alert("Update failed ❌");
// //     }
// //   };


// const handleUpdate = async (e) => {
//   e.preventDefault();

//   const formData = new FormData();
//   formData.append("title", editForm.title);
//   formData.append("volume", editForm.volume);
//   formData.append("issue", editForm.issue);
//   formData.append("year", editForm.year);
//   formData.append("type", editForm.type);

//   // 👇 Append pdf_doc ONLY if a new file is selected
//   if (editForm.pdf_doc instanceof File) {
//     formData.append("pdf_doc", editForm.pdf_doc);
//   }

//   try {
//     const response = await Api.put(`/${editId}`, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     setPdfs(pdfs.map((p) => (p.id === editId ? response.data : p)));
//     setEditId(null);
//     alert("PDF updated successfully ✅");
//   } catch (error) {
//     console.error("Error updating PDF:", error);
//     alert("Update failed ❌");
//   }
// };



//   useEffect(() => {
//     fetchPdfs();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">All PDFs</h2>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Volume</th>
//             <th>Issue</th>
//             <th>Year</th>
//             <th>Type</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pdfs.map((pdf) => (
//             <tr key={pdf.id}>
//               <td>{pdf.id}</td>
//               <td>{pdf.title}</td>
//               <td>{pdf.volume}</td>
//               <td>{pdf.issue}</td>
//               <td>{pdf.year}</td>
//               <td>{pdf.type}</td>
//               <td>
//                 <button
//                   className="btn btn-warning btn-sm me-2"
//                   onClick={() => {
//                     setEditId(pdf.id);
//                     setEditForm(pdf);
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => handleDelete(pdf.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {editId && (
//         <div className="card mt-4 p-3">
//           <h4>Edit PDF</h4>
//           <form onSubmit={handleUpdate}>
//             <input
//               type="text"
//               name="title"
//               value={editForm.title}
//               onChange={handleEditChange}
//               placeholder="Title"
//               className="form-control mb-2"
//               required
//             />
//             <input
//               type="file"
//               name="pdf_doc"
//               onChange={handleEditChange}
//               className="form-control mb-2"
//             />
//             <input
//               type="text"
//               name="year"
//               value={editForm.year}
//               onChange={handleEditChange}
//               className="form-control mb-2"
//               required
//             />
//             <input
//               type="text"
//               name="volume"
//               value={editForm.volume}
//               onChange={handleEditChange}
//               className="form-control mb-2"
//               required
//             />
//             <input
//               type="text"
//               name="issue"
//               value={editForm.issue}
//               onChange={handleEditChange}
//               className="form-control mb-2"
//               required
//             />
//             <input
//               type="text"
//               name="type"
//               value={editForm.type}
//               onChange={handleEditChange}
//               className="form-control mb-2"
//               required
//             />
//             <button type="submit" className="btn btn-success">
//               Save Changes
//             </button>
//             <button
//               type="button"
//               className="btn btn-secondary ms-2"
//               onClick={() => setEditId(null)}
//             >
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PdfList;

// import React, { useEffect, useState } from "react";

// import Api from "./Api";

// const PdfList = () => {
//   const [pdfs, setPdfs] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editForm, setEditForm] = useState({
//     title: "",
//     pdf_doc: null,
//     volume: "",
//     issue: "",
//     year: "",
//     type: "",
//   });

//   // ✅ Fetch all PDFs
//   const fetchPdfs = async () => {
//     try {
//       const response = await Api.get();
//       setPdfs(response.data);
//     } catch (error) {
//       console.error("Error fetching PDFs:", error);
//     }
//   };

//   // ✅ Delete
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this PDF?")) return;
//     try {
//       await Api.delete(`/${id}`);
//       setPdfs(pdfs.filter((pdf) => pdf.id !== id));
//     } catch (error) {
//       console.error("Error deleting PDF:", error);
//     }
//   };

//   // ✅ Input change (handles both text and file)
//   const handleEditChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "pdf_doc") {
//       setEditForm({ ...editForm, pdf_doc: files[0] });
//     } else {
//       setEditForm({ ...editForm, [name]: value });
//     }
//   };

//   // ✅ Update PDF
//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", editForm.title);
//     formData.append("volume", editForm.volume);
//     formData.append("issue", editForm.issue);
//     formData.append("year", editForm.year);
//     formData.append("type", editForm.type);

//     // Only append pdf_doc if a new file was chosen
//     if (editForm.pdf_doc instanceof File) {
//       formData.append("pdf_doc", editForm.pdf_doc);
//     }

//     try {
//       const response = await Api.put(`/${editId}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       // Replace updated record
//       setPdfs(pdfs.map((p) => (p.id === editId ? response.data : p)));
//       setEditId(null);
//       alert("PDF updated successfully ✅");
//     } catch (error) {
//       console.error("Error updating PDF:", error);
//       alert("Update failed ❌");
//     }
//   };

//   useEffect(() => {
//     fetchPdfs();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">All PDFs</h2>
//       <table className="table table-bordered table-hover">
//         <thead className="table-light">
//           <tr>
//             {/* <th>ID</th> */}
//             <th>Title</th>
//             <th>Volume</th>
//             <th>Issue</th>
//             <th>Year</th>
//             <th>Type</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pdfs.map((pdf) => (
//             <tr key={pdf.id}>
//               {/* <td>{pdf.id}</td> */}
//               <td> <a href={`http://localhost:8080/api/ijmsabc/pdfs/${pdf.id}/file`} target="_blank" rel="noopener noreferrer"> {pdf.title} </a> </td>
//               <td>{pdf.volume}</td>
//               <td>{pdf.issue}</td>
//               <td>{pdf.year}</td>
//               <td>{pdf.type}</td>
//               <td>
//                 <button
//                   className="btn btn-warning btn-sm me-2"
//                   onClick={() => {
//                     setEditId(pdf.id);
//                     setEditForm({
//                       title: pdf.title,
//                       pdf_doc: null, // reset file
//                       volume: pdf.volume,
//                       issue: pdf.issue,
//                       year: pdf.year,
//                       type: pdf.type,
//                     });
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => handleDelete(pdf.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {editId && (
//         <div className="card mt-4 p-3 shadow-sm">
//           <h4>Edit PDF</h4>
//           <form onSubmit={handleUpdate}>
//             <input
//               type="text"
//               name="title"
//               value={editForm.title}
//               onChange={handleEditChange}
//               placeholder="Title"
//               className="form-control mb-2"
//               required
//             />
//             <input
//               type="file"
//               name="pdf_doc"
//               onChange={handleEditChange}
//               className="form-control mb-2"
//               accept="application/pdf"
//             />
//             <input
//               type="text"
//               name="year"
//               value={editForm.year}
//               onChange={handleEditChange}
//               className="form-control mb-2"
//               required
//             />
//             <input
//               type="text"
//               name="volume"
//               value={editForm.volume}
//               onChange={handleEditChange}
//               className="form-control mb-2"
//               required
//             />
//             <input
//               type="text"
//               name="issue"
//               value={editForm.issue}
//               onChange={handleEditChange}
//               className="form-control mb-2"
//               required
//             />
//             <input
//               type="text"
//               name="type"
//               value={editForm.type}
//               onChange={handleEditChange}
//               className="form-control mb-2"
//               required
//             />
//             <button type="submit" className="btn btn-success">
//               Save Changes
//             </button>
//             <button
//               type="button"
//               className="btn btn-secondary ms-2"
//               onClick={() => setEditId(null)}
//             >
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PdfList;

import React, { useEffect, useState } from "react";

import Api from "./Api";
import EditPdfForm from "./EditPdfForm";

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
      issue: pdf.issue,
      year: pdf.year,
      type: pdf.type,
    });
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 sub_title">All PDFs</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Id</th>
            <th>Title</th>
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
                  href={`http://localhost:8080/api/ijmsabc/pdfs/${pdf.id}/file`}
                  rel="noopener noreferrer"
                >
                  {pdf.title}
                </a>
              </td>
              <td>{pdf.volume}</td>
              <td>{pdf.issueNo}</td>
              <td>{pdf.year}</td>
              <td>{pdf.type}</td>
              <td>
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
        />
      )}
    </div>
  );
};

export default PdfList;