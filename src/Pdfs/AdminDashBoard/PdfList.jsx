// import "./PdfList.css";

// import React, { useEffect, useState } from "react";

// import EditPdfForm from "../EditPdfForm";
// import PdfApi from "./PdfApi";

// const PdfList = () => {
//   const [pdfs, setPdfs] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [editForm, setEditForm] = useState(null);

//   // ✅ Fetch PDFs
//   const fetchPdfs = async () => {
//     try {
//       const response = await PdfApi.get("");
//       console.log("PDF Response:", response.data);
//       setPdfs(response.data);
//     } catch (error) {
//       console.error("❌ Fetch Error:", error);
//     }
//   };

//   // ✅ Delete PDF
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this PDF?")) return;
//     try {
//       await PdfApi.delete(`/${id}`);
//       setPdfs(pdfs.filter((pdf) => pdf.id !== id));
//       alert("✅ PDF Deleted Successfully!");
//     } catch (error) {
//       console.error("❌ Delete Error:", error);
//       alert("Delete Failed!");
//     }
//   };

//   // ✅ Edit PDF click
//   const handleEditClick = (pdf) => {
//     setEditId(pdf.id);
//     setEditForm({
//       title: pdf.title,
//       volume: pdf.volume,
//       issueNo: pdf.issueNo,
//       pubYear: pdf.pubYear,
//       issueType: pdf.issueType,
//       author: pdf.author,
//       doi: pdf.doi || "",
//       source: pdf.source || "ijmsabc",
//     });
//   };

//   useEffect(() => {
//     fetchPdfs();
//   }, []);

//   return (
//     <div className="pdf-list-container">
//       <h2 className="text-center mb-4">📚 PDF List</h2>

//       <table className="table table-bordered table-striped">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Volume</th>
//             <th>Issue</th>
//             <th>Year</th>
//             <th>Type</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {pdfs.length === 0 ? (
//             <tr>
//               <td colSpan="8" className="text-center text-danger">
//                 ❌ No PDFs Found
//               </td>
//             </tr>
//           ) : (
//             pdfs.map((pdf) => (
//               <tr key={pdf.id}>
//                 <td>{pdf.id}</td>

//                 {/* ✅ Open PDF in same tab */}
//                 <td>
//                   <a
//                     href={`https://api.ijmsabc.org/api/ijmsabc/pdfs/view/${pdf.id}`}
//                     target="_self"
//                     rel="noreferrer"
//                   >
//                     {pdf.title}
//                   </a>
//                 </td>

//                 <td>{pdf.author}</td>
//                 <td>{pdf.volume}</td>
//                 <td>{pdf.issueNo}</td>
//                 <td>{pdf.pubYear}</td>
//                 <td>{pdf.issueType}</td>

//                 <td>
//                   <button
//                     className="btn btn-sm btn-primary me-2"
//                     onClick={() => handleEditClick(pdf)}
//                   >
//                     ✏ Edit
//                   </button>
//                   <button
//                     className="btn btn-sm btn-danger"
//                     onClick={() => handleDelete(pdf.id)}
//                   >
//                     🗑 Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       {/* ✅ Edit Form Modal */}
//       {editId && editForm && (
//         <EditPdfForm
//           editId={editId}
//           editForm={editForm}
//           setEditForm={setEditForm}
//           setEditId={setEditId}
//           pdfs={pdfs}
//           setPdfs={setPdfs}
//           fetchPdfs={fetchPdfs} // optional to refresh
//         />
//       )}
//     </div>
//   );
// };

// export default PdfList;

import "./PdfList.css";

import React, { useState } from "react";

import EditPdfForm from "../EditPdfForm";
import PdfApi from "./PdfApi";
import { usePdfAll } from "./PdfContextAll";

const PdfList = () => {
  const { rawData: pdfs, loading, fetchPdfs, setRawData } = usePdfAll();
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState(null);

  // ✅ Delete PDF (sync with context)
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this PDF?")) return;
    try {
      await PdfApi.delete(`/${id}`);
      setRawData((prev) => prev.filter((pdf) => pdf.id !== id));
      alert("✅ PDF Deleted Successfully!");
    } catch (error) {
      console.error("❌ Delete Error:", error);
      alert("Delete Failed!");
    }
  };

  // ✅ Edit PDF click
  const handleEditClick = (pdf) => {
    setEditId(pdf.id);
    setEditForm({
      title: pdf.title,
      volume: pdf.volume,
      issueNo: pdf.issueNo,
      pubYear: pdf.pubYear,
      issueType: pdf.issueType,
      author: pdf.author,
      doi: pdf.doi || "",
      source: pdf.source || "ijmsabc",
    });
  };

  if (loading) {
    return <p className="text-center mt-5">Loading PDFs...</p>;
  }

  return (
    <div className="pdf-list-container">
      <h2 className="text-center mb-4">📚 PDF List</h2>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
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
          {pdfs.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center text-danger">
                ❌ No PDFs Found
              </td>
            </tr>
          ) : (
            pdfs.map((pdf) => (
              <tr key={pdf.id}>
                <td>{pdf.id}</td>

                <td>
                  <a
                    href={`https://api.ijmsabc.org/api/ijmsabc/pdfs/view/${pdf.id}`}
                    target="_self"
                    rel="noreferrer"
                  >
                    {pdf.title}
                  </a>
                </td>

                <td>{pdf.author}</td>
                <td>{pdf.volume}</td>
                <td>{pdf.issueNo}</td>
                <td>{pdf.pubYear}</td>
                <td>{pdf.issueType}</td>

                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEditClick(pdf)}
                  >
                    ✏ Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(pdf.id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* ✅ Edit Modal */}
      {editId && editForm && (
        <EditPdfForm
          editId={editId}
          editForm={editForm}
          setEditForm={setEditForm}
          setEditId={setEditId}
          pdfs={pdfs}
          setPdfs={setRawData}   // 🔥 context update
          fetchPdfs={fetchPdfs}  // optional refresh
        />
      )}
    </div>
  );
};

export default PdfList;
