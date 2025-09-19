

// import React, { useEffect, useState } from "react";

// import { Accordion } from "react-bootstrap";
// import Api from "./Api";
// import { GrDocumentPdf } from "react-icons/gr";

// const CurrentIssues = () => {
//   const [data, setData] = useState([]);

//   const fetchPdfs = async () => {
//     try {
//       const response = await Api.get();

//       const filtered = response.data.filter((pdf) => pdf.type === "Current_Issue");

//       const grouped = filtered.reduce((acc, pdf) => {
//         const year = pdf.year;
//         if (!acc[year]) acc[year] = {};
//         if (!acc[year][pdf.volume]) acc[year][pdf.volume] = [];
//         acc[year][pdf.volume].push(pdf);
//         return acc;
//       }, {});

//       const dataValues = Object.entries(grouped).map(([year, volumes]) => ({
//         year,
//         volumes: Object.entries(volumes).map(([volume, pdfs]) => ({ volume, pdfs })),
//       }));

//       setData(dataValues);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchPdfs();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <center>
//         <h2 className="mb-4 sub_title">Current Issues</h2>
//       </center>

//       {data.length === 0 ? (
//         <p className="text-muted">No Current Issues available.</p>
//       ) : (
//         <Accordion defaultActiveKey={data[0]?.year}>
//           {data
//             .sort((a, b) => b.year - a.year)
//             .map((yearObj) => (
//               <Accordion.Item eventKey={yearObj.year} key={yearObj.year}>
//                 <Accordion.Header>Year: {yearObj.year}</Accordion.Header>
//                 <Accordion.Body>
//                   {yearObj.volumes.map((vol) => (
//                     <div key={vol.volume} className="mb-3">
//                       <h5>Articles of Volume {vol.volume} Issue {
//                         ///////
                       
//                          {vol.pdfs.map((pdf) => (
                         
//                             key={pdf.issueNo}

//                          ))}

//                         //////
//                         } {yearObj.year}</h5>
//                       <ol type="1" className="list-group">
//                         {vol.pdfs.map((pdf) => (
//                           <li id="li"
//                             key={pdf.id}
//                             // className="list-group-item d-flex justify-content-between align-items-center"
//                           >
//                             <div>
//                               {/* <strong>{pdf.title}</strong> (Issue {pdf.issueNo}) */}
//                             </div>
                          
//                              <a id="anchor"
//                               href={`http://localhost:8080/api/ijmsabc/pdfs/${pdf.id}/file`}
//                               // target="_blank"
//                               // rel="noopener noreferrer"
//                               // className="btn btn-sm btn-primary"
//                             >
//                               {/* View PDF */}
//                              <div> <strong>{pdf.title}</strong> (Issue {pdf.issueNo})</div>
//                               <div><GrDocumentPdf  id="icon"/></div>
//                             </a>
                          
//                           </li>
//                         ))}
//                       </ol>
//                     </div>
//                   ))}
//                 </Accordion.Body>
//               </Accordion.Item>
//             ))}
//         </Accordion>
//       )}
//     </div>
//   );
// };

// export default CurrentIssues;

import React, { useEffect, useState } from "react";

import { Accordion } from "react-bootstrap";
import Api from "./Api";
import { GrDocumentPdf } from "react-icons/gr";

const CurrentIssues = () => {
  const [data, setData] = useState([]);

  const fetchPdfs = async () => {
    try {
      const response = await Api.get();

      const filtered = response.data.filter(
        (pdf) => pdf.type === "Current_Issue"
      );

      const grouped = filtered.reduce((acc, pdf) => {
        const year = pdf.year;
        if (!acc[year]) acc[year] = {};
        if (!acc[year][pdf.volume]) acc[year][pdf.volume] = [];
        acc[year][pdf.volume].push(pdf);
        return acc;
      }, {});

      const dataValues = Object.entries(grouped).map(([year, volumes]) => ({
        year,
        volumes: Object.entries(volumes).map(([volume, pdfs]) => ({
          volume,
          pdfs,
        })),
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
        <h2 className="mb-4 sub_title">Current Issues</h2>
      </center>

      {data.length === 0 ? (
        <p className="text-muted">No Current Issues available.</p>
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
                      <h5>
                        Articles of Volume {vol.volume} – Issues:{" "}
                        {vol.pdfs.map((pdf, idx) => (
                          <span key={pdf.id}>
                            {pdf.issueNo}
                            {idx < vol.pdfs.length - 1 ? ", " : ""}
                          </span>
                        ))}{" "}
                        ({yearObj.year})
                      </h5>
                      <ol type="1" className="list-group">
                        {vol.pdfs.map((pdf) => (
                          <li id="li" key={pdf.id}>
                            <a
                              id="anchor"
                              href={`http://localhost:8080/api/ijmsabc/pdfs/${pdf.id}/file`}
                            >
                              <div>
                                <strong>{pdf.title}</strong> (Issue {pdf.issueNo})
                              </div>
                              <div>
                                <GrDocumentPdf id="icon" />
                              </div>
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

export default CurrentIssues;
