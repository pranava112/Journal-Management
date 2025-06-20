// import './AuthorGuidelines.css';

import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect } from 'react';

const AuthorGuidelines = () => {
  useEffect(() => {
    document.title = "Author Guidelines";
  }, []);

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Author Guidelines</h1>

          <p>
            The <strong>International Journal of Management Science and Business Conclave (IJMSBC)</strong>
            provides specific guidelines for authors preparing manuscripts for submission.
            Here's a comprehensive overview:
          </p>

          <h2 className="mt-4">Manuscript Preparation</h2>

          <h4 className="mt-3">Originality</h4>
          <p>
            Submissions must be original, unpublished works not under consideration elsewhere.
            Authors are responsible for ensuring their work is free from plagiarism and other
            forms of academic misconduct.
          </p>

          <h4>Authorship</h4>
          <p>
            Only individuals who have made significant contributions to the research should
            be listed as authors. All listed authors must consent to the submission.
          </p>

          <h4>Ethical Compliance</h4>
          <p>
            Research involving human participants, animals, or sensitive data must comply
            with relevant ethical standards. Ethical clearance from appropriate committees
            should be obtained, and a statement confirming such approval must be included
            in the manuscript.
          </p>

          <h2 className="mt-4">Manuscript Structure</h2>
          <ul className="list-group mb-4">
            <li className="list-group-item"><strong>Title Page:</strong> Full title, author names, affiliations, and contact details.</li>
            <li className="list-group-item"><strong>Abstract:</strong> A concise summary not exceeding 350 words.</li>
            <li className="list-group-item"><strong>Keywords:</strong> 5–8 relevant words or phrases.</li>
            <li className="list-group-item"><strong>Introduction:</strong> Background and objectives.</li>
            <li className="list-group-item"><strong>Literature Review:</strong> Contextual review of existing research.</li>
            <li className="list-group-item"><strong>Methodology:</strong> Detailed account of methods used.</li>
            <li className="list-group-item"><strong>Results:</strong> Clear presentation of findings.</li>
            <li className="list-group-item"><strong>Discussion:</strong> Interpretation of results.</li>
            <li className="list-group-item"><strong>Conclusion:</strong> Summary of findings and implications.</li>
            <li className="list-group-item"><strong>References:</strong> Properly cited sources.</li>
          </ul>

          <h4>Formatting</h4>
          <p>
            Manuscripts should be prepared in Microsoft Word, OpenOffice, or Rich Text Format (RTF).
            There is no strict length limit, but submissions should be concise and focused.
          </p>

          <h2 className="mt-4">Submission Process</h2>

          <h4>Submission Method</h4>
          <p>
            Manuscripts can be submitted through the journal’s online submission system
            or via email to the editorial office at <a href="mailto:editorial@cambridgeresearchpub.com">editorial@cambridgeresearchpub.com</a>.
          </p>

          <h4>Peer Review</h4>
          <p>
            All manuscripts undergo a rigorous double-blind peer review process to ensure
            scholarly quality and integrity. Based on reviewers’ recommendations, editors
            make the final decision on acceptance, revision, or rejection.
          </p>

          <h4>Conflict of Interest and Funding</h4>
          <p>
            Authors must disclose any financial or non-financial conflicts of interest and
            provide details of all sources of financial support, including grant numbers if applicable.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorGuidelines;
