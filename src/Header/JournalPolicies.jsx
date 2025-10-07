import { Card, Col, Container, Row } from "react-bootstrap";

import React from "react";

const JournalPolicies = () => {
  return (
    <Container className="my-5">
      {/* Page Title */}
      <Row className="mb-4">
        <Col>
          <h1 className="fw-bold text-primary text-center mb-3">
            Ethics and Policies
          </h1>
          {/* <p className="fs-5 text-muted text-center">
            International Journal of Management Science and Business Conclave
            (IJMSABC)
          </p> */}
        </Col>
      </Row>

      {/* Review Policy */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h4 fw-bold text-success mb-3">Review Policy</h2>
              <Card.Text className="fs-6">
                The International Journal of Management Science and Business
                Conclave (IJMSABC) is committed to maintaining the highest
                standards of academic integrity and quality through a rigorous
                 double-blind peer review process. Each manuscript is
                evaluated by at least two independent reviewers based on
                originality, relevance, methodology, clarity, and contribution
                to the field.
              </Card.Text>
              <Card.Text className="fs-6">
                The review process ensures that only high-quality, scholarly
                work is published. The average review timeline is{" "}
                4–6 weeks, though this may vary. Authors receive
                constructive feedback, and revised manuscripts are re-assessed
                before final acceptance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Plagiarism Policy */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h4 fw-bold text-success mb-3">Plagiarism Policy</h2>
              <Card.Text className="fs-6">
                The journal maintains a strict zero-tolerance policy on
                plagiarism. All submissions are screened using plagiarism
                detection software (e.g., Turnitin, Drillbit). Any paper
                with a similarity index exceeding the acceptable limit (10–12%)
                will be returned for revision or rejected.
              </Card.Text>
              <Card.Text className="fs-6">
                Plagiarism in any form—including verbatim copying, improper
                paraphrasing, or self-plagiarism—is considered unethical and
                unacceptable.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Processing Fee */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h4 fw-bold text-success mb-3">Processing Fee</h2>
              <Card.Text className="fs-6">
                Manuscript submission and processing for the International
                Journal of Management Science and Business Conclave (IJMSABC) is{" "}
                completely free of cost. The journal does not charge any
                fees for submission.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Journal Access Policy */}
      <Row>
        <Col>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h4 fw-bold text-success mb-3">
                Journal Access Policy
              </h2>
              <Card.Text className="fs-6">
                The International Journal of Management Science and Business
                Conclave (IJMSABC) is a print-only journal. All published
                articles are made available exclusively in printed format.
                Copies are distributed to authors, research institutions, and
                readers.
              </Card.Text>
              <Card.Text className="fs-6">
                This ensures that scholarly work reliably reaches academics,
                researchers, students, and professionals, thereby contributing
                to higher education and dissemination of knowledge in management
                and business studies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JournalPolicies;
