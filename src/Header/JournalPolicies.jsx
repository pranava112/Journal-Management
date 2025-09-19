import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect } from 'react';

const JournalPolicies = () => {
  useEffect(() => {
    document.title = "Journal Policies";
  }, []);

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1 className="text-center mb-5 sub_title">Journal Policies</h1>

          {/* Open Access Policy */}
          <section className="mb-5">
            <h2 className="mb-3">Open Access Policy</h2>
            <p className="lead">
              International Journal of Management Science and Business Conclave (IJMSABC) is an open access journal.
              This open access means that articles in the journal can be freely accessed, downloaded, shared and reused 
              by scientists, scholars, teachers, students, and others. This accelerates research, enriches education, 
              and fosters global knowledge exchange, in accordance with the BOAI definition of open access.
            </p>
            <div className="text-center my-4">
              <img
                src="./journalpolicy.png"
                alt="Journal Policy"
                className="img-fluid rounded shadow"
                style={{ maxWidth: "600px" }}
              />
            </div>
            <p>
              All IJMSABC articles are published under the terms of the Creative Commons Attribution 4.0 International License. 
              This license permits unrestricted use, distribution, and reproduction in any medium, provided the original work is properly cited.
            </p>
            <h3 className="mt-4">Benefits of open access for authors include:</h3>
            <ol className="ms-4">
              <li>Free access for all users worldwide</li>
              <li>Increased visibility and readership</li>
              <li>Increased citation and usage</li>
              <li>Increased interdisciplinary interaction</li>
              <li>Faster impact</li>
              <li>Authors retain copyright with a Creative Commons license</li>
              <li>
                Authors can post any version of their manuscript on personal or institutional websites, 
                in repositories, etc., provided the published source is cited and linked via DOI.
              </li>
            </ol>
          </section>

          {/* Peer Review Policy */}
          <section className="mb-5">
            <h2 className="mb-3">Peer Review Policy</h2>
            <p>
              The practice of peer review ensures that only quality research is published. 
              IJMSABC operates a conventional double-blind reviewing policy, where author names remain 
              anonymous to reviewers and vice versa. All submitted articles undergo a rigorous review process 
              to ensure thorough and detailed evaluation.
            </p>
            <h3 className="mt-4">Review procedure:</h3>
            <ul className="ms-4">
              <li>Article submission receives a tracking number for future correspondence.</li>
              <li>Initial assessment by the editor against journal scope and author guidelines.</li>
              <li>Decision to send the article for peer review or reject.</li>
              <li>Reviewers provide comments, suggestions, and recommendations.</li>
              <li>Editor makes the decision: accept, reject, or request revision.</li>
              <li>Authors revise (if required) and resubmit.</li>
              <li>Once accepted, the article goes into production and is published.</li>
              <li>Rejected articles may be transferred to another journal.</li>
            </ul>
          </section>

          {/* Editorial Policy */}
          <section className="mb-5">
            <h2 className="mb-3">Editorial Policy</h2>
            <h3 className="mt-3">Editorial Review and Acceptance</h3>
            <p>
              IJMSABC is a peer-reviewed, open access international journal publishing 
              research articles and reviews in management and allied disciplines.
            </p>
            <h3 className="mt-4">Guidelines for submitted articles:</h3>
            <ul className="ms-4">
              <li>Authors must adhere to the highest ethical standards.</li>
              <li>Acceptance is based on quality, originality, and significance.</li>
              <li>Articles should be clear, concise, and professional.</li>
              <li>Articles are reviewed for innovation, contribution, and theoretical advancement.</li>
              <li>The editor may modify manuscripts for clarity and correctness.</li>
              <li>All correspondence is via email.</li>
              <li>Final acceptance depends on compliance with IJMSABC requirements.</li>
            </ul>
            <p>
              Articles should be submitted online via the submission form or email at:{" "}
              <a href="mailto:ijmsabc@gmail.com">ijmsabc@gmail.com</a>
            </p>
          </section>

          {/* Plagiarism Prevention Policy */}
          <section>
            <h2 className="mb-3">Plagiarism Prevention Policy</h2>
            <p>
              IJMSABC follows a strong plagiarism policy to maintain scholarly integrity. 
              The journal uses Crossref Similarity Check (powered by iThenticate) to screen content for originality.
            </p>
            <h3 className="mt-4">By submitting, authors confirm that:</h3>
            <ul className="ms-4">
              <li>All authors have reviewed and approved the manuscript.</li>
              <li>No part of the manuscript is plagiarized.</li>
              <li>Proper references are provided wherever content is extracted.</li>
              <li>Strong action will be taken in cases of plagiarism.</li>
            </ul>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default JournalPolicies;
