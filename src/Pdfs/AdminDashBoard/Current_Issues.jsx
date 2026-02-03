import React, { useEffect, useState } from "react";

import { Accordion } from "react-bootstrap";
import { GrDocumentPdf } from "react-icons/gr";
import PdfApi from "./PdfApi";

const CurrentIssues = () => {
  const [data, setData] = useState([]);

  // ✅ Fetch PDFs from Backend
  const fetchPdfs = async () => {
    try {
      // ✅ Backend URL: GET /api/ijmsabc/pdfs
      const response = await PdfApi.get("");

      // ✅ Filter: Only Current Issues + IJMSABC Source
      const filtered = response.data.filter(
        (pdf) =>
          pdf.issueType === "Current_Issue" &&
          pdf.source?.toLowerCase() === "ijmsabc"
      );

      // ✅ Group by Year → Volume → IssueNo
      const grouped = filtered.reduce((acc, pdf) => {
        const year = pdf.pubYear;
        const { volume, issueNo } = pdf;

        if (!acc[year]) acc[year] = {};
        if (!acc[year][volume]) acc[year][volume] = {};
        if (!acc[year][volume][issueNo]) acc[year][volume][issueNo] = [];

        acc[year][volume][issueNo].push(pdf);
        return acc;
      }, {});

      // ✅ Convert grouped object into structured array
      const formattedData = Object.entries(grouped).map(([year, volumes]) => ({
        year,
        volumes: Object.entries(volumes).map(([volume, issues]) => ({
          volume,
          issues: Object.entries(issues).map(([issueNo, pdfs]) => ({
            issueNo,
            pdfs,
          })),
        })),
      }));

      setData(formattedData);
    } catch (err) {
      console.error("❌ Error fetching current issues:", err);
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

      {/* ✅ No Data */}
      {data.length === 0 ? (
        <p className="text-muted text-center">
          No Current Issues available for IJMSABC.
        </p>
      ) : (
        <Accordion defaultActiveKey={data[0]?.year}>
          {data
            .sort((a, b) => b.year - a.year)
            .map((yearObj) => (
              <Accordion.Item eventKey={yearObj.year} key={yearObj.year}>
                {/* ✅ Year */}
                <Accordion.Header>
                  Year: {yearObj.year}
                </Accordion.Header>

                <Accordion.Body>
                  <Accordion>
                    {yearObj.volumes.map((vol) => (
                      <Accordion.Item
                        eventKey={`${yearObj.year}-${vol.volume}`}
                        key={vol.volume}
                      >
                        {/* ✅ Volume */}
                        <Accordion.Header>
                          Volume {vol.volume} ({yearObj.year})
                        </Accordion.Header>

                        <Accordion.Body>
                          <Accordion>
                            {vol.issues.map((issue) => (
                              <Accordion.Item
                                eventKey={`${yearObj.year}-${vol.volume}-${issue.issueNo}`}
                                key={issue.issueNo}
                              >
                                {/* ✅ Issue */}
                                <Accordion.Header>
                                  Issue {issue.issueNo}
                                </Accordion.Header>

                                <Accordion.Body>
                                  <ol className="list-group">
                                    {issue.pdfs.map((pdf) => (
                                      <li id="li" key={pdf.id}>
                                        {/* ✅ FIXED: Open PDF INLINE in SAME TAB */}
                                        <a
                                          id="anchor"
                                          href={`https://api.ijmsabc.org/api/ijmsabc/pdfs/view/${pdf.id}`}
                                          target="_self"
                                          rel="noreferrer"
                                        >
                                          <div>
                                            <strong>{pdf.title}</strong>
                                            <br />
                                            By {pdf.author}
                                          </div>

                                          <div>
                                            <GrDocumentPdf id="icon" />
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ol>
                                </Accordion.Body>
                              </Accordion.Item>
                            ))}
                          </Accordion>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>
      )}
    </div>
  );
};

export default CurrentIssues;
