// import React, { useEffect, useState } from "react";

// import PdfApi from "./PdfApi";
// import { useNavigate } from "react-router-dom";

// const CurrentIssues = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   const fetchPdfs = async () => {
//     const response = await PdfApi.get("");

//     const filtered = response.data.filter(
//       (pdf) =>
//         pdf.issueType === "Current_Issue" &&
//         pdf.source?.toLowerCase() === "ijmsabc"
//     );

//     // Group Year → Volume → Issue
//     const grouped = filtered.reduce((acc, pdf) => {
//       const year = pdf.pubYear;
//       const { volume, issueNo } = pdf;

//       if (!acc[year]) acc[year] = {};
//       if (!acc[year][volume]) acc[year][volume] = {};
//       if (!acc[year][volume][issueNo]) acc[year][volume][issueNo] = [];

//       acc[year][volume][issueNo].push(pdf);
//       return acc;
//     }, {});

//     const formatted = Object.entries(grouped).map(([year, volumes]) => ({
//       year,
//       volumes: Object.entries(volumes).map(([volume, issues]) => ({
//         volume,
//         issues: Object.entries(issues).map(([issueNo, pdfs]) => ({
//           issueNo,
//           pdfs,
//         })),
//       })),
//     }));

//     setData(formatted);
//   };

//   useEffect(() => {
//     fetchPdfs();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Archive Issues</h2>

//       {data
//         .sort((a, b) => b.year - a.year)
//         .map((yearObj) => (
//           <div key={yearObj.year} className="mb-4">
//             <h4>Year {yearObj.year}</h4>

//             {yearObj.volumes.map((vol) =>
//               vol.issues.map((issue) => (
//                 <div
//                   key={`${vol.volume}-${issue.issueNo}`}
//                   className="issue-link"
//                   onClick={() =>
//                     navigate(`/issue/${yearObj.year}/${vol.volume}/${issue.issueNo}`)
//                   }
//                 >
//                   Volume {vol.volume}, Issue {issue.issueNo}
//                 </div>
//               ))
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default CurrentIssues;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { usePdf } from "./PdfContext";

// const CurrentIssues = () => {
//   const { groupedData, loading } = usePdf();
//   const navigate = useNavigate();

//   if (loading) {
//     return <p className="text-center mt-5">Loading Archive Issues...</p>;
//   }

//   const value="";

//   if (issue.issueNo===1){
//     value= "January-march"
//   }else if(issue.issueNo===2){
//     value= "April-june"
//   }else if(issue.issueNo===3){
//     value= "July-september"
//   }else if(issue.issueNo===4){
//     value= "October-december"
//   }

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Current Issues</h2>

//       {groupedData
//         .sort((a, b) => b.year - a.year)
//         .map((yearObj) => (
//           <div key={yearObj.year} className="mb-4">
//             <h4>Year {yearObj.year}</h4>

//             {yearObj.volumes.map((vol) =>
//               vol.issues.map((issue) => (
//                 <div
//                   key={`${vol.volume}-${issue.issueNo}`}
//                   className="issue-link"
//                   onClick={() =>
//                     navigate(`/issue/${yearObj.year}/${vol.volume}/${issue.issueNo}`)
//                   }
//                 >
//                   Volume {vol.volume}, Issue {issue.issueNo} {value}
//                 </div>
//               ))
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default CurrentIssues;

import "./Issues.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import { usePdf } from "./PdfContextCurrent";

// 👈 import css

const CurrentIssues = () => {
  const { groupedData, loading } = usePdf();
  const navigate = useNavigate();

  if (loading) {
    return <p className="text-center mt-5">Loading Current Issues...</p>;
  }

  const getIssuePeriod = (issueNo) => {
    switch (Number(issueNo)) {
      case 1:
        return "(January - March)";
      case 2:
        return "(April - June)";
      case 3:
        return "(July - September)";
      case 4:
        return "(October - December)";
      default:
        return "";
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Current Issues</h2>

      {groupedData
        .sort((a, b) => b.year - a.year)
        .map((yearObj) => (
          <div key={yearObj.year} className="mb-4 year-block">
            <div className="year-title">Year {yearObj.year}</div>

            {yearObj.volumes.map((vol) =>
              vol.issues.map((issue) => (
                <div
                  key={`${vol.volume}-${issue.issueNo}`}
                  className="issue-link"
                  onClick={() =>
                    navigate(
                      `/issue/${yearObj.year}/${vol.volume}/${issue.issueNo}`
                    )
                  }
                >
                  <div>
                    <span className="issue-text">
                      Volume {vol.volume}, Issue {issue.issueNo}
                    </span>{" "}
                    <span className="issue-period">
                      {getIssuePeriod(issue.issueNo)}
                    </span>
                  </div>

                  <div className="issue-arrow">→</div>
                </div>
              ))
            )}
          </div>
        ))}
    </div>
  );
};

export default CurrentIssues;
