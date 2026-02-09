// import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

// import PdfApi from "./PdfApi";

// const PdfContextPrevious = createContext();

// export const usePdfPrevious = () => useContext(PdfContextPrevious);

// export const PdfProviderPrevious = ({ children }) => {
//   const [rawData, setRawData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchPdfs = async () => {
//     try {
//       const response = await PdfApi.get("");
//       setRawData(response.data); // store once
//     } catch (err) {
//       console.error("❌ PDF fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPdfs();
//   }, []);

//   // ⚡ Memoized grouping (FAST)
//   const groupedData = useMemo(() => {
//     if (!rawData.length) return [];

//     const grouped = rawData.reduce((acc, pdf) => {
//       const year = pdf.pubYear;
//       const { volume, issueNo } = pdf;

//       if (!acc[year]) acc[year] = {};
//       if (!acc[year][volume]) acc[year][volume] = {};
//       if (!acc[year][volume][issueNo]) acc[year][volume][issueNo] = [];

//       acc[year][volume][issueNo].push(pdf);
//       return acc;
//     }, {});

//     return Object.entries(grouped).map(([year, volumes]) => ({
//       year,
//       volumes: Object.entries(volumes).map(([volume, issues]) => ({
//         volume,
//         issues: Object.entries(issues).map(([issueNo, pdfs]) => ({
//           issueNo,
//           pdfs,
//         })),
//       })),
//     }));
//   }, [rawData]);

//   return (
//     <PdfContextPrevious.Provider
//       value={{
//         rawData,
//         groupedData,
//         loading,
//       }}
//     >
//       {children}
//     </PdfContextPrevious.Provider>
//   );
// };

import React, { createContext, useContext, useEffect, useState } from "react";

import PdfApi from "./PdfApi";

const PdfContextPrevious = createContext();

export const usePdfPrevious = () => useContext(PdfContextPrevious);

export const PdfProviderPrevious = ({ children }) => {
  const [rawData, setRawData] = useState([]);
  const [groupedData, setGroupedData] = useState([]);   // ✅ important
  const [loading, setLoading] = useState(true);

  const fetchPdfs = async () => {
    try {
      const response = await PdfApi.get("");

      // ✅ Filter only Previous Issues of IJMSABC
      const filtered = response.data.filter(
        (pdf) =>
          // pdf.issueType === "Previous_Issue" &&
          pdf.source?.toLowerCase() === "ijmsabc"
      );

      // ✅ Group: Year → Volume → Issue
      const grouped = filtered.reduce((acc, pdf) => {
        const year = pdf.pubYear;
        const { volume, issueNo } = pdf;

        if (!acc[year]) acc[year] = {};
        if (!acc[year][volume]) acc[year][volume] = {};
        if (!acc[year][volume][issueNo]) acc[year][volume][issueNo] = [];

        acc[year][volume][issueNo].push(pdf);
        return acc;
      }, {});

      // ✅ Format structure
      const formatted = Object.entries(grouped).map(([year, volumes]) => ({
        year,
        volumes: Object.entries(volumes).map(([volume, issues]) => ({
          volume,
          issues: Object.entries(issues).map(([issueNo, pdfs]) => ({
            issueNo,
            pdfs,
          })),
        })),
      }));

      setRawData(filtered);
      setGroupedData(formatted);
    } catch (err) {
      console.error("❌ PDF fetch error (Previous Issues):", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <PdfContextPrevious.Provider
      value={{
        rawData,       // flat list
        groupedData,   // structured
        loading,
      }}
    >
      {children}
    </PdfContextPrevious.Provider>
  );
};
