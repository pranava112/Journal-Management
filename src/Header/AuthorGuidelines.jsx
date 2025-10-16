// // import './AuthorGuidelines.css';

// import { Col, Container, Row } from 'react-bootstrap';
// import React, { useEffect } from 'react';

// const AuthorGuidelines = () => {
//   useEffect(() => {
//     document.title = "Author Guidelines";
//   }, []);

//   return (
//     <Container className="py-5">
//       <Row>
//         <Col>
//           <h1 className="text-center mb-5 sub_title">Author Guidelines</h1>

//           <p className="lead">
//             International Journal of Management Science and Business Conclave (IJMSABC) is an
//             open-access, peer-reviewed publication that focuses on research in all management
//             subject areas worldwide. The journal encourages original research, case studies,
//             and reviews on topics of current interest.
//           </p>

//           <p>
//             The Journal is published bi-monthly, adopting a continuous publication model. 
//             Submission is open to researchers worldwide in all management subject areas. 
//             All papers undergo screening by the Editorial Board followed by a blinded peer-review. 
//             Authors are encouraged to read our editorial policies to understand the review process. 
//             Papers are accepted subject to editorial changes.
//           </p>

//           {/* Authorship */}
//           <h4 className="mt-5">Authorship</h4>
//           <p>
//             All persons designated as authors should qualify for authorship. Authorship credit should be based only on significant contributions to:
//           </p>
//           <ul className="list-group mb-4">
//             <li className="list-group-item">Conception and design, or analysis and interpretation of data.</li>
//             <li className="list-group-item">Drafting the article or revising it critically for important intellectual content.</li>
//             <li className="list-group-item">Final approval of the version to be published.</li>
//           </ul>

//           {/* Submission */}
//           <h4 className="mt-4">Submission of Manuscript</h4>
//           <p>
//             All manuscripts are reviewed by an editor and members of the Editorial Board or
//             qualified outside reviewers. Decisions are made as rapidly as possible.
//           </p>

//           {/* Preparation */}
//           <h4 className="mt-4">Preparation of the Manuscript</h4>
//           <ol className="list-group mb-4">
//             {/* Title Page */}
//             <li className="list-group-item">
//               <strong>Title Page</strong>
//               <ul className="mt-2">
//                 <li>The title of the article, concise and informative.</li>
//                 <li>
//                   Names of all authors (limited to 6), with affiliations (department, institution,
//                   city, pin code, country). Superscripts should indicate affiliations.
//                 </li>
//                 <li>Name, address, phone, fax, and email of the corresponding author.</li>
//                 <li>Running title containing not more than 50 characters.</li>
//               </ul>
//             </li>

//             {/* Abstract */}
//             <li className="list-group-item">
//               <strong>Abstract and Key Words</strong>
//               <ul className="mt-2">
//                 <li>
//                   <b>Abstract:</b> Up to 250 words, structured into four components for research papers.
//                 </li>
//                 <li>
//                   <b>Key words:</b> Provide 3–6 key words in alphabetical order, separated by commas.
//                 </li>
//               </ul>
//             </li>

//             {/* Introduction */}
//             <li className="list-group-item">
//               <strong>Introduction</strong>
//               <ul className="mt-2">
//                 <li>
//                   Clearly state the purpose of the study, rationale, and research gaps. Provide
//                   only pertinent references.
//                 </li>
//               </ul>
//             </li>

//             {/* Methods */}
//             <li className="list-group-item">
//               <strong>Research Methods or Methodology</strong>
//               <ul className="mt-2">
//                 <li>Clearly define research methods or methodologies used. (Mandatory for research articles)</li>
//               </ul>
//             </li>

//             {/* Results */}
//             <li className="list-group-item">
//               <strong>Results</strong>
//               <ul className="mt-2">
//                 <li>
//                   Include number of observations, statistical significance, and findings. Avoid
//                   repeating data from tables/figures in the text. Summarize key results only.
//                 </li>
//               </ul>
//             </li>

//             {/* Discussion */}
//             <li className="list-group-item">
//               <strong>Discussion</strong>
//               <ul className="mt-2">
//                 <li>
//                   Highlight new findings, implications, and limitations. Link conclusions with
//                   study goals. Avoid unqualified statements or repetition of results.
//                 </li>
//               </ul>
//             </li>

//             {/* Conclusion */}
//             <li className="list-group-item">
//               <strong>Conclusion</strong>
//               <ul className="mt-2">
//                 <li>
//                   Provide a brief summary, novelty, implications, and contribution to scientific
//                   knowledge.
//                 </li>
//               </ul>
//             </li>

//             {/* Acknowledgements */}
//             <li className="list-group-item">
//               <strong>Acknowledgement (if any)</strong>
//             </li>

//             {/* References */}
//             <li className="list-group-item">
//               <strong>References</strong>
//               <ul className="mt-2">
//                 <li>
//                   Number references in the order of appearance. Cite appropriately. 
//                   For a full research paper, references should not exceed 25.
//                 </li>
//                 <li>
//                   <b>Examples:</b>
//                   <ol className="mt-2">
//                     <li>
//                       <b>Standard Journal Article:</b>
//                       <ul>
//                         <li>
//                           Halpern SD, Ubel PA, Caplan AL. Solid-organ transplantation in HIV-infected patients. 
//                           <i>N Engl J Med</i>. 2002; 347: 284–287.
//                         </li>
//                         <li>
//                           Pugia MJ, Sammer R, Corey P, Lott JA, Anderson L, Gleason S. The uristat in dipstick is useful in distinguishing infections. 
//                           <i>Clin Chim Acta</i>. 2004; 341: 73–81.
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       <b>More than six authors:</b>
//                       <ul>
//                         <li>
//                           Rose ME, Huerbin MB, Melick J, et al. Regulation of interstitial excitatory amino acid concentrations. 
//                           <i>Brain Res</i>. 2002; 935: 40–46.
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       <b>In Press:</b>
//                       <ul>
//                         <li>
//                           Tian D, Araki H, Stahl E, et al. Signature of balancing selection in Arabidopsis. 
//                           <i>Proc Natl Acad Sci USA</i>. In press 2002.
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       <b>Books & Monographs:</b>
//                       <ul>
//                         <li>
//                           Burrow GN. The Thyroid: nodules and neoplasia. In: Fleig P, Baxter JD, editors. 
//                           <i>Endocrinology and Metabolism</i>. 2nd ed. McGraw-Hill; 1989: 473–507.
//                         </li>
//                         <li>
//                           Pal GK, Pal P. Brainstem auditory evoked potential. In: <i>Textbook of Practical Physiology</i>. 
//                           2nd ed. Chennai: Orient Longman; 2005: 305–309.
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       <b>Conference Paper:</b>
//                       <ul>
//                         <li>
//                           Christensen S, Oppacher F. An analysis of Koza’s computational effort statistic. 
//                           In: <i>EuroGP 2002</i>; Apr 3–5; Kinsdale, Ireland.
//                         </li>
//                       </ul>
//                     </li>
//                     <li>
//                       <b>Dissertation:</b>
//                       <ul>
//                         <li>
//                           Borkowski MM. Infant sleep and feeding: a telephone survey of Hispanic Americans [dissertation]. 
//                           Mount Pleasant (MI): Central Michigan University; 2002.
//                         </li>
//                       </ul>
//                     </li>
//                   </ol>
//                 </li>
//               </ul>
//             </li>
//           </ol>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AuthorGuidelines;

import { Card, Col, Container, Row } from "react-bootstrap";

import { Helmet } from "react-helmet";
import React from "react";

const AuthorGuidelines = () => {
  return (

    <>
     <Helmet>
        <title>Author Guidelines for IJMSABC | International Journal Of
Management Science And Business Conclave</title>
        <meta
          name="description"
          content=" IJMSABC – International Journal Of
Management Science And Business Conclave provides a dedicated guidelines for authors."
        />
        <link rel="canonical" href="https://www.ijmsabc.org/AuthorGuidelines" />
      </Helmet>
    

    <Container className="my-5">
      {/* Title */}
      <Row className="mb-4">
        <Col>
          <h1 className="fw-bold text-primary text-center mb-3">
            Author Guidelines
          </h1>
          {/* <p className="fs-5 text-muted text-center">
            International Journal of Management Science and Business Conclave
            (IJMSABC)
          </p> */}
        </Col>
      </Row>

      {/* Introduction */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h4 fw-bold mb-3 text-success">Introduction</h2>
              <Card.Text className="fs-6">
                The journal welcomes original research articles, review papers,
                case studies, and conceptual papers in the field of management,
                business studies, and related disciplines. Authors are expected
                to present well-structured, original, and plagiarism-free
                content that contributes to both academic and practical
                knowledge.
              </Card.Text>
              <Card.Text className="fs-6">
                Manuscripts should clearly state the research objectives,
                methodology, results, and conclusions, with proper references
                following <b>APA style</b>.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Guidelines */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h4 fw-bold mb-3 text-success">
                Guidelines for Manuscripts (Font and Style)
              </h2>
              <ul className="fs-6">
                <li>
                  <b>File Format:</b> Microsoft Word (.doc or .docx)
                </li>
                <li>
                  <b>Font:</b> Times New Roman, size 12, with 1.5 line spacing
                </li>
                <li>
                  <b>Margins:</b> 1-inch on all sides
                </li>
                <li>
                  <b>Headings:</b>
                  <ul>
                    <li>
                      <b>Main headings:</b> Bold, size 14
                    </li>
                    <li>
                      <b>Sub-headings:</b> Bold, size 12
                    </li>
                  </ul>
                </li>
                <li>
                  <b>References:</b> APA style
                </li>
                <li>
                  <b>Tables & Figures:</b> Embed in the text, properly labeled
                  and referenced
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Manuscript Format */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h4 fw-bold mb-3 text-success">
                Format for Manuscripts
              </h2>
              <p className="fs-6">
                Each manuscript should include the following sections:
              </p>

              <h3 className="h5 fw-bold mt-3">Title Page</h3>
              <ul className="fs-6">
                <li>Concise and informative title</li>
                <li>Full names of all authors</li>
                <li>
                  Email IDs, mobile numbers, and designations of all authors
                </li>
                <li>Clearly identify the corresponding author</li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Abstract</h3>
              <ul className="fs-6">
                <li>
                  150–200 words summarizing research objectives, methods,
                  results, and conclusions
                </li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Keywords</h3>
              <ul className="fs-6">
                <li>4–6 keywords reflecting the core themes</li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Main Text</h3>
              <ul className="fs-6">
                <li>
                  <b>Introduction:</b> Problem, objectives, significance
                </li>
                <li>
                  <b>Literature Review:</b> Summarize existing research, show
                  gaps
                </li>
                <li>
                  <b>Methodology:</b> Design, data collection, techniques
                </li>
                <li>
                  <b>Results:</b> Findings with tables/figures
                </li>
                <li>
                  <b>Discussion:</b> Interpretation and linkage to research
                </li>
                <li>
                  <b>Conclusion:</b> Key findings, implications, limitations,
                  future work
                </li>
                <li>
                  <b>References:</b> APA style
                </li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Tables and Figures</h3>
              <ul className="fs-6">
                <li>Insert near first mention</li>
                <li>Number sequentially (e.g., Table 1, Figure 1)</li>
                <li>Provide descriptive captions</li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Acknowledgments</h3>
              <ul className="fs-6">
                <li>Recognize contributions that do not warrant authorship</li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Appendices</h3>
              <ul className="fs-6">
                <li>Include supplementary material</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Submission Details */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h4 fw-bold mb-3 text-success">Submission Details</h2>
              <p className="fs-6">
                Authors are required to submit manuscripts via email to:{" "}
                <a
                  href="mailto:ijmsabc@gmail.com"
                  className="fw-semibold text-decoration-none text-primary"
                >
                  ijmsabc@gmail.com
                </a>
              </p>
              <p className="fs-6">
                Each submission must include the following:
              </p>
              <ul className="fs-6">
                <li>
                  A cover letter declaring originality, unpublished status, and
                  exclusivity
                </li>
                <li>
                  Manuscript prepared according to guidelines
                </li>
                <li>
                  Full details of authors: names, designations, institution,
                  email, mobile
                </li>
                <li>Identification of corresponding author</li>
              </ul>
              <p className="fs-6">
                Submissions are acknowledged within 3–5 working days and enter a{" "}
                <b>double-blind peer review</b> process. Authors are notified of
                acceptance, revision needs, or rejection.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

        </>
  );
};

export default AuthorGuidelines;
