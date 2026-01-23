import React, { useEffect, useState } from "react";

import { Accordion } from "react-bootstrap";
import Api from "./Api";
import { GrDocumentPdf } from "react-icons/gr";

const CurrentIssues = () => {
  const [data, setData] = useState([]);

  const fetchPdfs = async () => {
    try {
      const response = await Api.get("/pdfs");

      // ✅ FILTER: Current Issue + IJMSABC source
      const filtered = response.data.filter(
        (pdf) =>
          pdf.type === "Current_Issue" &&
          pdf.source === "ijmsabc"
      );

      // ✅ Group by Year → Volume → Issue
      const grouped = filtered.reduce((acc, pdf) => {
        const { year, volume, issueNo } = pdf;

        if (!acc[year]) acc[year] = {};
        if (!acc[year][volume]) acc[year][volume] = {};
        if (!acc[year][volume][issueNo]) acc[year][volume][issueNo] = [];

        acc[year][volume][issueNo].push(pdf);
        return acc;
      }, {});

      // ✅ Convert to render-friendly structure
      const dataValues = Object.entries(grouped).map(([year, volumes]) => ({
        year,
        volumes: Object.entries(volumes).map(([volume, issues]) => ({
          volume,
          issues: Object.entries(issues).map(([issueNo, pdfs]) => ({
            issueNo,
            pdfs,
          })),
        })),
      }));

      setData(dataValues);
    } catch (err) {
      console.error("Error fetching current issues:", err);
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
        <p className="text-muted text-center">
          No Current Issues available for IJMSABC.
        </p>
      ) : (
        <Accordion defaultActiveKey={data[0]?.year}>
          {data
            .sort((a, b) => b.year - a.year)
            .map((yearObj) => (
              <Accordion.Item
                eventKey={yearObj.year}
                key={yearObj.year}
              >
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
                                <Accordion.Header>
                                  Issue {issue.issueNo}
                                </Accordion.Header>

                                <Accordion.Body>
                                  <ol className="list-group">
                                    {issue.pdfs.map((pdf) => (
                                      <li id="li" key={pdf.id}>
                                        <a
                                          id="anchor"
                                          href={pdf.pdfLink}
                                          target="_blank"
                                          rel="noopener noreferrer"
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
