// import React, { useEffect, useState } from "react";

// import Api from "./Api";

// const Previous_Issues = () => {
//   const [pdfs, setPdfs] = useState([]);

//   // ✅ Fetch and filter PDFs
//   const fetchPdfs = async () => {
//     try {
//       const response = await Api.get();
//       // 👇 filter only Previous_Issue
//       const filtered = response.data.filter((pdf) => pdf.type === "Previous_Issue");
//       setPdfs(filtered);
//     } catch (error) {
//       console.error("Error fetching PDFs:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPdfs();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <center><h2 className="mb-4 sub_title">Previous Issues</h2></center>
//       {pdfs.length === 0 ? (
//         <p className="text-muted">No Previous Issues available.</p>
//       ) : (
//         <table className="table table-bordered table-hover">
//           <thead className="table-light">
//             <tr>
//               {/* <th>ID</th> */}
//               {/* <th>Title</th>
//               <th>Volume</th>
//               <th>Issue</th>
//               <th>Year</th> */}
//               {/* <th>Type</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {pdfs.map((pdf) => (
//               <tr key={pdf.id}>
//                 {/* <td>{pdf.id}</td> */}
//                 <td>
//                   <a
//                     href={`http://localhost:8080/api/ijmsabc/pdfs/${pdf.id}/file`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {pdf.title}
//                   </a>
//                 </td>
//                 <td>{pdf.volume}</td>
//                 <td>{pdf.issue}</td>
//                 <td>{pdf.year}</td>
//                 {/* <td>{pdf.type}</td> */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Previous_Issues;





//////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";

import { Accordion } from "react-bootstrap";
import Api from "./Api";
import { GrDocumentPdf } from "react-icons/gr";

const Previous_Issues = () => {
  const [data, setData] = useState([]);

  const fetchPdfs = async () => {
    try {
      const response = await Api.get();

      // const response = await Api.get();
      // setPdfs(response.data);

      // const filtered = response.data.filter((pdf) => pdf.type === "Previous_Issue");

      const filtered=response.data;

      const grouped = filtered.reduce((acc, pdf) => {
        const year = pdf.year;
        if (!acc[year]) acc[year] = {};
        if (!acc[year][pdf.volume]) acc[year][pdf.volume] = [];
        acc[year][pdf.volume].push(pdf);
        return acc;
      }, {});

      const dataValues = Object.entries(grouped).map(([year, volumes]) => ({
        year,
        volumes: Object.entries(volumes).map(([volume, pdfs]) => ({ volume, pdfs })),
      }));

      setData(dataValues);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <div className="container mt-5">
      <center>
        <h2 className="mb-4 sub_title">Previous Issues</h2>
      </center>

      {data.length === 0 ? (
        <p className="text-muted">No Previous Issues available.</p>
      ) : (
        <Accordion defaultActiveKey={data[0]?.year}>
          {data
            .sort((a, b) => b.year - a.year)
            .map((yearObj) => (
              <Accordion.Item eventKey={yearObj.year} key={yearObj.year}>
                <Accordion.Header>Year: {yearObj.year}</Accordion.Header>
                <Accordion.Body>
                  {yearObj.volumes.map((vol) => (
                    <div key={vol.volume} className="mb-3">
                      <h5>Volume {vol.volume}</h5>
                      <ol type="A" className="list-group">
                        {vol.pdfs.map((pdf) => (
                          <li
                            key={pdf.id}
                            // className="list-group-item d-flex justify-content-between align-items-center"
                          >
                            <div>
                              {/* <strong>{pdf.title}</strong> (Issue {pdf.issueNo}) */}
                            </div>
                          
                             <a id="anchor"
                              href={`http://localhost:8080/api/ijmsabc/pdfs/${pdf.id}/file`}
                              // target="_blank"
                              // rel="noopener noreferrer"
                              // className="btn btn-sm btn-primary"
                            >
                              {/* View PDF */}
                             <div> <strong>{pdf.title}</strong> (Issue {pdf.issueNo})</div>
                              <div><GrDocumentPdf  id="icon"/></div>
                            </a>
                          
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>
      )}
    </div>
  );
};
export default Previous_Issues;